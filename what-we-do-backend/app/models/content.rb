class Content < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes

    def self.addContent(userID, title)
        chosenContent = Content.find_by({title: title})
        if chosenContent == nil 
            chosenContent = Content.create({title:title})
        end

        User.find(userID).contents << chosenContent
    end

    def self.removeContent(userID, contentID)
        contentID = contentID.to_i

        chosenContent = Content.find(contentID)
        user = User.find(userID)

        usersLike = user.likes.find do |like|
            like.content_id == contentID
        end

        Like.destroy(usersLike.id)

        if(chosenContent.users.length == 0)
            Content.destroy(contentID)
        end
    end
end
