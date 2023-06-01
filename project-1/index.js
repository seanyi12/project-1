const pokemon = []
document.addEventListener('DOMContentLoaded', () => {
  const info = document.querySelector('.pokemon-info')
  const info1 = document.createElement('div')
  ul = document.createElement('ul')
  info.append(info1)
  info.append(ul)
  info1.textContent = 'Pokemon List'
  const button = document.getElementById('btn')
  button.addEventListener('dblclick', clicked)
  getPokemon()
  const pokeSearch = document.getElementById('pokeSearch')
  //console.log(pokeSearch)
  pokeSearch.addEventListener('input', (e) => {
    let pokeTarget = e.target.value
    pokemon.forEach(pokenames => {
      //console.log(pokenames.name)
      if (pokenames.name === pokeTarget) {
        info1.textContent = pokeTarget
      } else {
        info1.textContent = "Doesnt Exist"
      }
    })
  })
})

function getPokemon (){
  fetch("http://localhost:3000/pokemon-data")
  .then(res => res.json())
  .then(data =>{
    pokemon.push(data)
    addToPage(data)
    })
  }

function addToPage(arr) {
  arr.forEach((element) => {
    console.log(element)
    const li = document.createElement('li')
    li.textContent = element.name
    if (element.status) {
      li.classList.add('active')
    } else {
      li.classList.add('inactive')
    }
    ul.append(li)
    li.addEventListener('click', (e) => {
      li.classList.toggle('active')
      li.classList.toggle('inactive')
    })
    
  });
}

function clicked() {
  alert('You have clicked button')
}
