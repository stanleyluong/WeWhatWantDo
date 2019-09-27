class User < ApplicationRecord
    has_many :likes
    has_many :contents, through: :likes
    has_many :invites
    has_many :groups, through: :invites

    #give method to return sample so dont hit same thing multiple times. 

    def User.searchByName(string)
        # byebug
        string = string.downcase
        users = User.all
        return users.select do |user|
            user.username.downcase.include? (string)
        end
    end

end