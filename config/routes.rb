Rails.application.routes.draw do
  resources :clients
  resources :stylist_services, only:[:index]
  resources :services, only: [:index]
  resources :stylists, only: [:index]
end
