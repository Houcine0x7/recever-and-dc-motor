radio.setGroup(1)

radio.onReceivedNumber(function(onReceivedNumber){
    if(onReceivedNumber == 950){
        pins.analogWritePin(AnalogPin.P1,0)
        pins.analogWritePin(AnalogPin.P2,950)
    }

    else if(onReceivedNumber == 960){
        pins.analogWritePin(AnalogPin.P2,0)
        pins.analogWritePin(AnalogPin.P1,960)
    }

    else if(onReceivedNumber == 0){
        pins.analogWritePin(AnalogPin.P1,0)
        pins.analogWritePin(AnalogPin.P2,0)
    }
})

