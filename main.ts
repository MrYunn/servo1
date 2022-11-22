input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.pause(2000)
    servos.P0.setAngle(10)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(20)
    basic.showLeds(`
        # # # . .
        . . # . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(30)
    basic.showLeds(`
        # # # . .
        . . # . .
        # # # . .
        . . # . .
        # # # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(40)
    basic.showLeds(`
        # . # . .
        # . # . .
        # # # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(50)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        . . # . .
        # # # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(60)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(70)
    basic.showLeds(`
        # # # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    servos.P0.setAngle(80)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setPulse(1500)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P0.setPulse(1000)
})
