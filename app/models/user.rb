
class User < ActiveRecord::Base

  # add handlers to run when creating and saving:
  before_create :create_remember_token
  before_save :normalize_fields

  # validate name:
  validates :name,
    presence: true,
    length: { maximum: 50 }

  # validate email address:
  validates :email,
    presence: true,
    uniqueness: { case_sensitive: false },
    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }

  # implement secure password features:
  has_secure_password

  # create a new remember token for a user:
  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end

  # hash a token:
  def User.hash(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  private

  # create a new session token for the user
  def create_remember_token
    self.remember_token = User.hash(User.new_remember_token)
  end

  def normalize_fields
    self.email.downcase!
  end

end
