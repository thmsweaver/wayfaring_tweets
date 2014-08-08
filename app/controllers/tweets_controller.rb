
require 'dot_notation'

class TweetsController < ApplicationController

  def index
    if params[:hashtag].length > 0 && params[:user].length > 0

      hashtag = params[:hashtag].gsub('#', '')
      user = params[:user]

      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
        config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
        config.access_token = ENV['TWITTER_ACCESS_TOKEN']
        config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
      end

      search_tweets = @client.user_timeline(user, results: 'mixed').take(3199)
      filtered_search = search_tweets.select do |tweet|
        attrs = tweet.attrs
        attrs.extend(DotNotation)
          attrs.dot('geo.coordinates') && hashtag == attrs.dot('entities.hashtags.0.text')
      end #End do
      render json: filtered_search
    else
      #TODO: or put something here to raise errors in feedbackview/best to add something to Tweets model however
      render json: {}
    end #End if statment
  end #End index action

end #End class
