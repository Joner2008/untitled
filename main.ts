input.onButtonPressed(Button.A, function () {
    puntua.move(-1)
})
input.onButtonPressed(Button.B, function () {
    puntua.move(1)
})
let meteorito: game.LedSprite = null
let puntua: game.LedSprite = null
puntua = game.createSprite(2, 4)
music.setVolume(127)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    meteorito = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        meteorito.change(LedSpriteProperty.Y, 1)
    }
    if (meteorito.isTouching(puntua)) {
        game.gameOver()
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    } else {
        meteorito.delete()
        game.addScore(1)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
    basic.pause(200)
})
