define(function(require) {

  //import leaflet library:
  var Backbone = require('backbone');
  var L = require('leaflet');
  var tweets = require('../models/tweets');

  var MapViewController = Backbone.View.extend({
    initialize: function() {
      this.map = L.map('map').setView([21.4167, 39.8167], 13);

      L.tileLayer('http://{s}.tiles.mapbox.com/v3/thmsweaver.inpogpo4/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>      contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA   </a>  , Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18
      }).addTo(this.map);

      this.listenTo(this.collection, 'sync', this.render);
      this.render();
    },

    render: function() {
      // do things to my map...
    }
  });

  return new MapViewController({collection: tweets});
});
