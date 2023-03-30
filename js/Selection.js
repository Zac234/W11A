let Chosen_pokemon=Cookies.get(`chosen_pokemon`)
if(Chosen_pokemon===udefined){
    document.body.insertAdjacentHTML(`afterbegin`, `h1:you need to select a pokemon from the previous page`)
}else{
    document.body.insertAdjacentHTML(`afterbegin`,`article`,$(Chosen_pokemon))
}