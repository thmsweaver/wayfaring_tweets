class SessionsController < ApplicationController

  def new
  end

  def create
    # find the user by their email:
    user = User.find_by(email: params[:session][:email].downcase)

    # test is the user was found AND authenticates
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_back_or root_url
    else
      flash[:error] = 'invalid email/password'
      redirect_to signin_path
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end

end
