Rails.application.routes.draw do
  namespace :api do
    resources :artists do
      resources :songs 
      
    end
  end
end

# what are the routes going to look like? they all start with api, they are nested api/whatever

# Artist inde get request to api/Artis
# song api/artist_id/song. check using rails routes