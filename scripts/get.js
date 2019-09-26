// A few helper functions

function get(url) {
    return fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return data
    })
}


function formatLyricsUrl(a, s) {
    url = `https://api.lyrics.ovh/v1/${a}/${s}`
    return url
}