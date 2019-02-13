var xhr = new XMLHttpRequest()
var container = document.getElementById('container')

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        listDataToDOM(data.objects[0].pokemon)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

function listDataToDOM(pokemon){

    for(var i = 0; i < pokemon.length; i++){
        var pokemonArray = pokemon[i]   

        var name = document.createElement('h3')
        var details = document.createElement('p')

        name.textContent = pokemonArray.name
        details.textContent = pokemonArray.resource_uri

        container.appendChild(name)
        container.appendChild(details)
    }

}