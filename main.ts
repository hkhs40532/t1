radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 骰子) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber < 骰子) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (receivedNumber == 骰子) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    骰子 = randint(1, 6)
    basic.showNumber(骰子)
    radio.sendNumber(骰子)
})
let 骰子 = 0
radio.setGroup(101)
