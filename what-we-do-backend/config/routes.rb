Rails.application.routes.draw do
  resources :contents
  resources :media
  resources :groups
  resources :users
  get '/login', to: 'users#login'
  post '/users/search', to: 'users#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
