
class TweetsController < ApplicationController

  def index
    if params[:hashtag] && params[:user]

      hashtag = params[:hashtag]
      user = params[:user]

      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
        config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
        config.access_token = ENV['TWITTER_ACCESS_TOKEN']
        config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
      end

      search_results = []
      max_count = 3
      count = 0

      while count < max_count
        search_tweets = @client.user_timeline(user, results: 'mixed').take(1066)

        search_tweets.each do |tweet|
          if tweet.attrs[:geo] && search_results.include?(tweet) == false && hashtag == tweet.attrs[:entities][:hashtags][0][:text]
            search_results << tweet.attrs
          end
        end #End do

        count += 1
      end #End while loop
      render json: search_results
    else
      render json: {}
    end #End if statment
  end #End index action

end #End class
