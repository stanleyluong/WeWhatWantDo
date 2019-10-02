class Content < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes

    def self.addContent(user, title, category)
        contentMatches = Content.where("TITLE = '#{title}'")
        chosenContent = nil

        #Unrecognized Title
        if (contentMatches.length == 0)
            chosenContent = Content.create({title:title, category:category})
            user.contents << chosenContent
            return
        end

        if (category != '')
            #Title & category match
            contentMatches.length.times do |i|
                if (contentMatches[i].category == category)
                    chosenContent = contentMatches[i]
                    user.contents << chosenContent
                    return
                end
            end

            #Title match, but no category match
            chosenContent = Content.create({title:title, category:category})
            user.contents << chosenContent
            return
        else

            #Title match, auto category
            chosenContent = contentMatches[0]
            user.contents << chosenContent
            return
        end    

        #Should never hit here
        byebug
        return
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
