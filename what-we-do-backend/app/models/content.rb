class Content < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes

    def self.addContent(userID, title){
        chosenContent = Content.find_by(title: title)
        if chosenContent == nil 
            chosenContent = Content.create({title:title})
        end

        User.find(userID).contents << chosenContent
    }

    def self.removeContent(userID, ContentID){
        chosenContent = Content.find(ContentID)
        user = User.find(userID)

        usersLike = user.likes.find do |like|
            return like.content_id == ContentID
        end

        Like.destroy(usersLike.id)

        if(chosenContent.users.length == 0){
            Content.destroy(ContentID)
        }
    }
end
