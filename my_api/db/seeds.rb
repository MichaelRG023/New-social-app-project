# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)





User.destroy_all

 mike =User.create(

username: "Michael G",
password: "What is this",
email: "Omg368@gmail.cam"
)

joe = User.create(
    username: "Joe Mama",
    password: "Joemngus",
    email: "itsJoe@gmail.cam"
)

matthew = User.create(
    username: "Mat34",
    password: "Mateomuyfeo",
    email: "mat3456@gmail.cam"
)
puts "this seed is now finished"





puts "jobs done :)"