class Post < ActiveRecord::Base
  attr_accessible :text, :title, :photo_file_name, :photo_content_type, :photo_file_size, :photo_updated_at
  has_many :comments
end
