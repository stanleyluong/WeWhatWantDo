class Group < ApplicationRecord
    has_many :invites
    has_many :users, through: :invites

    def getSuggestions(type=['movies'])
        #sample content from each user and throw it into function
        #run fetch and return output of fetch statement
        query = []
        self.users.each do |user|
            query << user.likes.sample(3)
        end
        query = query.flatten
        
        type.uniq
        
        return fetch(query,type)
    end

    # https://tastedive.com/api/similar?q=eminem%2C+pulp+fiction

    # https://tastedive.com/api/similar?k=346710-BrittanF-PHC42GKW&q=dark+crystal%2C+labyrinth&type=movies%2C+shows&verbose=1&limit=20
    def fetch(query, type)
        url = 'https://tastedive.com/api/similar?k=346710-BrittanF-PHC42GKW&q='+query+type
        response = RestClient.get(url)
        @parsed_response = JSON.parse(response)
        return @parsed_response
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
    end

    # query = ['red hot chili peppers','pulp fiction','burger king', "dark crystal","labyrinth"]
    # type = ['movies','shows']
    # makeUrl(query,type)
    
end
