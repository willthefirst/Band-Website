ActiveAdmin.register Post do
  index do
  	column "Number", :id
  	column :title
  	column "Date Created", :created_at
  	column "Latest Edit", :updated_at
  	default_actions
  end

  form :partial => "form"

end
