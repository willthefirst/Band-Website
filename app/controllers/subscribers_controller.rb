 class SubscribersController < ApplicationController
 
  def create
    @test_email = 'test@email.com'

    @subscriber = Subscriber.new(:email => params[:email])

    respond_to do |format|
      if @subscriber.save
        # format.html { redirect_to(@subscriber, :notice => 'Post create.') } 
        format.js
      else
        format.js
      end
    end
  end

  # def create
  #   @subscriber = Subscriber.new(params[:subscriber])

  #   respond_to do |format|
  #     if @subscriber.save
  #       format.html { render :nothing => true }
  #       format.json { render json: @subscriber, status: :created, location: @subscriber }
  #     else
  #       format.html { render action: "new" }
  #       format.json { render json: @subscriber.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end
end
