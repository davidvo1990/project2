$(document).ready(function() {
  // Getting references to the name input and artist container, as well as the table body
  var nameInput = $("#artist-name");
  var phoneInput = $("#artist-phone");
  var emailInput = $("#artist-email");
  var genreInput = $("#artist-genre");
  var socialMediaInput = $("#artist-socialMedia");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an artist
  $(document).on("submit", "#artist-form", handleArtistFormSubmit);

  var url = window.location.search;
  var postId;

  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // Getting the initial list of Artists
  // getArtists();

  // A function to handle what happens when the form is submitted to create a new Artist
  function handleArtistFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput
        .val()
        .trim()
        .trim() ||
      !phoneInput
        .val()
        .trim()
        .trim() ||
      !emailInput
        .val()
        .trim()
        .trim() ||
      !genreInput
        .val()
        .trim()
        .trim() ||
      !socialMediaInput
        .val()
        .trim()
        .trim()
    ) {
      // return;
      throw new Error("Please input information!!!");
    }

    // Constructing a newPost object to hand to the database
    var newArtist = {
      name: nameInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      genre: genreInput.val().trim(),
      socialMedia: socialMediaInput.val().trim()
    };
    if (updating) {
      newArtist.id = postId;
      updatePost(newArtist);
    }
    // else {
    //     submitPost(newArtist);
    // }
  }

  // Update a given post, bring user to the floe page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/artists",
      data: post
    }).then(function() {
      window.location.href = "/artists";
    });
  }

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "artist");
  }

  // Gets post data for the current post if we're editing, or if we're adding to an artist's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
    case "artist":
      queryUrl = "/api/artists/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        console.log("Edit this " + data.name);
        nameInput.val(data.name);
        phoneInput.val(data.phone);
        emailInput.val(data.email);
        genreInput.val(data.genre);
        socialMediaInput.val(data.socialMedia);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }
});
