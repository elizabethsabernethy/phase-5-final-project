Rails.application.routes.draw do
  resources :stylist_services, only:[:index]
  resources :services, only: [:index]
  resources :stylists, only: [:index]
end
