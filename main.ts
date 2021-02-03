
let speed: number

function on_button_pressed_b() {
    pins.analogWritePin(AnalogPin.P12, 1023*speed/10)
    pins.analogWritePin(AnalogPin.P8, 0)
}

function on_button_pressed_f() {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P8, 1023*speed/10)
}

function on_button_pressed_s() {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function on_button_pressed_u() {
    servos.P1.setAngle(10)
}

function on_button_pressed_d() {
    servos.P1.setAngle(170)
}

function on_button_pressed_l() {
    servos.P2.setAngle(10)
}

function on_button_pressed_r() {
    servos.P2.setAngle(170)
}

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "l") {
        on_button_pressed_l()
    } else if (data == "r") {
        on_button_pressed_r()
    } else if (data == "s") {
        on_button_pressed_s()
    } else if (data == "f") {
        on_button_pressed_f()
    } else if (data == "b") {
        on_button_pressed_b()
    } else if (data == "u") {
        on_button_pressed_u()
    } else if (data == "d") {
        on_button_pressed_d()
    }else{
        speed = parseInt(data)
    }
    basic.showString(data)
})
speed = 5
input.onButtonPressed(Button.A, on_button_pressed_f)
input.onButtonPressed(Button.B, on_button_pressed_b)
pins.servoSetPulse(AnalogPin.P2, 1500)
pins.servoSetPulse(AnalogPin.P1, 1500)
servos.P2.setAngle(45)
servos.P1.setAngle(30)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogSetPeriod(AnalogPin.P12, 20000)
pins.analogSetPeriod(AnalogPin.P8, 20000)