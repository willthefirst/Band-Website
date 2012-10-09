class Subscriber < ActiveRecord::Base
  attr_accessible :email
  before_save { |subscriber| subscriber.email = email.downcase }
end
