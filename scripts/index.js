// Global Variables
const form = document.getElementById("form");
const artist = document.getElementById("artistValue");
const song = document.getElementById("songValue");
let url = `https://api.lyrics.ovh/v1/${artist}/${song}`
let lyricsBox = document.getElementById("lyricsContainer")
let clearBtn = document.getElementById("clearForm")
let apology = "Oops! Something went wrong. Please try again!"
let artistImage = document.getElementById("artistImage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let artistValue = artist.value
    let songValue = song.value

    if (artist.value == "" || song.value == "") {
        alert("Please don't leave the artist or song field blank!")
    } else {
        let queryURL = formatLyricsUrl(artistValue, songValue);
        updateLyrics(queryURL)
        grabArtists(artistValue, accessToken)
    }
})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    artist.value = ""
    song.value = ""
    artistImage.src = ""
    lyricsBox.innerHTML = ""
})

function updateLyrics(url) {
    
    get(url).then(function(response){
        if (response.error) {
            lyricsBox.innerHTML = apology 
            throw Error(response.error) 
        } else {
            lyricsBox.innerHTML = ""
            let lyricsArray = response.lyrics.split('\n')
            lyricsArray.forEach(element => {
                let p = document.createElement("p");
                p.innerHTML = element
                lyricsBox.append(p)
            });
        }
    })
}

function updateArtistPicture(imgSrc) {
    artistImage.setAttribute('src', imgSrc)
}



(function () {
    let hotUrl = 'https://api.lyrics.ovh/v1/red hot chili peppers/otherside/'
    artist.value = 'Red Hot Chili Peppers'
    song.value = 'Otherside'
    updateLyrics(hotUrl)
    grabArtists(artist.value, accessToken);
})();