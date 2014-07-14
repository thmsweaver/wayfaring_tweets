
define(function(require) {

  var Backbone = require('backbone');

  var Tweet = Backbone.Model.extend({
    defaults: {
      user: {screen_name: '', created_at: ''},
      text: '',
      media: [], //TODO
      geo: {type: '', coordinates: []}
    },

    getScreenName: function() {
      var twitterUser = this.get('user');
      return twitterUser.screen_name;
    },

    getCreatedAt: function() {
      var twitterUser = this.get('user');
      return twitterUser.created_at;
    },

    //do i need a function for getText?

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
    searchTerm: '',

    parse: function(data) {
      return data.statuses;
    }

    // search: function(hashtag) {
    //   this.searchTerm = hashtag;
    //   this.fetch();
    // },

    // fetch: function() {
    //   return Backbone.Collection.prototype.fetch.call(this, {
    //     data: {hashtag: this.searchTerm}
    //   });
    // }
  });

  console.log('tweets.js connected')
  return new TweetsCollection();
});
