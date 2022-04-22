
const icon = document.querySelector("#icon")
const body = document.querySelector("body")

function add(){
  body.classList.toggle("lightmode")

  if(body.className == "lightmode"){
    icon.src ='images/moon-outline.svg'

  } else {
    icon.src ='images/sunny-outline.svg'
  }
}
