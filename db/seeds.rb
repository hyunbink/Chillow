# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Listing.destroy_all 
Save.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('listings')
ActiveRecord::Base.connection.reset_pk_sequence!('saves')

demo = User.create(email: 'demologin@aa.io', password: 'password')
user_1 = User.create(email:'user1@aa.io', password:'111111')
user_2 = User.create(email:'user2@aa.io', password:'222222')
user_3 = User.create(email:'user3@aa.io', password:'333333')
user_4 = User.create(email:'user4@aa.io', password:'444444')
user_5 = User.create(email:'user5@aa.io', password:'555555')
user_6 = User.create(email:'user6@aa.io', password:'666666')
user_7 = User.create(email:'user7@aa.io', password:'777777')
user_8 = User.create(email:'user8@aa.io', password:'888888')
user_9 = User.create(email:'user9@aa.io', password:'999999')
user_10 = User.create(email:'user10@aa.io', password:'100000')
user_11 = User.create(email:'user11@aa.io', password:'110000')
user_12 = User.create(email:'user12@aa.io', password:'120000')
user_13 = User.create(email:'user13@aa.io', password:'130000')
user_14 = User.create(email:'user14@aa.io', password:'140000')



list_1 = Listing.create(street:'8140 Manjares', city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.57323', longitude:'-121.82277', sqft:'4737', beds:'5', baths:'6', price:'5500000', owner_id: demo.id)
list_1.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_1/list1_1.png"), filename:'list1_1.png')
list_1.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_1/list1_2.png"), filename:'list1_2.png')
list_1.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_1/list1_3.png"), filename:'list1_3.png')
list_1.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_1/list1_4.png"), filename:'list1_4.png')

list_2 = Listing.create(street:'801 Tesoro Ct', city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.57815', longitude:'-121.77640', sqft:'5351', beds:'5', baths:'5', price:'3995000', owner_id: user_1.id)
list_2.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_2/list2_1.png"), filename:'list2_1.png')
list_2.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_2/list2_2.png"), filename:'list2_2.png')
list_2.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_2/list2_3.png"), filename:'list2_3.png')
list_2.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_2/list2_4.png"), filename:'list2_4.png')

list_3 = Listing.create(street:"325 Estrella D'oro Ave", city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.57486', longitude:'-121.78339', sqft:'4492', beds:'4', baths:'5', price:'3834000', owner_id: user_2.id)
list_3.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_3/list3_1.png"), filename:'list3_1.png')
list_3.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_3/list3_2.png"), filename:'list3_2.png')
list_3.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_3/list3_3.png"), filename:'list3_3.png')
list_3.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_3/list3_4.png"), filename:'list3_4.png')
list_3.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_3/list3_5.png"), filename:'list3_4.png')

list_4 = Listing.create(street:'11538 Saddle Rd', city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.55454', longitude:'-121.76802', sqft:'5860', beds:'5', baths:'5', price:'2950000', owner_id: user_3.id)
list_4.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_4/list4_1.png"), filename:'list4_1.png')
list_4.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_4/list4_2.png"), filename:'list4_2.png')
list_4.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_4/list4_3.png"), filename:'list4_3.png')
list_4.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_4/list4_4.png"), filename:'list4_4.png')

list_5 = Listing.create(street:'11430 Saddle Rd', city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.55465', longitude:'-121.76970', sqft:'4011', beds:'4', baths:'5', price:'2295000', owner_id: user_5.id)
list_5.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_5/list5_1.png"), filename:'list5_1.png')
list_5.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_5/list5_2.png"), filename:'list5_2.png')
list_5.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_5/list5_3.png"), filename:'list5_3.png')
list_5.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_5/list5_4.png"), filename:'list5_4.png')

list_6 = Listing.create(street:'17 Mar Vista Dr', city:'Monterey', zip_code:'93940', state:'CA', latitude:'36.58371', longitude:'-121.90305', sqft:'3158', beds:'3', baths:'3', price:'2399000', owner_id: user_6.id)
list_6.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_6/list6_1.png"), filename:'list6_1.png')
list_6.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_6/list6_2.png"), filename:'list6_2.png')
list_6.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_6/list6_3.png"), filename:'list6_3.png')
list_6.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_6/list6_4.png"), filename:'list6_4.png')

list_7 = Listing.create(street:'170 Atherton Ave', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.45244', longitude:'-122.20631', sqft:'3731', beds:'5', baths:'5', price:'100000000', owner_id: user_7.id)
list_7.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_7/list7_1.png"), filename:'list7_1.png')
list_7.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_7/list7_2.png"), filename:'list7_2.png')
list_7.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_7/list7_3.png"), filename:'list7_3.png')
list_7.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_7/list7_4.png"), filename:'list7_4.png')

list_8 = Listing.create(street:'191 Britton Ave', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.45223', longitude:'-122.19895', sqft:'14525', beds:'5', baths:'8', price:'29800000', owner_id: user_8.id)
list_8.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_8/list8_1.png"), filename:'list8_1.png')
list_8.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_8/list8_2.png"), filename:'list8_2.png')
list_8.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_8/list8_3.png"), filename:'list8_3.png')
list_8.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_8/list8_4.png"), filename:'list8_4.png')
list_8.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_8/list8_5.png"), filename:'list8_4.png')

list_9 = Listing.create(street:'289 Park Ln', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.44307', longitude:'-122.19942', sqft:'11356', beds:'6', baths:'9', price:'28000000', owner_id: user_9.id)
list_9.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_9/list9_1.png"), filename:'list9_1.png')
list_9.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_9/list9_2.png"), filename:'list9_2.png')
list_9.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_9/list9_3.png"), filename:'list9_3.png')
list_9.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_9/list9_4.png"), filename:'list9_4.png')

list_10 = Listing.create(street:'303 Atherton Ave', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.43928', longitude:'-122.21652', sqft:'11660', beds:'7', baths:'9', price:'17900000', owner_id: user_10.id)
list_10.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_10/list10_1.png"), filename:'list10_1.png')
list_10.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_10/list10_2.png"), filename:'list10_2.png')
list_10.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_10/list10_3.png"), filename:'list10_3.png')
list_10.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_10/list10_4.png"), filename:'list10_4.png')
list_10.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_10/list10_5.png"), filename:'list10_4.png')

list_11 = Listing.create(street:'147 Patricia Dr', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.46001', longitude:'-122.21465', sqft:'9346', beds:'5', baths:'7', price:'15988000', owner_id: user_11.id)
list_11.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_11/list11_1.png"), filename:'list11_1.png')
list_11.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_11/list11_2.png"), filename:'list11_2.png')
list_11.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_11/list11_3.png"), filename:'list11_3.png')
list_11.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_11/list11_4.png"), filename:'list11_4.png')
list_11.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_11/list11_5.png"), filename:'list11_4.png')

list_12 = Listing.create(street:'393 Atherton Ave', city:'Atherton', zip_code:'94027', state:'CA', latitude:'37.43679', longitude:'-122.21830', sqft:'7649', beds:'5', baths:'9', price:'10888000', owner_id: user_12.id)
list_12.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_12/list12_1.png"), filename:'list12_1.png')
list_12.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_12/list12_2.png"), filename:'list12_2.png')
list_12.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_12/list12_3.png"), filename:'list12_3.png')
list_12.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_12/list12_4.png"), filename:'list12_4.png')
list_12.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_12/list12_5.png"), filename:'list12_4.png')

list_13 = Listing.create(street:'2205 Inverness Dr', city:'South Lake Tahoe', zip_code:'96150', state:'CA', latitude:'38.93290', longitude:'-120.00639', sqft:'3241', beds:'5', baths:'5', price:'3888000', owner_id: user_13.id)
list_13.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_13/list13_1.png"), filename:'list13_1.png')
list_13.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_13/list13_2.png"), filename:'list13_2.png')
list_13.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_13/list13_3.png"), filename:'list13_3.png')
list_13.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_13/list13_4.png"), filename:'list13_4.png')
list_13.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_13/list13_5.png"), filename:'list13_4.png')

list_14 = Listing.create(street:'2164 Catalina Dr', city:'South Lake Tahoe', zip_code:'96150', state:'CA', latitude:'38.93278', longitude:'-120.00853', sqft:'3192', beds:'4', baths:'4', price:'2895000', owner_id: user_14.id)
list_14.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_14/list14_1.png"), filename:'list14_1.png')
list_14.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_14/list14_2.png"), filename:'list14_2.png')
list_14.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_14/list14_3.png"), filename:'list14_3.png')
list_14.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_14/list14_4.png"), filename:'list14_4.png')
list_14.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_14/list14_5.png"), filename:'list14_4.png')

list_15 = Listing.create(street:'535 Kingsley Ave', city:'Palo Alto', zip_code:'94301', state:'CA', latitude:'37.44360', longitude:'-122.14976', sqft:'5353', beds:'5', baths:'4', price:'18950000', owner_id: user_1.id)
list_15.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_15/list15_1.png"), filename:'list15_1.png')
list_15.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_15/list15_2.png"), filename:'list15_2.png')
list_15.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_15/list15_3.png"), filename:'list15_3.png')
list_15.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_15/list15_4.png"), filename:'list15_4.png')
list_15.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_15/list15_5.png"), filename:'list15_4.png')

list_16 = Listing.create(street:'1975 Webster St', city:'Palo Alto', zip_code:'94301', state:'CA', latitude:'37.43837', longitude:'-122.13904', sqft:'6129', beds:'6', baths:'6', price:'15300000', owner_id: user_10.id)
list_16.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_16/list16_1.png"), filename:'list16_1.png')
list_16.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_16/list16_2.png"), filename:'list16_2.png')
list_16.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_16/list16_3.png"), filename:'list16_3.png')
list_16.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_16/list16_4.png"), filename:'list16_4.png')
list_16.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_16/list16_5.png"), filename:'list16_4.png')

list_17 = Listing.create(street:'2111 Barbara Dr', city:'Palo Alto', zip_code:'94303', state:'CA', latitude:'37.44286', longitude:'-122.13217', sqft:'4003', beds:'5', baths:'5', price:'9500000', owner_id: user_8.id)
list_17.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_17/list17_1.png"), filename:'list17_1.png')
list_17.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_17/list17_2.png"), filename:'list17_2.png')
list_17.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_17/list17_3.png"), filename:'list17_3.png')
list_17.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_17/list17_4.png"), filename:'list17_4.png')

list_18 = Listing.create(street:'410 Dabney Ln', city:'Beverly Hills', zip_code:'90210', state:'CA', latitude:'34.10013', longitude:'-118.39693', sqft:'6200', beds:'5', baths:'7', price:'38000000', owner_id: user_11.id)
list_18.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_18/list18_1.png"), filename:'list18_1.png')
list_18.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_18/list18_2.png"), filename:'list18_2.png')
list_18.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_18/list18_3.png"), filename:'list18_3.png')
list_18.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_18/list18_4.png"), filename:'list18_4.png')
list_18.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_18/list18_5.png"), filename:'list18_4.png')

list_19 = Listing.create(street:'620 Arkell Dr', city:'Beverly Hills', zip_code:'90210', state:'CA', latitude:'34.10681', longitude:'-118.39966', sqft:'18400', beds:'8', baths:'11', price:'88000000', owner_id: user_2.id)
list_19.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_19/list19_1.png"), filename:'list19_1.png')
list_19.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_19/list19_2.png"), filename:'list19_2.png')
list_19.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_19/list19_3.png"), filename:'list19_3.png')
list_19.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_19/list19_4.png"), filename:'list19_4.png')
list_19.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_19/list19_5.png"), filename:'list19_4.png')

list_20 = Listing.create(street:'1479 Carla Rdg', city:'Beverly Hills', zip_code:'90210', state:'CA', latitude:'34.09973', longitude:'-118.39979', sqft:'4257', beds:'4', baths:'5', price:'12995000', owner_id: user_9.id)
list_20.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_20/list20_1.png"), filename:'list20_1.png')
list_20.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_20/list20_2.png"), filename:'list20_2.png')
list_20.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_20/list20_3.png"), filename:'list20_3.png')
list_20.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_20/list20_4.png"), filename:'list20_4.png')
list_20.photos.attach(io: open("https://chillow-listings-seeds.s3.us-west-1.amazonaws.com/chillow_listings/listing_20/list20_5.png"), filename:'list20_4.png')









