Rails.application.routes.draw do
  resources :services, only: [:index]
  resources :stylists, only: [:index]
end
