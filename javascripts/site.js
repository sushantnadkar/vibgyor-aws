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

var url = 'data/data.js';//'https://sushantnadkar.github.io/vibgyoraws/data/data.js';

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
                '<div id="' + ar.events[i].id + '" class="collapse text col-xs-12 col-md-12" aria-expanded="false">' + ar.events[i].description + '</div>' +
                '<a role="button" class="collapsed" data-toggle="collapse" href="#' + ar.events[i].id + '" aria-expanded="false" aria-controls="' + ar.events[i].id + '"></a>' +
                '<div class="col-xs-12 col-md-12"></br><strong>Where: </strong>' + ar.events[i].when + '</div>' +
                '<div class="col-xs-12 col-md-12"></br><strong>When: </strong>' + ar.events[i].where + '</p></div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }
  }
  for(i = 0; i < ar.testimonials.length; i++) {
    //testimonials page
    if($("#t-page").length !== 0) {
      var img_class = "";
      var attribution_class = "";
      if( i % 2 == 0 ) {
        img_class = "float-left";
        attribution_class = "text-right";
      } else {
        img_class = "float-right";
        attribution_class = "text-left";  
      }

      $("#t-page").append(
        '<div class="row testimonial">' +
          '<div class="col-8 quote">' +
            '<img class="testimonial-img rounded-circle ' + img_class + '" src="' + ar.testimonials[i].image + '"></img>' +
            '<p>' + ar.testimonials[i].quote + '</p>' +
          '</div>' +
          '<div class="col-8 attribution">' +
            '<p class="' + attribution_class + ' name">' + ar.testimonials[i].name + '</p>' +
            '<p class="' + attribution_class + ' title">' + ar.testimonials[i].title + '</p>' +
            '<p class="' + attribution_class + ' company">' + ar.testimonials[i].company + '</p>' +
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
  }
  // to stimulate hover effect on touch screen devices
  $(".img-container a").on("touchstart touched", function(e) {
    $(this).focus();
  });
});
