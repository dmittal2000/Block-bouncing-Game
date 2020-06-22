let character = document.getElementById("character")
let block = document.getElementById("block")
function jump() {
    if (character.classList != 'animate') {
        character.classList.add("animate")
    }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove('animate')
    }, 500)
}

let checkDead = setInterval(() => {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("u loose")
    }
}, 10);


