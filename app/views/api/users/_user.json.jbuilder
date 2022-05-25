json.extract! user, :email, :id

# saves = saved_listings
# if logged_in? && saves
#     json.savedListings saves.map{ |save| save.listing_id }
# else
#     json.savedListings []
# end