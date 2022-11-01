class Clerk < ApplicationRecord
    has_secure_password
    belongs_to :admin
    has_many :items
    has_many :requested_items
end
