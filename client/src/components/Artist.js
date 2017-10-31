import React, { Component } from 'react';
import axios from 'axios';
class Artist extends Component {
    state = {
        artist: {},
        songs: []
    }
    componentWillMount() {
        const artistId = this.props.match.params.id;
        this.fetchArtistAndSongData(artistId)
    }
    
    fetchArtistAndSongData = async (artistId) => {
        try {
            const artistResponse = await axios.get(`/api/artists/${artistId}`)
            const songResponse = await axios.get(`/api/artists/${artistId}/songs`)
            await this.state({
                artist: artistResponse.data,
                songs: songResponse.data
            });
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.artist.name}</h1>
                <pre>{JSON.stringify(this.state.artist)}</pre>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name + "'s Artist Photo"} />
                <ul>
                </ul>
            </div>
        );
    }
}
export default Artist;























// import React, { Component } from "react";
// import axios from 'axios'



// class Artist extends Component {

//     state = {
//         artist: {},
//         song: {}
//     }

//     async componentWillMount() {
//         const artistId = this.props.match.params.id;
//         this.fetchArtistAndSongData(artistId)


//     }
//         fetchArtistAndSongData = async (artistId) =>{
//              try {
//             // api endpoint: /api/artists/:artist_id
//             const artistResponse = this.props.match.params.artistId
//             const response = await axios.get(`/api/artists/${artistId}`)
//             this.setState({ artist: response.data })
            
//         } catch (error) {
//             console.log(error)
//         }

    
//     render() {
//         return (
//             <div>
//                 {this.state.artist.name}
//                 <pre>{JSON.stringify(this.state.artist)}</pre>
//             </div>
            
            
//         );
//     }
// }

// export default Artist;