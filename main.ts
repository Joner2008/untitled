input.onButtonPressed(Button.A, function () {
    puntua.move(-1)
})
input.onButtonPressed(Button.B, function () {
    puntua.move(1)
})
let puntua: game.LedSprite = null
puntua = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1200)
})
