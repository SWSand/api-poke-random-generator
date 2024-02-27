const numGen = () => {
    let num = Math.floor(Math.random() * 1000) + 1
    console.log(num)
    getPokemon(num)
}

const getPokemon = async(num) => {
    try{
        let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`)
        let responseData = await response.json()
        let pokemonPic = document.getElementById("pokemonPic")

        pokemonPic.src = responseData.sprites.front_default
        type = responseData.types[0]['type'].name

        response = await fetch (`https://pokeapi.co/api/v2/type/${type}`)
        responseData = await response.json()

        let similarTypes = [responseData.pokemon[0].pokemon.name, responseData.pokemon[1].pokemon.name, responseData.pokemon[2].pokemon.name, responseData.pokemon[3].pokemon.name, responseData.pokemon[4].pokemon.name]

        for(let i=0; i<similarTypes.length; i++){
            response = await fetch (`https://pokeapi.co/api/v2/pokemon/${similarTypes[i]}`)
            responseData = await response.json()
            let pokemon = document.getElementById(`pokemon${i}`)
            pokemon.src = responseData.sprites.front_default
        }
    }
    catch(error){
        console.log(error.message)
    }
}

// getPokemon()