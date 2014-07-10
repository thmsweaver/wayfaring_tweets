function launchRoadTweets() {

  // do launchy stuff here....

  var map = L.map('map').setView([51.505, -0.09], 13);
  var marker = L.marker([51.5, -0.09]).addTo(map);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

  L.tileLayer('http://{s}.tiles.mapbox.com/v3/thmsweaver.inpogpo4/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>      contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA   </a>  , Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

}
