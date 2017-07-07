# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# SEED DATA IN: '../../porkers_data.json'

seed_data = JSON.parse(File.read('../porkers_data.json'))



seed_data.each do |hog|
  Hog.create(name: hog[0], specialty: hog[1]['specialty'], greased: hog[1]['greased'], weight: hog[1]['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'], medal: hog[1]['highest medal achieved'])
end
