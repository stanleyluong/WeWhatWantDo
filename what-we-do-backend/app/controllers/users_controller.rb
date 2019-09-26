class UsersController < ApplicationController

    def index
        render :json => User.all
    end

    def show
        @user = User.find(params[:id])
        render :json => @user
    end

    def login
        byebug
        @username = params[:username]
        @user = User.find_by(username: @username)
        render :json => @user
    end

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.username = @user.username.downcase.capitalize
            @user.save
            render :json => @user
        else
            byebug
        end
    end

    def search
        byebug
        @users = User.searchByName(params[:search])
        render :json => @users
    end

    private
    
    def user_params
        params.require(:user).permit(:username)
    end
end

