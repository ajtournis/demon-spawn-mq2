function Spawn_Enemy () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd111ddddddf......
            ......fd1dddddddbf......
            ......fd1dfbddbbff......
            ......fbddfcdbbcf.......
            .....ffffccddbfff.......
            ....fcb1bbbfcffff.......
            ....f1b1dcffffffff......
            ....fdfdf..ffffffffff...
            .....f.f.....ffffff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        mySprite2.follow(mySprite, 25)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprites.destroy(mySprite, effects.fire, 500)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
function Spawn_Rewards () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 8 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite3, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . d d d d d d d . . . . . 
            . . d d . . . . . . . d d . . . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            . . d d . . . . . . . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . . . . . . d . . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . . . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 9 . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            . d . . . . . 9 . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 9 . . . . . d . 
            d . . . . . . 9 9 . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . 9 9 . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            . d . . . . . 9 . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 9 . . . . . d . 
            d . . . . . . 9 9 . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            d . . . . . . 5 . . . . . . d . 
            d . . . . . . 9 9 . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            . d . . . . . 9 . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 9 . . . . . d . 
            d . . . . . . 9 9 . . . . . d . 
            d . . . . . . 5 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 5 . . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            d . . . . . . 9 . . . . . . d . 
            . d . . . . . 9 . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 9 . . . . . d . 
            d . . . . . . 1 9 . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            . d . . . . . 9 . . . . . d . . 
            . d . . . 9 9 9 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 9 . . . . d . . 
            . d . . . . . . 9 . . . . d . . 
            d . . . . . . . 1 . . . . . d . 
            d . . . . . . 1 1 . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            . d . . . . . 1 . . . . . d . . 
            . d . . . 9 1 1 . . . . . d . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 9 9 9 9 9 . d d . . . 
            . d . . . . 9 9 1 . . . . d . . 
            . d . . . . . . 1 . . . . d . . 
            d . . . . . . . 1 . . . . . d . 
            d . . . . . . 1 1 . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            . d . . . . . 1 . . . . . d . . 
            . d . . . 1 1 1 . . . . . d . . 
            . . d d . 1 9 9 9 9 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . d . . . . 1 1 1 . . . . d . . 
            . d . . . . . . 1 . . . . d . . 
            d . . . . . . . 1 . . . . . d . 
            d . . . . . . 1 1 . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            . d . . . . . 1 . . . . . d . . 
            . d . . . 1 1 1 . . . . . d . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . d . . . . 1 1 1 . . . . d . . 
            . d . . . . . . 1 . . . . d . . 
            d . . . . . . . 1 . . . . . d . 
            d . . . . . . 1 1 . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            d . . . . . . 1 . . . . . . d . 
            . d . . . . . 1 . . . . . d . . 
            . d . . . 1 1 1 . . . . . d . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . d . . . . 1 1 1 . . . . d . . 
            . d . . . . . . 1 . . . . d . . 
            d . . . . . . . 1 . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . 1 . . . . . d . . 
            . d . . . 1 1 1 . . . . . d . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . d . . . . 1 1 . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . . . . . . . d . . 
            . d . . . 1 . . . . . . . d . . 
            . . d d . 1 1 1 1 1 . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . d d d d d d d . . . . . 
            . . d d . . . . . . . d d . . . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            d . . . . . . . . . . . . . d . 
            . d . . . . . . . . . . . d . . 
            . d . . . . . . . . . . . d . . 
            . . d d . . . . . . . d d . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    if (mySprite.y > otherSprite.y) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        info.changeScoreBy(-50)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        info.changeScoreBy(100)
    }
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Peter Francis Gerracci`, SpriteKind.Player)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff99999999999fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaa999999999999999ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaa99999aaaafffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaa9999999aaaaffffffffffffffffffffff5fffffff
    ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaa999aaaaaaaaaa999aaaaa9999aafffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaa999999999999aaaaaaaaa9aaaaffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffff5ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaa999aaaaa99aaaaaaaaaaaa9afffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaa9999aaaaaaaaa999aaaaaaaa99affffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffaaaa99aaaaaaaaaaaaaaa999999999aaaffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffff5fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaa999aafffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffff9999999999999999999fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999a99999999ffffffffffffffff5ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff5ffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff7777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff776666666667766ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff667777777776666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666766666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666676666666766ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666676666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666676666666766fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66766766fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666766666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffff66666666666fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffff66666666666fffffffff6666666fffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffff66666667666fffffffff6666666fffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666676fffffffffffffffffffffffffffffffffff67666666666fffffffff6766766fffffffffffffffffffffffffff
    fffffffffffffffffffff666676666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffff66666666666fffffffff6666666fffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666766fffffffffffffffffffffffffff66766666fffffffffffffffffffffffffffffffffff66666666666fffffffff6676676fffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666fffffffffffffffffffffffffffffffffff66666666666fffffffff6666666fffffffffffffffffffffffffff
    fffffffffffffffffffff666666666666666fffffffffffffffffffffffffff66666666bbbbbbbbbbbffffffffffffffffffffffff66666666666fffffffbbbbbbbbbbbbfffbbbbbbbbfffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffff66667666676fffffbbbbbbbbbbbbbbfbbbbbbbbbbbbfffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffff66666666666fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffff66666666666ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbb99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbb9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbb9999999999bbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbb999999999999bbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb9999999999999999bbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbb9999999999999999bbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb999999999999999999bbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbffffffffffffffffffbbbbbbbbbbbbbbbbfbb99999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbffb99999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbfb9999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
info.setLife(3)
info.setScore(0)
Spawn_Enemy()
