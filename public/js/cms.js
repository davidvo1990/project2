$(document).ready(function() {
  // Getting jQuery references to the post date, gig, form, and artist select
  var dateInput = $("#date");
  var timeInput = $("#time");
  var gigInput = $("#gig");
  var cmsForm = $("#cms");
  var artistSelect = $("#artist");
  var venueSelect = $("#venue");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var artistId;
  var venueId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?GigId=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }
  // Otherwise if we have an ArtistId in our url, preset the artist select box to be our Artist
  else if (url.indexOf("?ArtistId=") !== -1) {
    artistId = url.split("=")[1];
  } else if (url.indexOf("?VenueId=") !== -1) {
    venueId = url.split("=")[1];
  }

  // Getting the artists, and their posts
  getArtists();
  getVenues();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a date, name, or artist
    if (
      !gigInput.val().trim() ||
      !dateInput.val().trim() ||
      !timeInput.val().trim() ||
      !artistSelect.val()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      name: gigInput.val().trim(),
      date: dateInput.val().trim(),
      time: timeInput.val().trim(),
      ArtistId: artistSelect.val(),
      VenueId: venueSelect.val()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  }

  // Submits a new post and brings user to floe page upon completion
  function submitPost(post) {
    $.post("/api/gigs", post, function() {
      window.location.href = "/floe";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an artist's existing posts
  function getPostData(id) {
    $.get("/api/gigs/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        gigInput.val(data.name);
        dateInput.val(data.date);
        timeInput.val(data.time);
        artistId = data.ArtistId || data.id;
        venueId = data.VenueId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Artists and then render our list of Artists
  function getArtists() {
    $.get("/api/artists", renderArtistList);
  }
  function getVenues() {
    $.get("/api/venues", renderVenueList);
  }

  // Function to either render a list of artists, or if there are none, direct the user to the page
  // to create an artist first
  function renderArtistList(data) {
    if (!data.length) {
      window.location.href = "/artists";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createArtistRow(data[i]));
    }
    artistSelect.empty();
    console.log(rowsToAdd);
    console.log(artistSelect);
    artistSelect.append(rowsToAdd);
    artistSelect.val(artistId);
  }
  function renderVenueList(data) {
    if (!data.length) {
      window.location.href = "/venues";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createVenueRow(data[i]));
    }
    venueSelect.empty();
    console.log(rowsToAdd);
    console.log(venueSelect);
    venueSelect.append(rowsToAdd);
    venueSelect.val(venueId);
  }

  // Creates the artist options in the dropdown
  function createArtistRow(artist) {
    var listOption = $("<option>");
    listOption.attr("value", artist.id);
    listOption.text(artist.name);
    return listOption;
  }
  function createVenueRow(venue) {
    var listOption = $("<option>");
    listOption.attr("value", venue.id);
    listOption.text(venue.name);
    return listOption;
  }

  // Update a given post, bring user to the floe page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/gigs",
      data: post
    }).then(function() {
      window.location.href = "/floe";
    });
  }
});
