Rails.application.routes.draw do
  resources :appointments, only:[:index, :create]
  resources :clients, except: [:index]
  resources :stylist_services, only:[:index]
  resources :services, only: [:index]
  resources :stylists, only: [:index]

post "/signup", to: "clients#create"
get "/me", to: "clients#show"
get "/profile", to: "clients#show"
patch"/profile/:id/edit", to: "clients#update"
delete"/profile/:id", to: "clients#destroy"
patch "/profile/:id/appointments/:id/edit", to: "appointments#update"
delete "/profile/:id/appointments/:id", to: "appointments#destroy"

post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

end

haircut = Service.create({name: "Haircut", duration: 30, price: 50, category: "Hair"})
sarah = Stylist.create({name: "Sarah Smith", job_title: "Hairdresser"})
manicure = Service.create({name: "Manicure", duration: 45, price: 60, category: "Nails"})
anna = Stylist.create({name: "Anna Calloway", job_title: "Nail Technician"})
hydrate = Service.create({name: "Hydration Facial", duration: 60, price: 75, category: "Facial"})
delilah = Stylist.create({name: "Delilah Potter", job_title: "Aesthetician"})
swedish = Service.create({name: "Swedish Massage", duration: 60, price: 80, category: "Massage"})
jessie = Stylist.create({name: "Jessie Raymond", job_title: "Massage Therapist"})
stylist_services = StylistService.create([{ stylist_id: 1, service_id: 1 }, { stylist_id: 2, service_id: 2 }, { stylist_id: 3, service_id: 3 }, { stylist_id: 4, service_id: 4 }])
