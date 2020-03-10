Rails.application.routes.draw do
  root :to => 'homes#login'
  post "likes/:twitter_id/create", to: 'likes#create'
  post "likes/:twitter_id/destroy" => "likes#destroy"
  get '/homes', to: 'homes#index'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/login', to: 'homes#login'
  resources :macs, only: [:new, :create, :show]
  resources :twitters, only: [:new, :create, :show]
end
