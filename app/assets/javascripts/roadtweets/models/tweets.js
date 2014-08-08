
define(function(require) {

  var Backbone = require('backbone');

  var Tweet = Backbone.Model.extend({
    defaults: {
      user: {screen_name: '', created_at: '', profile_image_url: ''},
      text: '',
      media: [],
      geo: {type: '', coordinates: []},
      entities: {media: []}
    },

    getMedia: function() {
      var twitterEntities = this.get('entities');
      if('media' in this.get('entities')) {
        return twitterEntities.media[0].media_url;
      }else{
        var twitterUser = this.get('user')
        return twitterUser.profile_image_url.replace('_normal', '');
      }
    },

    getScreenName: function() {
      var twitterUser = this.get('user');
      return twitterUser.screen_name;
    },

    getCreatedAt: function() {
      var twitterUser = this.get('user');
      return twitterUser.created_at;
    },

    getLat: function() {
      var coords = this.get('geo');
      return coords.coordinates[0];
    },

    getLng: function() {
      var coords = this.get('geo');
      return coords.coordinates[1];
    }
  });

  var TweetsCollection = Backbone.Collection.extend({

    url: '/tweets',
    model: Tweet,

    parse: function(data) {
      return data;
    }

  });

  console.log('tweets.js connected')
  return new TweetsCollection();
});
