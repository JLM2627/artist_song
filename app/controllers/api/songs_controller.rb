class Api::SongsController < ApplicationController
    
    # '/api/artists/:id/songs'
    def index
       @songs = Song.all
       render json: @songs
     end
     def show
       @song = Song.find(params[:id])
       render json: @song
     end
    
     def create
        @artists = Artist.find(params[:artist_id])
        @song = Song.new(song_params)
        @artist.songs << @song
        @artist.save!
        render status: :ok
     end
    
     def update
       @song = Song.find(params[:id])
       @song.update!(song_params)
       render json: @song
     end
    
     def destroy
       Song.find(params[:id]).delete
       render status: :ok
     end
    
     private
    
     def song_params
       params.require(:song).permit(:title, :album, :preview_url)
     end
end
