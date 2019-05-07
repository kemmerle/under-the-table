Rails.application.routes.draw do
  root 'boston_restaurants#index'
  devise_for :users

  resources :boston_restaurants, only: [:index]
end
