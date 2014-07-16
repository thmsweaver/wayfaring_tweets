
define(function(require) {

  var Backbone = require('backbone');
  var L = require('leaflet');
  var tweets = require('../models/tweets');

  var markersArray = [];
  var group = new L.featureGroup(markersArray);
  var boundsToFit = [];

  var MapViewController = Backbone.View.extend({
    initialize: function() {
      this.map = L.map('map').setView([44.39445299, -70.50578587], 6);

      L.tileLayer('http://{s}.tiles.mapbox.com/v3/'+ leafletApiKey +'/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>      contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA   </a>  , Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18
      }).addTo(this.map);

      this.listenTo(this.collection, 'sync', this.populate);
    },

    populate: function() {
        for(var i=0; i < markersArray.length; i++) {
          this.map.removeLayer(markersArray[i]);
        }
        //TODO: add below memory-leak solution to stackoverflow
        markersArray.length = 0;
        boundsToFit.length = 0;

      tweets.each(function(tweet) {
        //TODO: bring in the marker image as asset
        markersArray
        .push(L.marker([tweet.getLat(), tweet.getLng()],
        {icon : L.icon({iconUrl: 'http://www.business-school.ed.ac.uk/blogs/ctc2014/wp-content/uploads/sites/8/leaflet-maps-marker-icons/map-marker.png', iconSize: [24,22]}) })
        .bindPopup('<div class="infowindow"><img src="'+ tweet.getMedia() +'" class="tweetpic"><h1>'+ tweet.getScreenName() +':</h1><p>' + tweet.get('text') +'</p></div>')
        .addTo(this.map));

        //TODO: fix bug where map does not visit single plot
        boundsToFit.push([[tweet.getLat(), tweet.getLng()]]);
      }, this);
      this.map.fitBounds(boundsToFit, {padding: [80, 80]});

    }

  });

  console.log('map.js connected');
  return new MapViewController({collection: tweets});
});
