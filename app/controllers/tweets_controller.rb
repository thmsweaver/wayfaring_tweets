
class TweetsController < ApplicationController

  def index
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
      config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
    end

    hashtag = params[:hashtag] || "#deepcreek6969"
    if params[:hashtag]
      render json: @client.search(hashtag, :result_type => "mixed").attrs
    else
      render json: {}
    end
  end

end
