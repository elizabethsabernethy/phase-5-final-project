Rails.application.routes.draw do
  resources :stylists, only: [:index]
end
