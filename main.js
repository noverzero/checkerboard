document.addEventListener('DOMContentLoaded', function(){
//find element
let body = document.querySelector("body")
console.log(body)



//create element - the title
// let tile = document.createElement("div")
// console.log(tile)
// tile.style.width = "11.1%"
// console.log(tile)
// tile.style.paddingBottom = "11.1%"
// console.log(tile)
// tile.style.backgroundColor = "red"
//
// body.appendChild(tile)
// console.log(tile)

function randomHexCode() {
  let code = "#"
  const hexLetters = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
  for ( let i = 0; i < 6; i++) {
    code += hexLetters[Math.floor(Math.random() * 15)]
  }
  return code
}
  randomHexCode()

    for (let i = 1; i < 64 ; i++){
      if(i % 2 === 0){
      tile = document.createElement("div")
      console.log(tile)
      tile.style.width = "11.1%"
      console.log(tile)
      tile.style.paddingBottom = "11.1%"
      console.log(tile)
      tile.style.float = "left"
      tile.style.backgroundColor = randomHexCode()

      body.appendChild(tile)
      console.log(tile)
    } else {
      tile = document.createElement("div")
      console.log(tile)
      tile.style.width = "11.1%"
      console.log(tile)
      tile.style.paddingBottom = "11.1%"
      console.log(tile)
      tile.style.float = "left"
      tile.style.backgroundColor = "black"
      body.appendChild(tile)
      console.log(tile)
    }
  }










})
