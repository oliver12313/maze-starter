scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 . . . . . . . . . . 2 . . 
        . 2 . . 2 . . . 2 2 . . 2 . . . 
        . 2 . . . . . . . . . . . 2 . . 
        . 2 . . . . . . . . . . . 2 . . 
        f 2 . . . . . . . . . . . 2 . . 
        f f 2 . . 2 . . . . . . . 2 2 . 
        f f 2 . . 2 2 2 2 2 2 2 . . 2 . 
        f f f 2 . . . . . . . . . 2 2 . 
        . . e . 2 2 2 2 . . . . 2 2 . . 
        . . e . . . . 2 2 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 . . . . . . 
        . 2 2 2 2 2 2 . 2 2 2 2 2 2 . . 
        . . . . . . . . 2 . . . . . 2 2 
        . . . . . . . 2 2 2 . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setBounceOnWall(true)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
    mySprite2.setVelocity(50, 50)
    runLevel()
})
function runLevel () {
    info.startCountdown(20)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . d d . . d d d . . . . . . 
    . . d d . . . . . d d d . . . . 
    . . d . . f . . f . . d . . . . 
    . . d . . . . . . . . d . . . . 
    . . d . . 2 . . 2 . d d . . . . 
    . . d d . . 2 2 . d d . . . . . 
    . . . . d d d d d . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 7 7 7 7 7 7 2 2 2 . . . 
    . 2 2 . 2 2 2 2 2 . 2 2 2 2 . . 
    . 2 . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    `, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . f f f f f f f f f f f . 
    . . . . f f f f f f f f f f f . 
    . . . . . . f f . . . f f f f . 
    . . . . . . . . f . . . . . f . 
    . . . . . . . . . f . . . . . f 
    . . . . . . . . . . f f f . . f 
    . . . . . . . . . . . . . f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite, 50, 50)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
runLevel()
