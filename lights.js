const light = document.getElementById("light")
const buttons = document.getElementById("buttons")
let index = 0
intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnToColor[event.target.id]()
}


const nextindex = () => {
    if(index < 2){
        index++
    }else{
        index = 0
    }
}


const stopAutomatic = () => {
    clearInterval(intervalId)
}


const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[index]
    turnToColor[color]()
    nextindex()
}


const turnToColor = {
    'red' :      () => light.src = 'https://uploaddeimagens.com.br/images/003/176/434/full/image-removebg-preview_%282%29.png?1617205723',
    'yellow' :   () => light.src = 'https://uploaddeimagens.com.br/images/003/176/508/full/amarelo.png?1617209545',
    'green'  :   () => light.src = 'https://uploaddeimagens.com.br/images/003/176/511/full/verde-removebg-preview.png?1617209636',
    'auto':      () => intervalId = setInterval(changecolor, 1000),
    'stop':      () => light.src = 'https://uploaddeimagens.com.br/images/003/176/128/full/image-removebg-preview_%281%29.png?1617194385'
}


buttons.addEventListener("click", trafficLight)