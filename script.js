

let start = document.getElementById('info1');
let pressed = document.getElementById('pressed');
let value = document.getElementById('value');
pressed.style.display = "none";
value.style.display = "none";
window.addEventListener('keydown', function(event){
        start.style.display="none";
        const key = event.key;
        const value = document.getElementById('value');
        const keyCode = event.keyCode || event.which;
            document.querySelector('span').innerText = key;
            value.innerText = keyCode;

    let sound = document.getElementById('sound');
            sound.currentTime = 0;
            sound.play();
            pressed.style.display = "block";
            value.style.display = "block";  
           
})
