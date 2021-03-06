# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  photo_url                  :string
#  name                       :string
#  description                :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :photos
  has_many :likes
  has_many :comments

  has_many :photos_liked,
    through: :likes,
    source: :photo

  has_many :followers,
    through: :follower_follows,
    source: :follower

  has_many :follower_follows,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followees,
    through: :followee_follows,
    source: :followee

  has_many :followee_follows,
    foreign_key: :follower_id,
    class_name: :Follow

  has_attached_file :profile_photo,
  default_url: "https://s3.amazonaws.com/dappergram-dev/users/profile_photos/000/000/005/original/default_profile_photo.jpeg"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\z/

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
