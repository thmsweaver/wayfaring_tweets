
define(function(require) {

  var Backbone = require('backbone');
  var L = require('leaflet');
  var tweets = require('../models/tweets');

  var markersArray = [];
  var group = new L.featureGroup(markersArray);
  var boundsToFit = [];
  var firstpolyline;

  var MapViewController = Backbone.View.extend({
    initialize: function() {
      this.map = L.map('map').setView([51.4800, 0], 14);

      L.tileLayer('http://{s}.tiles.mapbox.com/v3/'+ leafletApiKey +'/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18
      }).addTo(this.map);

      this.map.touchZoom.disable();
      this.map.scrollWheelZoom.disable();

      this.listenTo(this.collection, 'sync', this.populate);
    },

    populate: function() {
      for(var i=0; i < markersArray.length; i++) {
        this.map.removeLayer(markersArray[i]);
        this.map.removeLayer(firstpolyline);
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

        boundsToFit.push([tweet.getLat(), tweet.getLng()]);

        //TODO:polyline persists if empty search form is submitted
        firstpolyline = new L.Polyline(boundsToFit, {
          color: 'red',
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1,
        });

      }, this);

      if(boundsToFit.length > 0) { firstpolyline.addTo(this.map); }
      this.map.fitBounds(boundsToFit, {padding: [40, 40]});
    }
  });

  console.log('map.js connected');
  return new MapViewController({collection: tweets});
});
