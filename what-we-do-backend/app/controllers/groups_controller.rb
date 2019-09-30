class GroupsController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :json_request?
    before_action :grab_group, except: [:create, :getGroups]


    def show
        if (@user.groups.include?(@group))
            # byebug
            render json: @group
        else
            byebug
        end
    end

    def create
        @user = User.find(session[:current_user_id])
        @group = Group.new(group_params)
        if @group.save
            @user.groups << @group 
            render :json => @group
        else
            byebug
        end
    end

    def getGroups
        @user = User.find(params[:userID])        
        @groups = @user.groups
        # byebug
        render json: @groups
    end

    def suggest
        @suggestions = @group.getSuggestions(params[:types])
        render :json => @suggestions
    end
   
    private

    def grab_group
        @user = User.find(session[:current_user_id])
        @group = Group.find(params[:id])
    end

    def group_params
        params.require(:group).permit(:title)
    end

    protected

    def json_request? 
        return request.format.json?
    end
end
