class Group < ApplicationRecord
    has_many :invites
    has_many :users, through: :invites
    def suggestions #sample content from each user and throw it into function. run fetch and return output of fetch statement
        query = []
        type = []
        self.users.each do |user|
            query << user.likes.sample(3)
        end
        query = query.flatten
        query.each do |like| 
            type << like.type
        end
        type = type.flatten
        type.uniq
        return makeUrl(query,type)
    end
    def translator(array)
        array.map! do |string| 
            if  string != array[-1] then
                string = string.split(" ")
                string.map! do |word|
                    word != string[-1] ? word+"+" : word+"%2C+"
                end
            else
                string = string.split(" ")
                string.map! do |word|
                    word!= string[-1] ? word+"+" : word
                end
            end
        end
        array = array.flatten.join("")
    end
    def makeUrl(query, type)
        key = '346710-BrittanF-PHC42GKW'
        url = "https://tastedive.com/api/similar?k=#{key}&q="+translator(query)+"&type="+translator(type)
        fetch(url)
    end
    def fetch(url)
        response = RestClient.get(url)
        $parsed_response = JSON.parse(response)
    end
end
# query = ['red hot chili peppers','pulp fiction','burger king', "dark crystal","labyrinth"]
# type = ['movies','shows']
# makeUrl(query,type)  
