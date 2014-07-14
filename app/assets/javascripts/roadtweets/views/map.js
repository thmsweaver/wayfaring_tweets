
//http://stackoverflow.com/questions/20213530/using-leaflet-awesome-markers-with-rails

define(function(require) {

  //imports:
  var Backbone = require('backbone');
  var L = require('leaflet');
  var tweets = require('../models/tweets');

  //map view that will dynamically respond to user input
  var MapViewController = Backbone.View.extend({
    initialize: function() {
      this.map = L.map('map').setView([41.39445299, -70.50578587], 3);

      L.tileLayer('http://{s}.tiles.mapbox.com/v3/thmsweaver.inpogpo4/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>      contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA   </a>  , Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18
      }).addTo(this.map);

      this.listenTo(this.collection, 'sync', this.render);
      this.render();
    },

    render: function() {
      tweets.each(function(tweet) {
        L.marker([tweet.getLat(), tweet.getLng()]).bindPopup('<p>' + tweet.get('text') +'</p>').addTo(this.map);
      }, this);
    }

  });

  console.log('map.js connected');
  return new MapViewController({collection: tweets});
});
