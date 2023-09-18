# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Comment out seed data before 2nd push

# #5
# highlight = Service.create({name: "Highlight Touch-up", duration: 90, price: 250, category: "Hair"})
# leah = Stylist.create({name: "Leah Phelps", job_title: "Hairdresser"})
# #6
# pedicure = Service.create({name: "Pedicure", duration: 45, price: 60, category: "Nails"})
# daisy = Stylist.create({name: "Daisy Jones", job_title: "Nail Technician"})
# #7
# age = Service.create({name: "Anti-Aging Facial", duration: 70, price: 95, category: "Facial"})
# brandy = Stylist.create({name: "Brandy Moore", job_title: "Aesthetician"})
# #8
# deep = Service.create({name: "Deep Tissue Massage", duration: 65, price: 80, category: "Massage"})
# cassie = Stylist.create({name: "Cassie Lovegood", job_title: "Massage Therapist"})

# stylist_services = StylistService.create([{ stylist_id: leah.id, service_id: highlight.id }, { stylist_id: daisy.id, service_id: pedicure.id }, { stylist_id: brandy.id, service_id: age.id }, { stylist_id: cassie.id, service_id: deep.id }, { stylist_id: 1, service_id: highlight.id}, { stylist_id: 2, service_id: pedicure.id }, { stylist_id: 3, service_id: age.id }, { stylist_id: 4, service_id: deep.id }])
