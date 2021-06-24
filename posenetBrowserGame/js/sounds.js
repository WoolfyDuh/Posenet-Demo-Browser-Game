let wallSpawnSound = new Audio("../media/pop.ogg")
let hitSound = new Audio("../media/bap.ogg")

export function playWallSpawnSound(){
    wallSpawnSound.play()
    console.log("%c wallSpawnSound has been played", "color: pink;")
}

export function playHitSound(){
    hitSound.play()
    console.log("%c hitSound has been played", "color: pink;")
}