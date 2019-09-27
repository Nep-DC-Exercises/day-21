// https://developer.spotify.com/console/get-search-item/?q=beyonce&type=artist&market=&limit=&offset=

//https://developer.spotify.com/documentation/web-api/reference/search/search/

// This token expires so need to request a new one constantly

let accessToken = 'Bearer BQBVD3qRwx5OEDdAqqyHqnEv9RbfMKVziZAJwVv3COpU1Yfs7rNSHRLo3aNIAt6YS-3T3gElGgAfWYw_ZYHILoiyhvPhBVma70AvSx94bx362ukMAPTtmH3ZLZjYMNA7v0D_c2MX-spoyZ2Q'

function grabArtists(artist, token) {
    let url = `https://api.spotify.com/v1/search?q=${artist}&type=artist`; 

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let imgSrc = data.artists.items[0].images[0].url
        updateArtistPicture(imgSrc)
    })
}

