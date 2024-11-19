const character = document.getElementById("character");
const block = document.getElementById("block");
let counter = 0;

function jump() {
    const jumpSound = new Audio('ohyeahh.mp3'); 
    jumpSound.play();
    if (character.classList.contains("animate")) return;
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}


document.addEventListener("keydown", function () {
    jump();
});


document.addEventListener("click", function () {
    jump();
});


document.addEventListener("touchstart", function () {
    jump();
});


const checkDead = setInterval(function () {
    const endSound = new Audio('end.mp3');
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 70 && blockLeft > 50 && characterTop >= 150) {
        block.style.animation = "none";
        endSound.play();
        alert("Game Over. Score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1.5s infinite linear";
    } else {
        counter++;
        endSound.pause();
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
