
// crie a função
function getGithubProfileInfos() {
    const url = `https://api.github.com/users/patriciasilvadev`

    // crie o alerta
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userImage.src = data.avatar_url 
        userName.textContent = data.name
        userBio.textContent = data.bio
    })
    
}

getGithubProfileInfos() // chame a função
