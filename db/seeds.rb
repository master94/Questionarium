# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

master_user = User.find(1)

(0..20).each do |i|
	Question.create(caption: "Question #%d" % i, text: ("Text text text text #%d\n" % i) * 5, user: master_user)
end
