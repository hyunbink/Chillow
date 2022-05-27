# == Schema Information
#
# Table name: listings
#
#  id         :bigint           not null, primary key
#  street     :string           not null
#  city       :string           not null
#  zip_code   :integer          not null
#  state      :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  sqft       :integer          not null
#  beds       :integer          not null
#  baths      :integer          not null
#  price      :integer          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
