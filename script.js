

window.addEventListener('keydown', function(event){
        const key = event.key;
        const value = document.getElementById('value');
        const keyCode = event.keyCode || event.which;
            document.querySelector('span').innerText = key;
            value.innerText = keyCode;

    let sound = document.getElementById('sound');
            sound.currentTime = 0;
            sound.play();
})