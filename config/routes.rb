Rails.application.routes.draw do
  root 'boston_restaurants#index'
  devise_for :users

  resources :boston_restaurants, only: [:index]

  resources :boston_restaurants do
    collection do
      get :search
    end
  end

  namespace :api do
    namespace :v1 do
      post 'boston_restaurants/search', to: 'boston_restaurants#search'
    end
  end
end
