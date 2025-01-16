// Nathan

const seconds = (new Date()).getSeconds()

const p = document.querySelector('p')

setTimeout( () => {
p.textContent = 'General Kenobi!' + seconds
}, 2000)

setTimeout( () => {
if (seconds % 2 == 1)
{
    p.style.color = '#990000'    
}
else{
    p.style.color = '#00CC00'
}
}, 3000)