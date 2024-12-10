function clearLights () {
    Environment.ledBrightness(AnalogPin.P1, false)
    Environment.ledBrightness(AnalogPin.P2, false)
    Environment.ledBrightness(AnalogPin.P3, false)
}
function turnonlights () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_inch, DigitalPin.P4) < 3) {
        Environment.ledBrightness(AnalogPin.P1, true)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P3, false)
    } else if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_inch, DigitalPin.P4) > 3 && Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_inch, DigitalPin.P4) < 6) {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, true)
        Environment.ledBrightness(AnalogPin.P3, false)
    } else {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P3, true)
    }
}
basic.showIcon(IconNames.Heart)
basic.pause(5000)
clearLights()
basic.forever(function () {
    clearLights()
    basic.pause(5000)
    turnonlights()
    basic.pause(5000)
})
