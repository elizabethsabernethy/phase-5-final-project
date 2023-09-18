# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Comment out seed data before 2nd push

haircut = Service.create({name: "Haircut", duration: 30, price: 50, category: "Hair"})
sarah = Stylist.create({name: "Sarah Smith", job_title: "Hairdresser"})
manicure = Service.create({name: "Manicure", duration: 45, price: 60, category: "Nails"})
anna = Stylist.create({name: "Anna Calloway", job_title: "Nail Technician"})
hydrate = Service.create({name: "Hydration Facial", duration: 60, price: 75, category: "Facial"})
delilah = Stylist.create({name: "Delilah Potter", job_title: "Aesthetician"})
swedish = Service.create({name: "Swedish Massage", duration: 60, price: 80, category: "Massage"})
jessie = Stylist.create({name: "Jessie Raymond", job_title: "Massage Therapist"})
stylist_services = StylistService.create([{ stylist_id: 1, service_id: 1 }, { stylist_id: 2, service_id: 2 }, { stylist_id: 3, service_id: 3 }, { stylist_id: 4, service_id: 4 }])
