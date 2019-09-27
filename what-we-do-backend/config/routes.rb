Rails.application.routes.draw do
  resources :contents
  resources :media
  resources :groups
  resources :users
  post '/login', to: 'users#login'
  post '/usersearch', to: 'users#search'
  get '/usersearch', to: 'users#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
