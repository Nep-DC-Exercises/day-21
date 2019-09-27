// https://developer.spotify.com/console/get-search-item/?q=beyonce&type=artist&market=&limit=&offset=

//https://developer.spotify.com/documentation/web-api/reference/search/search/

// This token expires so need to request a new one constantly

let accessToken = 'Bearer BQAYZFPAjjwJp0b_cZNzKrdoY111wprC-NeNg1Qar4K3qK5wwkB5piDWdaZtWHKStUPsxoWtJPy6yxC6VO10h89XHzisRByVj8hk0zItVisO5cwH6zyMz2abpSG4xMLtyS2pT88_Zv22j-J9'

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

