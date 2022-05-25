# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Save < ApplicationRecord
    validates :user_id, :listing_id, presence: true
    # validates_uniqueness_of :user_id, :scope => [:listing_id]

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing


end
