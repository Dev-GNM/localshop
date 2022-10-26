class Admin < ApplicationRecord
    validates :full_name, presence: true
    validates :email, presence: true
    validates :store_id, presence: true
    belongs_to :store
end