$(document).ready(function () {
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
  // This function grabs posts from the database and updates the view
  function getPosts(artist) {
    artistId = artist || "";
    if (artistId) {
      artistId = "/?ArtistId=" + artistId;
    }
    $.get("/api/gigs" + artistId, function (data) {
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
    $.get("/api/gigs" + venueId, function (data) {
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
    }).then(function () {
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
    var card = $("<div name='" + post.Venue.name + "' address='" + post.Venue.address + "'></div>")
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
    ///
    newPostCardBody.prepend(card);
    ///
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

  $(document).on("click", ".card-body", function () {
    $("#results-modal").modal("toggle");
    var name = this.firstChild.getAttribute("name").trim();
    var address = this.firstChild.getAttribute("address").trim();
    // console.log("Info: " + name + ", " + address);
    var client_id = "TNARZNEWQUAMTQPELOI4HAH4CW00GOJ5HQUC4XKL4TT0HHSO";
    var client_secret = "QHW2XYVXLW1A4XIFIIRTED4FA1Q2IXBOIA4H1PDA0G4Z3ZKH";
    var ver = moment().format('YYYYMMDD');
    var queryURL = "https://api.foursquare.com/v2/venues/search?near=" + address + "&query=" + name + "&client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + ver + ""
    // console.log(queryURL);
    // console.log(ver);
 
    var thisDiv = this;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      var nameV = $("<div>" + response.response.venues[0].name + "</div>");
      // console.log(response.response.venues[0].location.lat);
      // console.log(response.response.venues[0].location.lng);
      var latitude = response.response.venues[0].location.lat;
      var longitude = response.response.venues[0].location.lng;
      var id = response.response.venues[0].id;
      var addressV = $("<h3>Address: " + response.response.venues[0].location.formattedAddress.join(" ") + "</h3>");

      // console.log(thisDiv)
      // var contain = $("<div class='container bg-warning'><div>")
      // $(thisDiv).append(modal)
      // $(thisDiv).append(contain)
      // $(contain).append(nameV)
      // $(contain).append(addressV)
      $(".modal-title").html(nameV)
      $(".modal-title").append(addressV)

      // var query = "https://api.foursquare.com/v2/venues/" + id + "/photos?&client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + ver + ""
      // console.log(query)
      // var imgDiv = $("<div class='imgDiv'></div>")
      // $.ajax({
      //   url: query,
      //   method: "GET"
      // }).then(function (response) {
      //   var prefix = response.response.photos.items[0].prefix;
      //   var suffix = response.response.photos.items[0].suffix;
      //   var pic = $("<img src=" + prefix+"300x300"+suffix + ">")
      //   $(imgDiv).append(pic)
      //   $("#div-img").html(imgDiv)
      // })
var displayMap = $('<div style="width: 470px; height: 480px" id="mapContainer"></div>')
    $(".address").html(displayMap)
    
    // Initialize the platform object:
    var platform = new H.service.Platform({
      'app_id': 'DAlUlenY3NlnqEuBw1KC',
      'app_code': '7TABQYewooIp0wzYk8hZZw',
      useHTTPS: true
    });

    function addMarkersToMap(map) {
      var marker = new H.map.Marker({lat:latitude, lng:longitude});
      map.addObject(marker);
    }
    
    var pixelRatio = window.devicePixelRatio || 1;
    var defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });
    
    //Step 2: initialize a map - this map is centered over Europe
    var map = new H.Map(document.getElementById('mapContainer'),
      defaultLayers.normal.map,{
      center: {lat:latitude, lng:longitude},
      zoom: 15,
      pixelRatio: pixelRatio
    });
    
    //Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    
    // Now use the map as required...
    addMarkersToMap(map);

    })
    
  });

});

