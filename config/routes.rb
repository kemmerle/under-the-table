Rails.application.routes.draw do
  root 'boston_restaurants#index'
  devise_for :users

  resources :boston_restaurants, only: [:index, :show]

  resources :boston_restaurants do
    collection do
      get :search
    end
  end

  namespace :api do
    namespace :v1 do
      resources :boston_restaurants, only: [:show]
      post 'boston_restaurants/search', to: 'boston_restaurants#search'
    end
  end
end
