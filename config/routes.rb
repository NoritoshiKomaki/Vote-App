Rails.application.routes.draw do
  root :to => 'macs#index'
  resources :macs, only: [:new, :create, :show]
end
