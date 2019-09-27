Rails.application.routes.draw do
  resources :contents
  resources :media
  resources :groups
  resources :users
  get '/login', to: 'users#login'
  post '/usersearch', to: 'users#search'
  get '/user-groups', to: 'users#groups'
  post '/groups/:id/suggest', to: 'groups#suggest'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
