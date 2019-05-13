Rails.application.routes.draw do
  root 'boston_restaurants#index'
  devise_for :users

  get 'boston_restaurants/search', to: 'boston_restaurants#search'
  get 'restaurants/', to: 'restaurants#index'
  resources :boston_restaurants, only: [:index, :show, :search]
  resources :cambridge_restaurants, only: [:index, :show, :search]

  namespace :api do
    namespace :v1 do
      resources :boston_restaurants, only: [:index, :show]
      post 'boston_restaurants/search', to: 'boston_restaurants#search'
    end
  end
end
