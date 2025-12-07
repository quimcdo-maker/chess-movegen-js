"use strict";

console.clear();

enum CardinalDirections {
    North,
    East,
    South,
    West
};


class UCIChessEngine {

    version = '0.0a';

    number = BigInt(1000);

    constructor() {
        console.log('Engine Ok');

        var val = document.getElementById('salida');
        if (val) {
            val.innerHTML = 'Engine Ok 1 ' + this.version + ' . ' + this.number;
        }
        
        console.log(typeof this.number);
    }

    init() { 
    }


}


let engine = new UCIChessEngine();

engine.init();