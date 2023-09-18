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
stylist_services = Stylist_services.create([{ stylist_id: 1, service_id: 1 }, { stylist_id: 2, service_id: 2 }])
