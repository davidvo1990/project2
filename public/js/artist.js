$(document).ready(function() {
  // Getting references to the name input and artist container, as well as the table body
  var nameInput = $("#artist-name");
  var phoneInput = $("#artist-phone");
  var emailInput = $("#artist-email");
  var genreInput = $("#artist-genre");
  var socialMediaInput = $("#artist-socialMedia");
  var artistList = $("tbody");
  var artistContainer = $(".artist-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an artist
  $(document).on("submit", "#artist-form", handleArtistFormSubmit);
  $(document).on("click", ".edit-artist", handleEditArtistButtonPress);
  $(document).on("click", ".delete-artist", handleDeleteButtonPress);

  // Getting the initial list of Artists
  getArtists();

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

    // Calling the upsertArtist function and passing in the value of the name input
    upsertArtist({
      name: nameInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      genre: genreInput.val().trim(),
      socialMedia: socialMediaInput.val().trim()
    });
  }

  // A function for creating an artist. Calls getArtists upon completion
  function upsertArtist(artistData) {
    $.post("/api/artists", artistData).then(getArtists);
  }

  // Function for creating a new list row for artists
  function createArtistRow(artistData) {
    var newTr = $("<tr>");
    newTr.data("artist", artistData);
    newTr.append("<td>" + artistData.name + "</td>");
    newTr.append("<td>" + artistData.phone + "</td>");
    newTr.append("<td>" + artistData.email + "</td>");
    newTr.append("<td>" + artistData.genre + "</td>");
    newTr.append("<td>" + artistData.socialMedia + "</td>");
    if (artistData.Gigs) {
      newTr.append("<td> " + artistData.Gigs.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append(
      "<td><a href='/floe?ArtistId=" + artistData.id + "'>Go to Gigs</a></td>"
    );
    newTr.append(
      "<td><a href='/cms?ArtistId=" + artistData.id + "'>Create a Gig</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:blue' class='edit-artist'>Edit Artist</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-artist'>Delete Artist</a></td>"
    );
    return newTr;
  }

  // Function for retrieving artists and getting them ready to be rendered to the page
  function getArtists() {
    $.get("/api/artists", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createArtistRow(data[i]));
      }
      renderArtistList(rowsToAdd);
      nameInput.val("");
      phoneInput.val("");
      emailInput.val("");
      genreInput.val("");
      socialMediaInput.val("");
    });
  }

  // A function for rendering the list of artists to the page
  function renderArtistList(rows) {
    artistList
      .children()
      .not(":last")
      .remove();
    artistContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      artistList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no artists
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Artist before you can create a Post.");
    artistContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("artist");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/artists/" + id
    }).then(getArtists);
  }

  function handleEditArtistButtonPress() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("artist");
    window.location.href = "/edit-artist?post_id=" + currentPost.id;
  }
});
