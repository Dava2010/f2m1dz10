document.body.style.backgroundColor = 'blue'

let name = prompt('Ismingizni kiriting')

let newDiv = document.createElement('div')
newDiv.textContent = `${name}`
document.body.appendChild(newDiv)

newDiv.style.color = "yellow";
newDiv.style.fontSize = '80px'
newDiv.style.textAlign = 'center'
newDiv.style.alignContent = 'center'