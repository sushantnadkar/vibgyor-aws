function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://sushantnadkar.github.io/vibgyoraws/data/data.js', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

window.onload = loadJSON(function(r){
  var ar = JSON.parse(r);
  for(i = 0; i < ar.upcommingevents.length; i++) {
    //home page upcomming events
    if($("#upcomming-events .row").length !== 0) { 
      $("#upcomming-events .row").append(
        '<div class="col-xs-12 col-md-6">' +
        '<div style="background-image:url( '+ ar.upcommingevents[i].image +' )">' +
        '<h4>' + ar.upcommingevents[i].name + '</h4>' +
        '</div></div>'
      );
    }
    //upgomming events page
    if($("#ue-page").length !== 0) {
      $("#ue-page").append(
        '<div class="row event">' +
          '<div class="col-xs-12 col-md-6">' +
              '<div class="row event-img" style="background-image:url(' + ar.upcommingevents[i].image + ')">' +
              '</div>' +
          '</div>' +
          '<div class="col-xs-12 col-md-6">' +
            '<div class="row event-desc">' +
                '<div class="col-xs-12 col-md-12"><h5>' + ar.upcommingevents[i].name + '</h5></div>' +
                '<div id="text" class="col-xs-12 col-md-12">' + ar.upcommingevents[i].description + '</div>' +
                '<div class="col-xs-12 col-md-12"></br><strong>Where: </strong>' + ar.upcommingevents[i].when + '</div>' +
                '<div class="col-xs-12 col-md-12"></br><strong>When: </strong>' + ar.upcommingevents[i].where + '</p></div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );        
    }
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
});