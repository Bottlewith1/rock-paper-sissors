basic.showLeds(`
    . # # # .
    . . . # .
    . . # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . . # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # .
    . # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
basic.showLeds(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(randint(0, 3))
if (randint(0, 3) == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # # #
        # # # # #
        `)
} else if (randint(0, 3) == 2) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
} else if (randint(0, 3) == 3) {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
}
