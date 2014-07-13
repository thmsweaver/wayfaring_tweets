Rails.application.routes.draw do

  root 'welcome#index'

  resources :users, except: [:new]
  resources :sessions, only: [:create]

  get '/signup' => 'users#new'
  get '/signin' => 'sessions#new'
  get '/tweets' => 'tweets#index'
  delete '/signout' => 'sessions#destroy'

end
