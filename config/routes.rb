Rails.application.routes.draw do
  resources :clients
  resources :stylist_services, only:[:index]
  resources :services, only: [:index]
  resources :stylists, only: [:index]

post "/signup", to: "clients#create"
get "/me", to: "clients#show"
get "/profile", to: "clients#show"

post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

end
