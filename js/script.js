window.addEventListener('load', function() {  //Created by 1KA4
    let pads = document.querySelectorAll('.pads div');
    let music = document.querySelectorAll('.music');
    let visual = document.querySelector('.bubbles');
    let colors = [
        "aqua",
        "yellow",
        "yellowgreen",
        "lightcoral",
        "cornflowerblue",
        "green"
    ];

    
    pads.forEach(function(item,i) {
        item.addEventListener('click', function() {
            music[i].currentTime = 0;
            music[i].play();

            let bubble = document.createElement('div');
            visual.appendChild(bubble);
            bubble.style.backgroundColor = colors[i];
            bubble.style.animation = 'jump 1s ease';
            bubble.addEventListener('animationend', function() {
                visual.removeChild(this);
            });
        });
    });
    window.addEventListener('keydown',function(event) {
        let btn = event.keyCode;

        for(let i = 0; i < 6; i++) {
            if(btn == (70 + i)) {
                music[i].currentTime = 0;
                music[i].play();
                let bubble = document.createElement('div');
                visual.appendChild(bubble);
                bubble.style.backgroundColor = colors[i];
                bubble.style.animation = 'jump 1s ease';
                bubble.addEventListener('animationend', function() {
                    visual.removeChild(this);
                });
            }
        }
    });
});