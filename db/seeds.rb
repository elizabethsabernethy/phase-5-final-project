# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Comment out seed data before 2nd push

# #1
# haircut = Service.create({name: "Haircut", duration: 30, price: 50, category: "Hair"})
# sarah = Stylist.create({name: "Sarah Smith", job_title: "Hairdresser"})
# #2
# manicure = Service.create({name: "Manicure", duration: 45, price: 60, category: "Nails"})
# anna = Stylist.create({name: "Anna Calloway", job_title: "Nail Technician"})
# #3
# hydrate = Service.create({name: "Hydration Facial", duration: 60, price: 75, category: "Facial"})
# delilah = Stylist.create({name: "Delilah Potter", job_title: "Aesthetician"})
# #4
# swedish = Service.create({name: "Swedish Massage", duration: 60, price: 80, category: "Massage"})
# jessie = Stylist.create({name: "Jessie Raymond", job_title: "Massage Therapist"})
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

# stylist_services = StylistService.create([{ stylist_id: sarah.id, service_id: haircut.id }, { stylist_id: anna.id, service_id: manicure.id }, { stylist_id: delilah.id, service_id: hydrate.id }, { stylist_id: jessie.id, service_id: swedish.id }, { stylist_id: leah.id, service_id: highlight.id }, { stylist_id: daisy.id, service_id: pedicure.id }, { stylist_id: brandy.id, service_id: age.id }, { stylist_id: cassie.id, service_id: deep.id }, { stylist_id: sarah.id, service_id: highlight.id}, { stylist_id: anna.id, service_id: pedicure.id }, { stylist_id: delilah.id, service_id: age.id }, { stylist_id: jessie.id, service_id: deep.id }])
