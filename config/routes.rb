Rails.application.routes.draw do
  resources :appointments, only:[:index]
  resources :clients, except: [:index]
  resources :stylist_services, only:[:index]
  resources :services, only: [:index]
  resources :stylists, only: [:index]

post "/signup", to: "clients#create"
get "/me", to: "clients#show"
get "/profile", to: "clients#show"
patch "/profile/:id/appointments/:id/edit", to: "appointments#update"
delete "/profile/:id/appointments/:id", to: "appointments#destroy"

post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

end
