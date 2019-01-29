//homepage start
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
  console.log(ar.event[0].name);
  for(i = 0; i < ar.event.length; i++) {
    $("#upcomming-events .row");
    $("#upcomming-events .row").append(
      '<div class="col-xs-12 col-md-6">' +
      '<div style="background-image:url( '+ ar.event[i].image +' )">' +
      '<h4>' + ar.event[i].name + '</h4>' +
      '</div></div>'
    );
  }
});
//homepage end