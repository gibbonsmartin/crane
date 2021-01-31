
let speed: number

function on_button_pressed_b() {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.toggle(0, 1)
}

function on_button_pressed_f() {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    led.toggle(1, 1)
}

function on_button_pressed_s() {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.toggle(1, 0)
}
function on_button_pressed_u() {
    servos.P1.setAngle(30)
    led.toggle(2, 0)
}

function on_button_pressed_d() {
    servos.P1.setAngle(150)
    led.toggle(3, 0)
}

function on_button_pressed_l() {
    servos.P2.setAngle(0)
    led.toggle(0, 0)
}

function on_button_pressed_r() {
    servos.P2.setAngle(90)
    led.toggle(4, 0)
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
    }
})
speed = 5
input.onButtonPressed(Button.A, on_button_pressed_f)
input.onButtonPressed(Button.B, on_button_pressed_b)
pins.servoSetPulse(AnalogPin.P2, 1500)
pins.servoSetPulse(AnalogPin.P1, 1500)
servos.P2.setAngle(45)
servos.P1.setAngle(30)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P8, 0)

