
require 'dot_notation'

class TweetsController < ApplicationController

  def index

    hashtag = params[:hashtag].gsub('#', '')
    user = params[:user]

    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
      config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
    end

    filtered_search = @client.user_timeline(user, results: 'mixed').take(3199).select do |tweet|
      attrs = tweet.attrs
      attrs.extend(DotNotation)
        attrs.dot('geo.coordinates') && hashtag == attrs.dot('entities.hashtags.0.text')
    end

    render json: filtered_search
  end
end
