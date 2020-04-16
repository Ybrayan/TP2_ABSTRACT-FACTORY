const Motorcycle = require('./vehicle');

class Kawasaki{
    constructor(License_plate) {
        return new Motorcycle(License_plate,
            'Kawasaki',
            'Z250',
            241.9,
            'VERDE',
            'Gasolina',
            'A1',
            '9RSDR0E000',
            'KWK000991',
            'CH0003',
            'LIQUIDO')
    }
}

module.exports = Kawasaki;