# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

User.destroy_all
User.create(email: 'demologin@aa.io', password: 'password')


# list1 = Listing.create(schema)
# list1.photos.attch(io: open("url goes here, given by aws, don't have yet"), filename:'name_of_file.png/jpg')
# list1.photos.attch(io: open("url goes here, given by aws, don't have yet"), filename:'name_of_file.png/jpg')
# list1.photos.attch(io: open("url goes here, given by aws, don't have yet"), filename:'name_of_file.png/jpg')
# list1.photos.attch(io: open("url goes here, given by aws, don't have yet"), filename:'name_of_file.png/jpg')
