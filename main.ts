radio.setGroup(123)
let KK = 0
basic.forever(function () {
    if (input.lightLevel() > 10) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        if (KK == 0) {
            radio.sendString("A2")
            KK = 5
        }
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
