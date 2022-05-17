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
class Listing < ApplicationRecord
    validates :street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :price, presence: true
    validates :zip_code, length: { is: 5 }
    validates :state, length: { is: 2 }, inclusion: { in: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 
        'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 
        'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]}

        has_one_attached :photo

end