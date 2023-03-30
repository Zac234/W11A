let Charmander = {
    name:`Charmander`,
    Pokedex:004,
    Type:`Fire`,
    Evolutions:`Charmeleon``Charizard`,
    Image:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png`
}

let Bulbasaur ={
    name:`Bulbasaur`,
    Pokedex:001,
    Type:`Grass`,
    Evolutions:`Ivysaur``Venusaur`,
    Image:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`
}

let Squirtle={
    Name:`Squirtle`,
    Pokedex:007,
    Type: `Water`,
    Evolutions:`Wartortle``Blastoise`,
    Image:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png`
}


let button_1=Cookie.set(document.getElementById(`selection1`))
let button_2=Cookie.set(document.getElementById(`selection2`))
let button_3=Cookie.set(document.getElementById(`selection3`))

if(button_1===true){
    Cookie.set(`selection`, Bulbasaur)
}else{
    document.body.insertAdjacentHTML("afterbegin",`h1:select another pokemon`)
}
if(button_2===true){
    Cookie.set(`selection`, Charmander)
}else{
    document.body.insertAdjacentHTML("afterbegin", `h1:choose a different pokemon`)
}
if(button_3===true){
    Cookie.set(`selection`,Squirtle)
}else{
    document.body.insertAdjacentHTML("afterbegin",`h1: Choose a different pokemon`)
}

let chosen_pokemon= Cookie.get(`selection`)

