const apiKey = 'n8MooQiwWmhqxCQsFoNRa5m32EYV3VJU';

const api_url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

/* 
fetch(api_url)
.then(rps => {
    rps.json().then(resp => console.log(resp))
})
.catch(error => console.log(error) )
*/

fetch(api_url)
.then(resp => resp.json())
.then(({data}) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(error => console.log(error) )
