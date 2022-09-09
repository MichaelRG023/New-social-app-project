Rails.application.routes.draw do
  

  root 'sessions#home '
  resources :users, only: [:new, :create, :edit, :update, :show, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
get "/snacks", to:"snacks#index"
get "snacks/:keyboard_mash", to: "snacks#work"
  # Defines the root path route ("/")
  # root "articles#index"

get "/users",  to: "users#index"
#login routes


post "/login", to: "application#login"

 # sign up routes 
#post "/login", to: "sessions#create"
#post "/login", to: "sessions#login"

#avatar routes

end
