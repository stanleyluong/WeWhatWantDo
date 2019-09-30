class ContentsController < ApplicationController

    def index
        
    end

    def create
        @title = params[:content][:title]
        @content = Content.find_or_create_by(title: @title)

        if(!!params[:content][:users][0]){
            @user = params[:content][:users][0]
            # VERY BAD PRACTICE, FIX LATER
            @content.users << @user
            @content.users = @content.users.uniq
            @content.save
        }
    end


    def getContent
        @user = User.find(params[:userID])        
        @contents = @user.contents
        render json: @contents
    end
end
