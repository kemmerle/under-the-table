Rails.application.routes.draw do
  root 'restaurants#index'
  devise_for :users

  get 'restaurants/', to: 'restaurants#index'
  get 'boston_restaurants/search', to: 'boston_restaurants#search'
  get 'cambridge_restaurants/search', to: 'cambridge_restaurants#search'
  resources :boston_restaurants, only: [:index, :show, :search]
  resources :cambridge_restaurants, only: [:index, :show, :search]
  resources :posts, only: [:index, :show, :new, :create] do
    resources :replies, only: [:index, :show, :new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :boston_restaurants, only: [:index, :show]
      resources :cambridge_restaurants, only: [:index, :show]
      post 'boston_restaurants/search', to: 'boston_restaurants#search'
      post 'cambridge_restaurants/search', to: 'cambridge_restaurants#search'
    end
  end
end
