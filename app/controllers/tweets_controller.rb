
class TweetsController < ApplicationController

  def index
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = 'MvxHCCWVgO3yYdKtI1kcgRn43'
      config.consumer_secret = '3pxDPsxcz8S2vtxow5dHwqwWTxyB5E2K2ouMUIO8E0Llta1XtP'
      config.access_token = '55591591-C8d19wp8jS98w4j0RB1BeOELlKsjoi2LxWBl5nn1n'
      config.access_token_secret = 'gP3xcrXKu4n3G5VCisxhNUveftXErwkkvPiJTz9oafaos'
    end

    hashtag = params[:hashtag] || "#deepcreek6969"
    if params[:hashtag]
      render json: @client.search(hashtag, :result_type => "recent").attrs
    else
      render json: {}
    end
  end

end
