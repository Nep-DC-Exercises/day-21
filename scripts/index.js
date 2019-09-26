const form = document.getElementById("form");
const artist = document.getElementById("artistValue");
const song = document.getElementById("songValue");
let url = `https://api.lyrics.ovh/v1/${artist}/${song}`
let defaultUrl = `https://api.lyrics.ovh/v1/red hot chili peppers/otherside`
let lyricsBox = document.getElementById("lyricsContainer")
let clearBtn = document.getElementById("clearForm")
let apology = "Oops! Something went wrong. Please try again!"

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let artistValue = artist.value
    let songValue = song.value
    let queryURL = formatLyricsUrl(artistValue, songValue);
    updateLyrics(queryURL)

    if (SyntaxError) {
        lyricsBox.innerHTML = apology
    }
})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    artist.value = ""
    song.value = ""
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

(function () {
    // artist.value = 'Red Hot Chili Peppers'
    // song.value = 'Otherside'
    // updateLyrics(defaultUrl)
})();