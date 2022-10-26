class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :full_name, presence: true
    validates :password,
              length: { minimum: 6 },
              if:  -> { new_record? || !password.nil? }

    validates :role, presence: true
end