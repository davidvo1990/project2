$(document).ready(function() {
  // Getting references to the name input and venue container, as well as the table body
  var nameInput = $("#venue-name");
  var addressInput = $("#venue-address");
  var contactInput = $("#venue-contact");
  var phoneInput = $("#venue-phone");
  var websiteInput = $("#venue-website");
  var venueList = $("tbody");
  var venueContainer = $(".venue-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an venue
  $(document).on("submit", "#venue-form", handleVenueFormSubmit);
  $(document).on("click", ".delete-venue", handleDeleteButtonPress);
  $(document).on("click", ".edit-venue", handleEditVenueButtonPress);
  // Getting the initial list of Venues
  getVenues();
  // A function to handle what happens when the form is submitted to create a new Venue
  function handleVenueFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput
        .val()
        .trim()
        .trim() ||
      !addressInput
        .val()
        .trim()
        .trim() ||
      !contactInput
        .val()
        .trim()
        .trim() ||
      !phoneInput
        .val()
        .trim()
        .trim() ||
      !websiteInput
        .val()
        .trim()
        .trim()
    ) {
      // return;
      throw new Error("Please input information!!!");
    }
    // Calling the upsertVenue function and passing in the value of the name input
    upsertVenue({
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      contact: contactInput.val().trim(),
      phone: phoneInput.val().trim(),
      website: websiteInput.val().trim()
    });
  }
  // A function for creating an venue. Calls getVenues upon completion
  function upsertVenue(venueData) {
    $.post("/api/venues", venueData).then(getVenues);
  }
  // Function for creating a new list row for venues
  function createVenueRow(venueData) {
    var newTr = $("<tr>");
    newTr.data("venue", venueData);
    newTr.append("<td>" + venueData.name + "</td>");
    newTr.append("<td>" + venueData.address + "</td>");
    newTr.append("<td>" + venueData.contact + "</td>");
    newTr.append("<td>" + venueData.phone + "</td>");
    newTr.append("<td>" + venueData.website + "</td>");
    if (venueData.Gigs) {
      newTr.append("<td> " + venueData.Gigs.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append(
      "<td><a href='/floe?VenueId=" + venueData.id + "'>Go to Gigs</a></td>"
    );
    newTr.append(
      "<td><a href='/cms?VenueId=" + venueData.id + "'>Create a Gig</a></td>"
    );
    // newTr.append(
    //   "<td><a href='/edit-venue?VenueId=" +
    //     venueData.id +
    //     "'>Edit Venue</a></td>"
    // );
    newTr.append(
      "<td><a style='cursor:pointer;color:blue' class='edit-venue'>Edit Venue</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-venue'>Delete Venue</a></td>"
    );
    return newTr;
  }
  // Function for retrieving venues and getting them ready to be rendered to the page
  function getVenues() {
    $.get("/api/venues", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createVenueRow(data[i]));
      }
      renderVenueList(rowsToAdd);
      nameInput.val("");
      addressInput.val("");
      contactInput.val("");
      phoneInput.val("");
      websiteInput.val("");
    });
  }
  // A function for rendering the list of venues to the page
  function renderVenueList(rows) {
    venueList
      .children()
      .not(":last")
      .remove();
    venueContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      venueList.prepend(rows);
    } else {
      renderEmpty();
    }
  }
  // Function for handling what to render when there are no venues
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Venue before you can create a Post.");
    venueContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("venue");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/venues/" + id
    }).then(getVenues);
  }

  function handleEditVenueButtonPress() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("venue");
    window.location.href = "/edit-venue?VenueId=" + currentPost.id;
  }
});
