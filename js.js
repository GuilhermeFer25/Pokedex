var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegapokemons(quantidade.value)
    
})
pegapokemons(3)
function pegapokemons(quantidade){
fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+quantidade)
.then(response => response.json())
.then(allpokemon =>{
    var pokemon = [];
    allpokemon.results.map((val)=>{

fetch(val.url)
.then(response => response.json())
.then(pokemonSingle =>{
   pokemon.push({nome:val.name,imagem:pokemonSingle.sprites.front_default,habi:pokemonSingle.base_experience,
 height:pokemonSingle.height, weight: pokemonSingle.weight, order:pokemonSingle.order}); //
    if(pokemon.length == quantidade){

       var pokemonBoxes = document.querySelector('.pokemon-boxes')
       pokemonBoxes.innerHTML="";

        console.log(pokemon)
    
        pokemon.map(function (val){
            pokemonBoxes.innerHTML+=
            `<div class="pokemon-box">
                <img src="`+val.imagem+`"/>
                <p>`+val.nome+`</p>
                <div id="container"class="container">
                <p> experience: `+val.habi+` </p>
                <p>height: `+val.height+` </p>
                <p>weight: `+val.weight+`</p>
                </div>
                <p>`+val.order+` </p>
                </div><!--Box-->`
           
          })
    }

})

})
pokemon.map((val)=>{
    console.log(val.nome) 
})
})
}