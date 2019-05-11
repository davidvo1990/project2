$(document).ready(function() {
  // var gigContainer = $(".gig-container");
  $(document).ready(function() {
    /* global moment */

    // gigContainer holds all of our posts
    var gigContainer = $(".gig-container");
    var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    // Variable to hold our posts
    var posts;

    // The code below handles the case where we want to get gig posts for a specific Artist
    // Looks for a query param in the url for ArtistId
    var url = window.location.search;
    var artistId;
    var venueId;
    if (url.indexOf("?ArtistId=") !== -1) {
      artistId = url.split("=")[1];
      getPosts(artistId);
    } else if (url.indexOf("?VenueId=") !== -1) {
      venueId = url.split("=")[1];
      getVenue(venueId);
    }
    // If there's no artistId we just get all posts as usual
    else {
      getPosts();
    }
    // if (url.indexOf("?VenueId=") !== -1) {
    //   venueId = url.split("=")[1];
    //   getVenue(venueId);
    // }
    // // If there's no artistId we just get all posts as usual
    // else {
    //   getVenue();
    // }
    // This function grabs posts from the database and updates the view
    function getPosts(artist) {
      artistId = artist || "";
      if (artistId) {
        artistId = "/?ArtistId=" + artistId;
      }
      $.get("/api/gigs" + artistId, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty(artist);
        } else {
          initializeRows();
        }
      });
    }

    function getVenue(venue) {
      venueId = venue || "";
      if (venueId) {
        venueId = "/?VenueId=" + venueId;
      }
      $.get("/api/gigs" + venueId, function(data) {
        console.log("Posts", data);
        console.log(venueId);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty(venue);
        } else {
          initializeRows();
        }
      });
    }

    // This function does an API call to delete posts
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/gigs/" + id
      }).then(function() {
        getPosts(postCategorySelect.val());
      });
    }

    // InitializeRows handles appending all of our constructed post HTML inside gigContainer
    function initializeRows() {
      gigContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      gigContainer.append(postsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(post) {
      // var formattedDate = new Date(post.createdAt);
      // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var formattedDate = new Date(post.date);
      // console.log(formattedDate)
      formattedDate =
        "Event Date: " + moment(formattedDate).format("MMMM Do YYYY");

      var formattedTime = "Event Time: " + post.time;

      var newPostCard = $("<div>");
      newPostCard.addClass("card mt-5");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info mr-2");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<br><small>");
      var newPostTime = $("<br><small>");
      var newPostArtist = $("<h5>");
      newPostArtist.text("Booked by Artist: " + post.Artist.name);
      newPostArtist.css({
        color: "blue",
        "margin-top": "-10px"
      });

      var newPostVenue = $("<h4>");
      newPostVenue.text("Venue: " + post.Venue.name);

      var newPostContact = $("<h5>");
      newPostContact.text("Contact: " + post.Venue.contact);
      var newPostPhone = $("<h5>");
      newPostPhone.text("Phone: " + post.Venue.phone);

      deleteBtn.css({
        float: "right",
        "margin-top": "-10px"
      });
      editBtn.css({
        float: "right",
        "margin-top": "-10px"
      });

      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      newPostCardBody.css({
        "font-size": "20px",
        color: "red"
      });
      // var newPostBody = $("<p>");
      newPostTitle.text(post.name + " ");
      // newPostBody.text(post.body);
      newPostDate.text(formattedDate);
      newPostTime.text(formattedTime);

      newPostCardBody.append(newPostVenue);
      newPostCardBody.append(newPostContact);
      newPostCardBody.append(newPostPhone);

      // newPostContact
      newPostCardBody.append(newPostDate);
      newPostCardBody.append(newPostTime);

      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostArtist);
      newPostCardHeading.append($("<br>"));
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);

      // newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      return newPostCard;
    }

    // This function figures out which post we want to delete and then calls deletePost
    function handlePostDelete() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      deletePost(currentPost.id);
    }

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      window.location.href = "/cms?post_id=" + currentPost.id;
    }

    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Artist #" + id;
      }
      gigContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html(
        "No posts yet" +
          partial +
          ", navigate <a href='/cms" +
          query +
          "'>here</a> in order to get started."
      );
      gigContainer.append(messageH2);
    }
  });
});
