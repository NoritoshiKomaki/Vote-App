Rails.application.routes.draw do
  root :to => 'homes#login'
  get '/homes', to: 'homes#index'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/login', to: 'homes#login'
  resources :macs, only: [:new, :create, :show]
  resources :twitters, only: [:new, :create, :show]
end
