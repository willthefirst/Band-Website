ActiveAdmin.register Subscriber do
  index do
  	column "Number", :id
  	column :email
  	column "Date Created", :created_at
  	default_actions
  end

  form :partial => "form"
end
