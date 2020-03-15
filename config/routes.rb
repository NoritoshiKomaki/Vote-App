Rails.application.routes.draw do
  root :to => 'homes#login'
  post "likes/:twitter_id/create", to: 'likes#create'
  post "likes/:twitter_id/destroy" => "likes#destroy"
  post "like2s/:online_id/create", to: 'like2s#create'
  post "like2s/:online_id/destroy" => "like2s#destroy"
  get '/homes', to: 'homes#index'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/login', to: 'homes#login'
  resources :macs, only: [:new, :create, :show]
  resources :twitters, only: [:index, :new, :create]
  resource :twitter, only: [:show, :edit]
  resources :onlines, only: [:index, :new, :create]
  resource :online, only: [:show, :edit]
end
