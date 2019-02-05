function loadJSON(url, callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

var url = 'https://sushantnadkar.github.io/vibgyoraws/data/data.js';

window.onload = loadJSON(url, function(r){
  var ar = JSON.parse(r);
  for(i = 0; i < ar.flagshipevents.length; i++) {
    //home page events
    if($("#flagship-events .row").length !== 0) {
      $("#flagship-events .row").append(
        '<div class="col-xs-12 col-md-6">' +
        '<div style="background-image:url( '+ ar.flagshipevents[i].image +' )">' +
        '<h4>' + ar.flagshipevents[i].name + '</h4>' +
        '</div></div>'
      );
    }
    //events page
    if($("#e-page").length !== 0) {
      $("#e-page").append(
        '<div class="row event">' +
          '<div class="col-xs-12 col-md-6">' +
              '<div class="row event-img" style="background-image:url(' + ar.events[i].image + ')">' +
              '</div>' +
          '</div>' +
          '<div class="col-xs-12 col-md-6">' +
            '<div class="row event-desc">' +
                '<div class="col-xs-12 col-md-12"><h5>' + ar.events[i].name + '</h5></div>' +
                '<div id="text" class="col-xs-12 col-md-12">' + ar.events[i].description + '</div>' +
                '<div class="col-xs-12 col-md-12"></br><strong>Where: </strong>' + ar.events[i].when + '</div>' +
                '<div class="col-xs-12 col-md-12"></br><strong>When: </strong>' + ar.events[i].where + '</p></div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }
  }
  for(i = 0; i < ar.successstories.length; i++) {
    //success stories page
    if($("#ss-page").length !== 0) {
      $("#ss-page").append(
        '<div class="row event">' +
          '<div class="col-xs-12 col-md-12">' +
              '<img class="event-img" src="' + ar.successstories[0].image + '"></img>' +
              '<h4>' + ar.successstories[0].title + '</h4>' +
              '<p>' + ar.successstories[0].story + '</p>' +
          '</div>' +
        '</div>'
      );
    }
  }
  for(i = 0; i < ar.galleryimages.length; i++) {
    if($("#gallery-container .gallery").length !== 0) {
      $("#gallery-container .gallery").append(
        '<div class="img-container" style="background-image: url(' + ar.galleryimages[i].image + ')">' +
        '<img src="' + ar.galleryimages[i].image + '">' +
			    '<a href="#">' +
			      '<div class="caption text-center">' +
			        '<p>' + ar.galleryimages[i].caption + '</p>' +
			      '</div>' +
          '</a>' +
		    '</div>'
      );
    }
    // to stimulate hover effect on touch screen devices
    $(".img-container a").on("touchstart touched", function(e) {
      $(this).focus();
    });
  }
});
