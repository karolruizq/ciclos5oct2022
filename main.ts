let tiempo = 0
basic.forever(function () {
    tiempo = 200
    for (let index = 0; index < 3; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(tiempo)
                led.unplot(x, y)
            }
        }
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
        tiempo += -80
    }
})
