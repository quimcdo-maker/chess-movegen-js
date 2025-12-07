"use strict";





const a1 = 0;
const b1 = 1;
const c1 = 2;
const d1 = 3;
const e1 = 4;
const f1 = 5;
const g1 = 6;
const h1 = 7;

const a2 = a1 + 16;
const b2 = b1 + 16;
const c2 = c1 + 16;
const d2 = d1 + 16;
const e2 = e1 + 16;
const f2 = f1 + 16;
const g2 = g1 + 16;
const h2 = h1 + 16;

const a3 = a2 + 16;
const b3 = b2 + 16;
const c3 = c2 + 16;
const d3 = d2 + 16;
const e3 = e2 + 16;
const f3 = f2 + 16;
const g3 = g2 + 16;
const h3 = h2 + 16;

const a4 = a3 + 16;
const b4 = b3 + 16;
const c4 = c3 + 16;
const d4 = d3 + 16;
const e4 = e3 + 16;
const f4 = f3 + 16;
const g4 = g3 + 16;
const h4 = h3 + 16;

const a5 = a4 + 16;
const b5 = b4 + 16;
const c5 = c4 + 16;
const d5 = d4 + 16;
const e5 = e4 + 16;
const f5 = f4 + 16;
const g5 = g4 + 16;
const h5 = h4 + 16;

const a6 = a5 + 16;
const b6 = b5 + 16;
const c6 = c5 + 16;
const d6 = d5 + 16;
const e6 = e5 + 16;
const f6 = f5 + 16;
const g6 = g5 + 16;
const h6 = h5 + 16;

const a7 = a6 + 16;
const b7 = b6 + 16;
const c7 = c6 + 16;
const d7 = d6 + 16;
const e7 = e6 + 16;
const f7 = f6 + 16;
const g7 = g6 + 16;
const h7 = h6 + 16;

const a8 = a7 + 16;
const b8 = b7 + 16;
const c8 = c7 + 16;
const d8 = d7 + 16;
const e8 = e7 + 16;
const f8 = f7 + 16;
const g8 = g7 + 16;
const h8 = h7 + 16; // 119 

const filea = 0;
const fileb = 1;
const filec = 2;
const filed = 3;
const filee = 4;
const filef = 5;
const fileg = 6;
const fileh = 7;

const rank1 = 0;
const rank2 = 1;
const rank3 = 2;
const rank4 = 3;
const rank5 = 4;
const rank6 = 5;
const rank7 = 6;
const rank8 = 7;

const RAYS = [
    17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0,
    0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0,
    0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0,
    0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0,
    0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0,
    0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0,
    0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0,
    0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0,
    0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0,
    -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17
];




function square(file, rank) {
    return Number((rank) * 16 + file);
}

function file(square) {
    return square & 7;
}

function rank(square) {
    return square >>> 4;
}


function squareFromStr(str) {
    return square(fileFromChar(str[0]), rankFromChar(str[1]))
}



function validSquare(sq) {
    return (sq & 0x88) == 0
}

function squareToStr(sq) {
    if (!validSquare(sq)) return '#'
    return fileToChar(file(sq)) + rankToChar(rank(sq))
}



var checkbit = []

checkbit[p] = 1
checkbit[n] = 1 << 1
checkbit[b] = 1 << 2
checkbit[r] = 1 << 3
checkbit[q] = checkbit[b] | checkbit[r]
checkbit[k] = 1 << 5

checkbit[wp] = checkbit[bp] = checkbit[p]
checkbit[wn] = checkbit[bn] = checkbit[n]
checkbit[wb] = checkbit[bb] = checkbit[b]
checkbit[wr] = checkbit[br] = checkbit[r]
checkbit[wq] = checkbit[bq] = checkbit[q]

var attackbit = []
attackbit[p] = attackbit[wp] = attackbit[bp] = 1
attackbit[n] = attackbit[wn] = attackbit[bn] = 1 << 1
attackbit[b] = attackbit[wb] = attackbit[bb] = 1 << 2
attackbit[r] = attackbit[wr] = attackbit[br] = 1 << 3
attackbit[q] = attackbit[wq] = attackbit[bq] = 1 << 4
attackbit[k] = attackbit[wk] = attackbit[bk] = 1 << 5

let piecebyoffset = []
piecebyoffset[16] = piecebyoffset[1] = checkbit[r]
piecebyoffset[17] = piecebyoffset[15] = checkbit[b]





/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Board {

    stm = 0; // side to move
    counter50 = 0;
    castlingRights = 0;
    enpassantSquare = -1;
    movenumber = 0;
    movehalfnumber = 0;

    // enemy = 1 - this.stm
    // numlegalmoves = 0
    debugvalue = true

    moves = []
    movesStr = []

    checkingSquare = -1 // casilla desde la que se da el jaque

    inCheck = false
    inDoubleCheck = false
    inCheckMate = false
    inStalemate = false
    isDraw = false

    pieceat = new Uint8Array(128).fill(0); // 128 por ser 0x88
    kingsquares = [0, 0]
    kingschecks = [0, 0]

    kingescapes = [[], [],]

    piecesquares = [
        new Int8Array(16).fill(-1),
        new Int8Array(16).fill(-1),
    ]

    addpiece(color, piece, square) {

        this.pieceat[square] = piece

        if (ptype(piece) === k) {
            this.kingsquares[color] = square
            return
        }

        for (let i = 0; i < this.piecesquares[color].length; i++) {
            if (this.piecesquares[color][i] == -1) {
                this.piecesquares[color][i] = square
                return
            }
        }

        console.log(this.history.debug())
        console.assert(false, 'eror en addpiece', color, pieceChar(piece), squareToStr(square))
    }

    movepiece(color, piece, from, to) {

        this.pieceat[to] = this.pieceat[from]
        this.pieceat[from] = empty

        if (ptype(piece) === k) {
            this.kingsquares[color] = to
            return
        }

        for (let i = 0; i < this.piecesquares[color].length; i++) {
            if (this.piecesquares[color][i] == from) {
                this.piecesquares[color][i] = to
                return
            }
        }

        console.log(this.history.debug())
        console.assert(false, 'eror en movepiece', color, pieceChar(piece), squareToStr(from), squareToStr(to))
        console.assert(false)
    }

    removepiece(color, square) {

        this.pieceat[square] = empty

        for (let i = 0; i < this.piecesquares[color].length; i++) {
            if (this.piecesquares[color][i] == square) {
                this.piecesquares[color][i] = -1
                return
            }
        }

        console.log(this.history.debug())
        console.assert(false, 'eror en removepiece', color, square)
    }


    attacks = [
        new Uint8Array(128).fill(0), // tipo de piezas por bando que atacan la casilla
        new Uint8Array(128).fill(0)
    ]

    numattacks = [
        new Uint8Array(128).fill(0), // numero de piezas por bando que atacan la casilla
        new Uint8Array(128).fill(0)
    ]

    inchekValidSquares = [
        new Uint8Array(128).fill(0), // 1 si casilla valida cuando esta en jaque
        new Uint8Array(128).fill(0)
    ]

    pinDirection = [
        new Int8Array(128).fill(0), // direccion de las clavadas absolutas
        new Int8Array(128).fill(0)
    ]

    chekingSquares = [
        new Uint8Array(128).fill(0),  // se marcan las casillas que podrian dar jaque al rey y el tipo de pieza que daria jaque
        new Uint8Array(128).fill(0)
    ]

    matingSquares = [
        new Uint8Array(128).fill(0),  // se marcan las casillas que podrian dar mate al rey y el tipo de pieza
        new Uint8Array(128).fill(0)
    ]


    addattack(who, piecetype, from, to) {
        this.attacks[who][to] |= attackbit[piecetype]
        this.numattacks[who][to]++

        // El ataque da jaque
        if (to === this.kingsquares[1 - who]) {

            if ((1 - who) === this.stm) {
                // console.log('jaque normal detectado', who, squareToStr(from), squareToStr(to))
                this.kingschecks[1 - who]++
            } else {
                // console.log('posicion ilegal, puede comer el rey el turno que mueve', this.stm, squareToStr(to))
            }

            this.checkingSquare = from
            this.inchekValidSquares[1 - who][from] = 1
        }
    }

    addSliderAttack(who, piecetype, from, to, direction) {

        // addSlideAttach se llama cuando un slider de topa con una pieza, propia o rival
        // Tratamos de detectar el tipo de pieza topada, y continuar el rayo

        this.attacks[who][to] |= attackbit[piecetype]
        this.numattacks[who][to]++

        let opossingSide = 1 - who
        let enemykingsquare = this.kingsquares[opossingSide]
        // let attackingpiece = this.pieceat[from]
        let attackedpiece = this.pieceat[to]

        // Se topa con el rey rival
        // El ataque da jaque
        if (to === enemykingsquare) {
            // console.log('jaque deslizante detectado', squareToStr(from), squareToStr(to))
            // Añadimos una casilla mas en direccion del jaque detras del rey
            this.attacks[who][to + direction] |= attackbit[piecetype]
            this.numattacks[who][to + direction]++
            this.kingschecks[opossingSide]++

            // Marcamos las casillas que bloquean el rayo como válidas durante jaque
            do {
                to -= direction
                if (!validSquare(to)) break
                this.inchekValidSquares[opossingSide][to] = 1
            } while (to !== from)

            return
        }

        // Se topa con una pieza que no es el rey rival
        // El ataque no da jaque
        // miramos para ver si puede clavar una pieza contra el rey enemigo
        let difference = from - enemykingsquare;
        let index = difference + 119;
        let offset = RAYS[index];

        if (direction === offset) {
            // la pieza deslizante esta atacando en la direccion que esta el rey enemigo
            // console.log('posible pieza clavada o descubierta', this.stm,  who, squareToStr(from), squareToStr(to), direction, offset)

            let piecesinbetween = 0
            let next = to + offset
            while (next !== enemykingsquare) {
                if (!validSquare(next)) break
                if (this.pieceat[next] !== empty) {
                    piecesinbetween += 1
                    // break
                }
                next = next + offset
            }
            // console.log('piezas entremedias', piecesinbetween, squareToStr(from), squareToStr(to), squareToStr(enemykingsquare))

            if (piecesinbetween === 0) {
                if (pcolor(attackedpiece) === opossingSide) {
                    this.pinDirection[this.stm][to] = offset
                    // console.log('set pin ', this.stm, squareToStr(to), offset)
                    // console.log('set pin ', this.pinDirection[this.stm][to])
                } else {
                    // posible jaque a la descubierta
                    // this.chekingSquares[who][to] = Math.abs(offset) | mask_discovercheck
                    // console.log('marcando como descubierta', squareToStr(from), squareToStr(to), Math.abs(offset), this.chekingSquares[who][to])
                }
            }
        }


        // Incrementamos los ataques por rayos x si es una pieza propia que puede desplazarse en la misma direccion
        let samecolor = (who === pcolor(attackedpiece))
        let bitsok = checkbit[piecetype] & checkbit[ptype(attackedpiece)] & piecebyoffset[Math.abs(direction)]
        let canxray = samecolor && (bitsok > 0)

        /*
        console.log('canxray', who, pcolor(attackedpiece), samecolor,
                squareToStr(from), squareToStr(to), 
                charpieces[piecetype], charpieces[ptype(attackedpiece)], 
                direction, piecebyoffset[Math.abs(direction)],
                checkbit[piecetype] & checkbit[ptype(attackedpiece)],
                bitsok, canxray)
        */

        if (canxray) {
            // console.log('seguimos el rayo')
            // ATENCION esto no es jaque doble fen 1r1qr1k1/5p1p/p2p1B2/1p1pn3/2P1P2P/5P2/PP4Q1/1K4R1 b - - 6 30
            let next = to + direction
            while (validSquare(next)) {
                // console.log(squareToStr(next))
                this.numattacks[who][next]++
                if (this.pieceat[next] !== empty) {
                    break
                }
                next = next + direction
            }
        }

    }

    getMoveStr(move) {

        let checkStr = (move.mask & mask_check) ? '+' : '';
        let discovercheckStr = (move.mask & mask_discovercheck) ? 'D+' : '';

        if (move.mask & mask_castling) {
            let movingStr = (file(move.to) === fileg) ? '00' : '000'
            return movingStr + checkStr + discovercheckStr
        } else {
            // console.log(move)
            let promStr = (move.promotedpiece === 0) ? '' : '=' + charpieces[move.promotedpiece & 7]
            let movingStr = charpieces[move.movingpiece & 7];
            let captureStr = (move.captured) ? 'x' + charpieces[move.captured & 7] : '';

            // let doublecheckStr = (move.mask & mask_doublecheck) ? '+' : '';            
            let enpassantkStr = (move.mask & mask_ep) ? 'ep' : '';
            let safeStr = (move.mask & mask_safe) ? '' : '.';
            let hangingStr = (move.mask & mask_hanging) ? '?' : '';
            let freecaptStr = (move.mask & mask_freecapture) ? '@' : '';
            let winningStr = (move.mask & mask_winningcapture) ? '!' : '';

            return movingStr +
                squareToStr(move.from) +
                captureStr +
                squareToStr(move.to) +
                promStr +
                checkStr + discovercheckStr + enpassantkStr +
                safeStr + hangingStr + winningStr + freecaptStr
        }
    }

    // Añadir movimientos
    addmove(from, to, maskbits = 0, promotedpiece = 0) {

        let movingpiece = this.pieceat[from]

        // Si estamos en jaque, debe ser una de las casillas marcadas como válidas
        if (this.inCheck && ptype(movingpiece) !== k && this.inchekValidSquares[this.stm][to] === 0) return

        // Comprobamos que la pieza que queremos mover no este clavada
        let pindir = this.pinDirection[this.stm][from]
        if (pindir !== 0) {

            // console.log('intentando mover una pieza clavada en ', squareToStr(from), squareToStr(to), pindir)

            let difference = from - to;
            let index = difference + 119;
            let movedirecction = RAYS[index];

            if (Math.abs(pindir) !== Math.abs(movedirecction)) {
                // console.log('clavada confirmada', this.stm, squareToStr(from), pindir, movedirecction)
                return
            }
            // console.log('clavada no confirmada', this.stm, squareToStr(from), pindir, movedirecction)
        }


        let capturedpiece = (maskbits & mask_ep) ? p : this.pieceat[to]
        let chekingpiece = (maskbits & mask_promotion) ? promotedpiece : movingpiece

        // Marcamos las casillas atacadas por el bando que mueve
        // this.addattack(this.stm, ptype(movingpiece), from, to)

        // Comprobamos si la jugada da jaque
        if (this.chekingSquares[this.stm][to] & checkbit[chekingpiece]) {
            maskbits |= mask_check
        }

        // Comprobamos si puede ser un enroque que da jaque
        // r1bk1b1r/ppp1qppp/5n2/4p1B1/4P3/2N2N2/PPP2PPP/R3KB1R w KQ - 3 9
        // r6r/ppp2kpp/1b6/2B5/4n1BN/2N5/PPP3PP/R3K2R w KQ - 1 19
        if (maskbits & mask_castling) {
            let rookfile = (file(to) === fileg) ? filef : filed
            let rooksquare = square(rookfile, rank(to))
            if (this.chekingSquares[this.stm][rooksquare] & checkbit[r]) {
                maskbits |= mask_check
            }
        }

        // Comprobamos si la jugada da jaque a la descubierrta
        if (this.chekingSquares[this.stm][from] & mask_discovercheck) {
            let discoverinfo = this.chekingSquares[this.stm][from]
            let offset = discoverinfo & ~mask_discovercheck
            let moveoffset = Math.abs(from - to)
            // r4bnr/ppp2ppp/n1p5/4P3/3P3q/2N1B3/PPP2P1P/R3K2k w Q - 0 13 ENROQUE JAQUE A LA DESCUBIERTA
            if ((moveoffset !== offset) || (maskbits & mask_castling)) {
                // console.log('jaque a la descubierta en ', squareToStr(from), squareToStr(to), discoverinfo, offset, moveoffset)
                maskbits |= mask_discovercheck
            }
        }

        // Comprobamos si la jugada es a una casilla segura
        let attackbits = this.attacks[opposite(this.stm)][to]
        if (attackbits === 0) {
            maskbits |= mask_safe
        } else {
            if (lowestSetBit(attackbits) < lowestSetBit(attackbit[movingpiece]))
                maskbits |= mask_hanging
        }

        // Comprobamos si captura una pieza y si no esta defendida o es de mayor valor
        if (capturedpiece) {
            maskbits |= mask_capture
            if (bitCount(attackbits) == 0) maskbits |= mask_freecapture
            if (ptype(capturedpiece) > ptype(movingpiece)) maskbits |= mask_winningcapture
        }

        // Finalmente almacenamos la jugada junto la información recolectada
        /*
                let move = {
                    from: from,
                    to: to,            
                    promotedpiece: promotedpiece,
                    movingpiece: movingpiece,
                    captured: capturedpiece,
                    mask: maskbits
                }
                // Object.seal(move)
                Object.freeze(move)
                this.moves.push(move)
        */
        this.moves.push({
            from: from,
            to: to,
            promotedpiece: promotedpiece,
            movingpiece: movingpiece,
            captured: capturedpiece,
            mask: maskbits
        })

    }

    addpawnmove(from, to) {

        // Si estamos en jaque, debe ser una de las casillas marcadas como válidas
        if (this.inCheck && this.inchekValidSquares[this.stm][to] === 0) return

        // Si es a la octava fila, es una coronación
        if (rank(to) === rank8) {
            this.addmove(from, to, mask_promotion, wn)
            this.addmove(from, to, mask_promotion, wb)
            this.addmove(from, to, mask_promotion, wr)
            this.addmove(from, to, mask_promotion, wq)
            return
        }

        if (rank(to) === rank1) {
            this.addmove(from, to, mask_promotion, bn)
            this.addmove(from, to, mask_promotion, bb)
            this.addmove(from, to, mask_promotion, br)
            this.addmove(from, to, mask_promotion, bq)
            return
        }

        this.addmove(from, to)
    }


    // history = new BigUint64Array(MAXPLY).fill(0n)

    history = {
        from: new Uint8Array(MAXPLY).fill(0),
        to: new Uint8Array(MAXPLY).fill(0),
        capturedpiece: new Uint8Array(MAXPLY).fill(0),
        promotedpiece: new Uint8Array(MAXPLY).fill(0),
        counter50: new Uint8Array(MAXPLY).fill(0),
        castlingRights: new Uint8Array(MAXPLY).fill(0),
        enpassantSquare: new Int8Array(MAXPLY).fill(-1),

        movestr: [],

        ply: 0,

        reset: function () {
            this.ply = 0
            this.movestr = []

            this.from.fill(0)
            this.to.fill(0)
            this.capturedpiece.fill(0)
            this.promotedpiece.fill(0)
            this.counter50.fill(0)
            this.castlingRights.fill(0)
            this.enpassantSquare.fill(0)
        },

        add: function (from, to, cp, pm, c50, cr, ep) {

            this.to[this.ply] = to
            this.from[this.ply] = from
            this.counter50[this.ply] = c50
            this.capturedpiece[this.ply] = cp
            this.promotedpiece[this.ply] = pm
            this.castlingRights[this.ply] = cr
            this.enpassantSquare[this.ply] = ep

            this.ply += 1

            this.movestr[this.ply] = squareToStr(from) + squareToStr(to)
        },

        pop: function () {

            if (this.ply == 0) return false

            this.ply -= 1

            return {
                to: this.to[this.ply],
                from: this.from[this.ply],
                counter50: this.counter50[this.ply],
                capturedpiece: this.capturedpiece[this.ply],
                promotedpiece: this.promotedpiece[this.ply],
                castlingRights: this.castlingRights[this.ply],
                enpassantSquare: this.enpassantSquare[this.ply],
            }
        },

        debug: function () {

            // console.log(this)

            let historymoves = []
            for (let ply = 0; ply < this.ply; ply++) {

                if (this.from[ply] === this.to[ply]) break

                historymoves.push(squareToStr(this.from[ply]) + squareToStr(this.to[ply]))
            }

            return historymoves.join(' ')
        }
    }


    // board = Object.seal(this.board)
    // history = Object.seal(this.history);    

    constructor() {
        // Object.seal(this.board)
    }

    reset() {
        this.history.reset()

        this.stm = 0; // side to move
        this.counter50 = 0;
        this.castlingRights = 0;
        this.enpassantSquare = -1;
        this.movenumber = 0;
        this.movehalfnumber = 0;

        // enemy = 1 - this.stm
        // numlegalmoves = 0
        this.debugvalue = true

        this.moves = []
        this.movesStr = []

        this.inCheck = false
        this.inDoubleCheck = false
        this.inCheckMate = false
        this.inStalemate = false
        this.isDraw = false

        this.pieceat.fill(0)
        this.kingsquares.fill(0)
        this.piecesquares[white].fill(0)
        this.piecesquares[black].fill(0)

        this.kingescapes = [[], [],]
        this.kingschecks = [0, 0]

        // console.clear()
    }


    generateMoves() {


        /////////////////////////////////////////////////////////////////////////////////////////////////
        // INICIALIZACION
        /////////////////////////////////////////////////////////////////////////////////////////////////
        this.attacks[white].fill(0)
        this.attacks[black].fill(0)
        this.numattacks[white].fill(0)
        this.numattacks[black].fill(0)
        this.inchekValidSquares[white].fill(0)
        this.inchekValidSquares[black].fill(0)
        this.pinDirection[white].fill(0)
        this.pinDirection[black].fill(0)
        this.chekingSquares[white].fill(0)
        this.chekingSquares[black].fill(0)
        this.matingSquares[white].fill(0)
        this.matingSquares[black].fill(0)

        this.kingescapes = [[], [],]
        this.kingschecks = [0, 0]

        const offsets = []
        offsets[n] = [-18, -33, -31, -14, 18, 33, 31, 14]
        offsets[b] = [-17, -15, 17, 15]
        offsets[r] = [-16, 1, 16, -1]
        offsets[q] = [-17, -16, -15, 1, 17, 16, 15, -1]
        offsets[k] = [-17, -16, -15, 1, 17, 16, 15, -1]

        const piecebits = []
        piecebits[p] = 1
        piecebits[n] = 2
        piecebits[b] = 4
        piecebits[r] = 8

        let to = 0
        let piece = 0
        let color = 0
        let type = 0

        let sq = 0
        let dest = 0
        let csq = 0

        this.moves = []
        this.movesStr = []

        const sign = (this.stm === white) ? 1 : -1
        const secondrank = (this.stm === white) ? rank2 : rank7

        /////////////////////////////////////////////////////////////////////////////////////////////////
        // CALCULAMOS LAS CASILLAS QUE DAN JAQUE
        /////////////////////////////////////////////////////////////////////////////////////////////////
        if (true)
            for (let turncolor = white; turncolor <= black; turncolor++) {

                let enemyking = this.kingsquares[1 - turncolor]
                let offsetsign = (turncolor === white) ? -1 : 1;
                let oppcolor = 1 - turncolor

                // peon
                for (const offset of [17, 15]) {
                    csq = enemyking + (offset * offsetsign)
                    if (csq & 0x88) continue
                    if (pcolor(this.pieceat[csq]) !== turncolor)
                        this.chekingSquares[turncolor][csq] |= checkbit[p]
                }

                // caballo
                for (const offset of offsets[n]) {
                    if (validSquare(csq = (enemyking + offset)))
                        if (pcolor(this.pieceat[csq]) !== turncolor)
                            this.chekingSquares[turncolor][csq] |= checkbit[n]
                }

                // alfil o torre
                for (let piece of [b, r]) {
                    for (const offset of offsets[piece]) {
                        to = enemyking
                        do {
                            to = to + offset
                            if (to & 0x88) break

                            dest = this.pieceat[to]

                            // casilla vacia
                            if (dest === empty) {
                                this.chekingSquares[turncolor][to] |= checkbit[piece]
                                continue
                            }

                            // pieza rival
                            if (pcolor(dest) === oppcolor) {
                                this.chekingSquares[turncolor][to] |= checkbit[piece]
                                break;
                            }

                            // posible jaque a la descubierta
                            let blockingsq = to
                            do {
                                // console.log(squareToStr(to))

                                to = to + offset
                                if (to & 0x88) break

                                dest = this.pieceat[to]
                                if (dest === empty) continue
                                if (pcolor(dest) !== turncolor) break

                                if ((ptype(dest) === piece) || (ptype(dest) === q)) {
                                    this.chekingSquares[turncolor][blockingsq] = Math.abs(offset) | mask_discovercheck

                                    // console.log('marcando como descubierta', squareToStr(blockingsq), squareToStr(to), Math.abs(offset), this.chekingSquares[turncolor][blockingsq])
                                }

                                break

                            } while (true)

                            break

                        } while (true)
                    }
                }
            }


        /////////////////////////////////////////////////////////////////////////////////////////////////
        // CASILLAS ATACADAS POR EL ENEMIGO Y PIEZAS CLAVADAS
        // Buscamos las casillas atacadas por el jugador rival, y las posibles piezas clavadas
        /////////////////////////////////////////////////////////////////////////////////////////////////
        let turn = opposite(this.stm)
        let enemysign = sign * - 1

        // for (let sq = a1; sq <= h8; sq++) {
        // let enemypieces = this.piecesquares[turn]
        // console.log ( enemypieces )
        // enemypieces.push(this.kingsquares[turn])

        for (sq of this.piecesquares[turn]) {

            if (sq & 0x88) { sq += 7; continue; }

            piece = this.pieceat[sq]
            if (!piece) continue

            color = pcolor(piece)
            if (color !== turn) continue

            let piecetype = ptype(piece)
            // console.log(squareToStr(sq), piece, color, type)

            switch (piecetype) {
                case p:

                    for (const offset of [17, 15]) {
                        to = sq + (offset * enemysign)
                        if (to & 0x88) continue
                        this.addattack(turn, piecetype, sq, to)
                    }
                    break

                // saltadoras
                case n:
                case k:

                    for (const offset of offsets[piecetype]) {
                        to = sq + offset
                        if (to & 0x88) continue
                        this.addattack(turn, piecetype, sq, to)
                    }
                    break

                // deslizadoras
                case b:
                case r:
                case q:

                    for (const offset of offsets[piecetype]) {
                        to = sq
                        do {
                            to = to + offset
                            if (to & 0x88) break

                            dest = this.pieceat[to]

                            // pieza ocupada
                            if (dest !== empty) {
                                this.addSliderAttack(turn, piecetype, sq, to, offset)
                                break;
                            }

                            // casilla vacia 
                            this.addattack(turn, piecetype, sq, to)
                        } while (true)
                    }

                    break
                default:
                    console.log('Error en tipo de pieza')
                    break
            }
        }

        sq = this.kingsquares[turn]
        for (const offset of offsets[k]) {
            to = sq + offset
            if (to & 0x88) continue

            this.addattack(turn, k, sq, to)
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////
        // NUESTRO TURNO
        /////////////////////////////////////////////////////////////////////////////////////////////////
        // this.inCheck       = this.numattacks[opposite(this.stm)][this.kingsquares[this.stm]] > 0
        // this.inDoubleCheck = this.numattacks[opposite(this.stm)][this.kingsquares[this.stm]] > 1
        this.inCheck = this.kingschecks[this.stm] > 0
        this.inDoubleCheck = this.kingschecks[this.stm] > 1


        /////////////////////////////////////////////////////////////////////////////////////////////////
        // Generamos las jugadas para el jugador que tiene el turno
        // si no estamos en jaque doble
        /////////////////////////////////////////////////////////////////////////////////////////////////



        /////////////////////////////////////////////////////////////////////////////////////////////////
        // EN JAQUE Y SIN JAQUE
        /////////////////////////////////////////////////////////////////////////////////////////////////
        if (!this.inDoubleCheck)
            for (sq of this.piecesquares[this.stm]) {

                if (sq & 0x88) { sq += 7; continue; }

                piece = this.pieceat[sq]
                if (!piece) continue

                color = pcolor(piece)
                if (color !== this.stm) continue

                type = ptype(piece)
                // console.log(squareToStr(sq), piece, color, type)

                switch (type) {
                    case p:

                        // Avances de peon
                        if (this.pieceat[to = (sq + (16 * sign))] === empty) {
                            this.addpawnmove(sq, to)

                            if (rank(sq) === secondrank) {
                                if (this.pieceat[to = (sq + (32 * sign))] === empty)
                                    this.addmove(sq, to)
                            }
                        }

                        // Capturas de peon
                        for (const offset of [17, 15]) {
                            if (!validSquare(to = (sq + (offset * sign)))) continue
                            this.addattack(this.stm, type, sq, to)

                            if (pcolor(this.pieceat[to]) === opposite(this.stm)) {
                                this.addpawnmove(sq, to)
                            }
                            if (to === this.enpassantSquare) {
                                // Para perft
                                // 8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 
                                //
                                // captura al paso clavada por alfil
                                // 8/1K2p3/8/3P4/8/5b2/6k1/8 b - - 0 1                    
                                let ilegalep = false
                                let kingsquare = this.kingsquares[this.stm]
                                if (rank(sq) === rank(kingsquare)) {
                                    // La condicion para esta posicion
                                    // 7k/8/8/K1pP3r/8/8/8/8 w - c6 0 1
                                    let dir = (file(kingsquare) < file(sq)) ? 1 : -1
                                    let next = kingsquare + dir
                                    let count = 0
                                    while (validSquare(next)) {

                                        let piece = this.pieceat[next]
                                        next = next + dir

                                        if (piece === empty) continue

                                        count++
                                        if ((count === 3) && ((ptype(piece) === r) | (ptype(piece) === q))
                                            && (pcolor(piece) === opposite(this.stm))) {
                                            // console.log('captura al paso ilegal confirmada')
                                            ilegalep = true
                                            break
                                        }
                                    }
                                }

                                if (!ilegalep) {
                                    // Si el jaque lo da un peon que puede ser comido al paso, 
                                    // comerlo es una jugada valida
                                    // 8/8/3p4/1Pp4r/1K3pk1/8/4P1P1/1R6 w - c6 0 3
                                    if (this.inCheck) {
                                        let chekingpiece = this.pieceat[this.checkingSquare]
                                        if (ptype(chekingpiece) === p) {
                                            // marcamos la casilla de comer al paso como valida
                                            this.inchekValidSquares[this.stm][this.enpassantSquare] = 1
                                            this.addmove(sq, to, mask_ep)
                                            // y la desmarcamos para que no vayan otras piezas
                                            this.inchekValidSquares[this.stm][this.enpassantSquare] = 0
                                        }
                                    } else {
                                        this.addmove(sq, to, mask_ep)
                                    }
                                }
                            }


                        }

                        break

                    // saltadoras
                    case n:
                        // case k: 

                        if (this.pinDirection[this.stm][sq] !== 0) break // un caballo clavado nunca puede mover

                        for (const offset of offsets[type]) {
                            to = sq + offset

                            if (to & 0x88) continue

                            dest = this.pieceat[to]
                            this.addattack(this.stm, type, sq, to)

                            if ((dest === empty) || (pcolor(dest) === opposite(this.stm)))
                                this.addmove(sq, to)
                        }

                        break

                    // deslizadoras
                    case b:
                    case r:
                    case q:

                        let pindir = this.pinDirection[this.stm][sq]

                        for (const offset of offsets[type]) {

                            if ((pindir > 0) && (Math.abs(pindir) !== Math.abs(offset))) continue

                            to = sq
                            do {
                                to = to + offset
                                if (to & 0x88) break

                                dest = this.pieceat[to]


                                if (dest !== empty) {
                                    if (pcolor(dest) === opposite(this.stm)) {
                                        this.addmove(sq, to);
                                    }
                                    this.addSliderAttack(this.stm, type, sq, to, offset)
                                    break;
                                }

                                this.addattack(this.stm, type, sq, to)
                                this.addmove(sq, to);
                            } while (true)
                        }

                        break
                    default:
                        // console.log('Error en tipo de pieza', type)
                        break
                }
            }

        /////////////////////////////////////////////////////////////////////////////////////////////////
        // JUGADAS DEL REY, UNICAS CON JAQUE DOBLE
        // Por ultimo, las jugadas de nuestro rey
        /////////////////////////////////////////////////////////////////////////////////////////////////
        sq = this.kingsquares[this.stm]
        for (const offset of offsets[k]) {
            to = sq + offset
            if (to & 0x88) continue

            this.addattack(this.stm, k, sq, to)

            if (this.numattacks[opposite(this.stm)][to] > 0) continue

            dest = this.pieceat[to]
            if ((dest === empty) || pcolor(dest) === opposite(this.stm)) {
                this.addmove(sq, to)
                // this.kingescapes[this.stm].push(Math.abs(offset))
                let absoffset = Math.abs(offset)
                const found = this.kingescapes[this.stm].find(element => element === absoffset)
                if (!found) this.kingescapes[this.stm].push(absoffset)
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////
        // MARCAMOS LAS CASILLAS DE ESCAPE DEL REY RIVAL, PARA VER DONDE PODEMOS DARLE MATE
        /////////////////////////////////////////////////////////////////////////////////////////////////


        sq = this.kingsquares[opposite(this.stm)]
        for (const offset of offsets[k]) {
            to = sq + offset
            if (to & 0x88) continue

            // la casilla a la que pretende ir no esta atacada
            if (this.numattacks[this.stm][to] > 0) {
                // vemos si hay un jaque de contacto de dama
                /*
                console.log('vemos si hay un jaque de contacto de dama', 
                    squareToStr(to), 
                    this.numattacks[this.stm][to],
                    this.numattacks[opposite(this.stm)][to],
                    this.attacks[this.stm][to],
                    attackbit[q]
                )
                */

                if ((this.numattacks[this.stm][to] > 1) &&
                    (this.numattacks[opposite(this.stm)][to] === 1) &&
                    (this.attacks[this.stm][to] & attackbit[q])
                ) {
                    this.matingSquares[this.stm][to] = this.chekingSquares[this.stm][to]
                }
                continue
            }

            dest = this.pieceat[to]
            // puede ir a una casilla vacia, o puede comer una pieza nuestra
            if ((dest === empty) || pcolor(dest) === this.stm) {
                let absoffset = Math.abs(offset)
                const found = this.kingescapes[opposite(this.stm)].find(element => element === absoffset)
                if (!found) this.kingescapes[opposite(this.stm)].push(absoffset)
            }
        }

        if (this.kingescapes[opposite(this.stm)].length === 0) {
            // No tiene escapes, todos los jaques seguros serian (casi) mate
            for (let i = 0; i < 128; i++) {

                if (!validSquare(i)) continue
                let numattackers = this.numattacks[this.stm][i]
                if (numattackers === 0) continue

                let numdefenders = this.numattacks[opposite(this.stm)][i]

                // Si el numero de defensores es cero, y no esta ocupada por pieza propia
                // puede estar vacia u ocupada por pieza rival, indefensa
                if ((numdefenders === 0) && (pcolor(this.pieceat[i]) !== this.stm)) {
                    if (this.chekingSquares[this.stm][i] & this.attacks[this.stm][i]) {
                        this.matingSquares[this.stm][i] = this.chekingSquares[this.stm][i]
                    }
                    continue
                }

                // Si el numero de defensores es 1, y el de atacantes es mas de 1
                // y el unico defensor es el rey                
                if ((numdefenders === 1) && (numattackers > 1)) {
                    let kingistheonlydefender = this.attacks[opposite(this.stm)][i] === attackbit[k]

                    if (kingistheonlydefender) {
                        this.matingSquares[this.stm][i] = this.chekingSquares[this.stm][i]
                        continue
                    }
                }
            }
        } else if (this.kingescapes[opposite(this.stm)].length === 1) {
            // Sólo tiene una dirección de escape
            let offset = this.kingescapes[opposite(this.stm)][0]
            // console.log('rey solo tiene una direccion de escape', opposite(this.stm), squareToStr(sq), offset)

            for (let offset2 of [offset, -offset]) {
                to = sq + offset2
                while (validSquare(to)) {
                    // if (this.numattacks[this.stm][to] > 0) continue                            
                    dest = this.pieceat[to]

                    if (this.numattacks[this.stm][to] > this.numattacks[opposite(this.stm)][to]) {
                        this.matingSquares[this.stm][to] = this.chekingSquares[this.stm][to]
                    }

                    if ((dest === empty) || pcolor(dest) === opposite(this.stm)) {
                        // console.log('posible mate en ', squareToStr(to))
                    }
                    if (dest !== 0) break
                    to = to + offset2
                }
            }

        }



        /////////////////////////////////////////////////////////////////////////////////////////////////
        // Enroques
        /////////////////////////////////////////////////////////////////////////////////////////////////
        if (!this.inCheck) {
            // console.log('not in check')
            sq = this.kingsquares[this.stm]
            if (this.stm === white) {
                // console.log('white')
                if (sq === e1) {
                    // console.log('e1')
                    if ((this.pieceat[f1] === empty) &&
                        (this.numattacks[opposite(this.stm)][f1] === 0) &&
                        (this.numattacks[opposite(this.stm)][g1] === 0) &&
                        (this.pieceat[g1] === empty) &&
                        (this.pieceat[h1] === wr) &&
                        (this.castlingRights & whitecancastleK)
                    ) this.addmove(e1, g1, mask_castling)

                    if ((this.pieceat[d1] === empty) &&
                        (this.numattacks[opposite(this.stm)][d1] === 0) &&
                        (this.numattacks[opposite(this.stm)][c1] === 0) &&
                        (this.pieceat[c1] === empty) &&
                        (this.pieceat[b1] === empty) &&
                        (this.pieceat[a1] === wr) &&
                        (this.castlingRights & whitecancastleQ)
                    ) this.addmove(e1, c1, mask_castling)
                }
            } else {
                if (sq === e8) {
                    if ((this.pieceat[f8] === empty) &&
                        (this.numattacks[opposite(this.stm)][f8] === 0) &&
                        (this.numattacks[opposite(this.stm)][g8] === 0) &&
                        (this.pieceat[g8] === empty) &&
                        (this.pieceat[h8] === br) &&
                        (this.castlingRights & blackcancastleK)
                    ) this.addmove(e8, g8, mask_castling)

                    if ((this.pieceat[d8] === empty) &&
                        (this.numattacks[opposite(this.stm)][d8] === 0) &&
                        (this.numattacks[opposite(this.stm)][c8] === 0) &&
                        (this.pieceat[c8] === empty) &&
                        (this.pieceat[b8] === empty) &&
                        (this.pieceat[a8] === br) &&
                        (this.castlingRights & blackcancastleQ)
                    ) this.addmove(e8, c8, mask_castling)
                }
            }
        }


        /////////////////////////////////////////////////////////////////////////////////////////////////
        // COMPROBAMOS EL ESTADO DE LA PARTIDA
        /////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.numlegalmoves = this.moves.length;

        if (this.numlegalmoves === 0) {
            if (this.inCheck) {
                this.inCheckMate = true
                this.isDraw = false
                console.log('Checkmate')
            } else {
                this.isDraw = this.inStalemate = true                
                console.log('Stalemate')
            }
        } else {
            if (this.inCheck)       console.log('check')
            if (this.inDoubleCheck) console.log('double check')
        }
        */

    }

    undomove() {
        let undo = this.history.pop()
        // console.log(undo)

        if (undo == false) return false;

        this.stm = opposite(this.stm)
        let signo = (this.stm === white) ? 1 : -1

        if (undo.promotedpiece !== 0) {
            this.pieceat[undo.to] = (this.stm == white) ? wp : bp;
        }

        let movingpiece = this.pieceat[undo.to]
        // let iskingmove = ptype(movingpiece) == k

        this.movepiece(this.stm, movingpiece, undo.to, undo.from)

        if (undo.capturedpiece) {
            this.addpiece(opposite(this.stm), undo.capturedpiece, undo.to)
        }
        // this.pieceat[undo.from] = this.pieceat[undo.to]
        // this.pieceat[undo.to] = undo.capturedpiece
        console.assert(this.stm === pcolor(movingpiece), 'undomove() la pieza no es del color que mueve')

        this.counter50 = undo.counter50
        this.castlingRights = undo.castlingRights
        this.enpassantSquare = undo.enpassantSquare

        // if (iskingmove) {
        // this.kingsquares[pcolor(movingpiece)] = undo.from
        // }

        if (undo.to === undo.enpassantSquare) {
            if (ptype(movingpiece) === p) {
                // console.log(this.history.debug())
                // console.log(undo)
                this.addpiece(opposite(this.stm), (opposite(this.stm) === white) ? wp : bp, undo.enpassantSquare - (16 * signo))
                // console.log('reponiendo un peon capturado al paso', squareToStr(undo.enpassantSquare), squareToStr(undo.to))
            }
            // console.assert (ptype(movingpiece) === p, 'deshaciendo un al paso que no era de peon', squareToStr(undo.enpassantSquare), squareToStr(undo.to))                        
        }

        if ((undo.from == e1) && (undo.to == g1) && (movingpiece == wk)) {
            console.assert(this.pieceat[f1] == wr, 'no hay torre en f1 al deshacer')
            this.movepiece(this.stm, wr, f1, h1)
        }

        if ((undo.from == e1) && (undo.to == c1) && (movingpiece == wk)) {
            console.assert(this.pieceat[d1] == wr, 'no hay torre en d1 al deshacer')
            this.movepiece(this.stm, wr, d1, a1)
        }

        if ((undo.from == e8) && (undo.to == g8) && (movingpiece == bk)) {
            console.assert(this.pieceat[f8] == br, 'no hay torre en f1 al deshacer')
            this.movepiece(this.stm, wr, f8, h8)
        }

        if ((undo.from == e8) && (undo.to == c8) && (movingpiece == bk)) {
            console.assert(this.pieceat[d8] == br, 'no hay torre en d8 al deshacer')
            this.movepiece(this.stm, wr, d8, a8)
        }

        this.movehalfnumber -= 1
        this.movenumber = this.movehalfnumber / 2 >> 0 // truco para convetir a entero        

        // this.generateMoves()

        this.debug()

        return true;
    }

    makemove_old(from, to, promotedpiece = 0) {

        // console.log('makemovefrom', to, promotedpiece)

        let capturedpiece = this.pieceat[to]

        this.history.add(from, to, capturedpiece, promotedpiece, this.counter50, this.castlingRights, this.enpassantSquare)

        // console.log(this.movehalfnumber)
        // console.log(this.history)

        let iscapture = this.pieceat[to] != empty
        let movingpiece = this.pieceat[from]

        console.assert(movingpiece != empty)
        if (movingpiece === empty) {
            debugger
        }

        let ispawnmove = movingpiece == wp || movingpiece == bp
        let ispawnpush = !iscapture && ispawnmove && Math.abs(to - from) == 32
        let ispromotion = ispawnmove && (rank(to) == rank8 || rank(to) == rank1)
        let isenpassant = ispawnmove && to == this.enpassantSquare
        // let iskingmove = ptype(movingpiece) == k

        console.assert(!ispromotion || promotedpiece > 0, 'pieza que promociona sin ser promocion')

        this.movehalfnumber += 1
        this.movenumber = this.movehalfnumber / 2 >> 0 // truco para convetir a entero

        if (iscapture || ispawnmove) {
            this.counter50 = 0
        } else {
            this.counter50 += 1
        }

        // Peon al paso
        this.enpassantSquare = -1
        if (ispawnpush) {
            let enemypawn = (this.stm === white) ? bp : wp;

            if ((this.pieceat[to + 1] === enemypawn) || (this.pieceat[to - 1] === enemypawn)) {
                this.enpassantSquare = (from + to) / 2
            }

            console.assert(
                (this.stm == white && rank(from) == rank2 && rank(to) == rank4) ||
                (this.stm == black && rank(from) == rank7 && rank(to) == rank5),
                'error al generar una casilla de peon al paso '
            )
        }

        if ((from == a1) || (to == a1)) this.castlingRights &= ~whitecancastleQ
        if ((from == h1) || (to == h1)) this.castlingRights &= ~whitecancastleK
        if ((from == a8) || (to == a8)) this.castlingRights &= ~blackcancastleQ
        if ((from == h8) || (to == h8)) this.castlingRights &= ~blackcancastleK

        if ((from == e1) && (movingpiece == wk)) {
            // console.log('before', this.castlingRights)
            if (to == g1) {
                console.assert(this.castlingRights && whitecancastleK, 'whitecancastleK')
                console.assert(this.pieceat[h1] == wr, 'no hay torre en h1 al hacer enroque')
                this.movepiece(this.stm, wr, h1, f1)
            }
            if (to == c1) {
                console.assert(this.castlingRights && whitecancastleQ, 'whitecancastleQ')
                console.assert(this.pieceat[a1] == wr, 'no hay torre en a1 al hacer enroque')
                this.movepiece(this.stm, wr, a1, d1)
            }
            this.castlingRights &= ~(whitecancastleQ | whitecancastleK)
        }

        if ((from == e8) && (movingpiece == bk)) {
            // console.log('before', this.castlingRights)
            if (to == g8) {
                console.assert(this.castlingRights && blackcancastleK, 'blackcancastleK')
                console.assert(this.pieceat[h8] == br, 'no hay torre en h8 al hacer enroque')
                this.movepiece(this.stm, br, h8, f8)
            }
            if (to == c8) {
                console.assert(this.castlingRights && blackcancastleK, 'blackcancastleK')
                console.assert(this.pieceat[a8] == br, 'no hay torre en a8 al hacer enroque')
                this.movepiece(this.stm, br, a8, d8)
            }
            this.castlingRights &= ~(blackcancastleQ | blackcancastleK)
        }

        if (iscapture) {
            this.removepiece(opposite(this.stm), to)
        }

        this.movepiece(this.stm, movingpiece, from, to)

        if (ispromotion) {
            console.assert(promotedpiece != empty, 'no hay pieza para coronar')
            if ((this.stm == white) && (promotedpiece > 8)) promotedpiece -= 8
            this.pieceat[to] = promotedpiece
        }

        if (isenpassant) {
            let sqpawn = (this.stm == white) ? to - 16 : to + 16;
            this.removepiece(opposite(this.stm), sqpawn)
        }

        this.stm = opposite(this.stm)

        // this.generateMoves()
        this.debug()

        return true
    }

    makemove(move) {
        this.makemove_old(move.from, move.to, move.promotedpiece)
    }

    debug_tableAttacks(side) {

        let attackedsquares = []
        for (let sq = a1; sq <= h8; sq++) {
            let maskAttacks = this.attacks[side][sq]
            if (maskAttacks !== 0) {
                console.assert(this.numattacks[side][sq] > 0, ' error debug attacks', squareToStr(sq))
                let attacksStr = ''
                if (maskAttacks & attackbit[p]) attacksStr += 'P'
                if (maskAttacks & attackbit[n]) attacksStr += 'N'
                if (maskAttacks & attackbit[b]) attacksStr += 'B'
                if (maskAttacks & attackbit[r]) attacksStr += 'R'
                if (maskAttacks & attackbit[q]) attacksStr += 'Q'
                if (maskAttacks & attackbit[k]) attacksStr += 'K'
                //  + bitCount(maskAttacks) + ' ' 
                attackedsquares.push(squareToStr(sq) + ' ' + this.numattacks[side][sq] + ' ' + attacksStr)
            }
        }

        console.log('tableAttacks', side, attackedsquares.join(' / '))
    }

    debug_checkingSquares(side) {
        let chekingSquares = []
        for (let sq = a1; sq <= h8; sq++) {

            let checkmask = this.chekingSquares[side][sq]
            let attacksStr = ''

            if (checkmask !== 0) {
                if (checkmask & mask_discovercheck) {
                    chekingSquares.push(squareToStr(sq) + ' D+')
                } else {
                    if (checkmask & checkbit[p]) attacksStr += 'P'
                    if (checkmask & checkbit[n]) attacksStr += 'N'
                    if (checkmask & checkbit[b]) attacksStr += 'B'
                    if (checkmask & checkbit[r]) attacksStr += 'R'
                    if (checkmask & checkbit[q]) attacksStr += 'Q'
                    if (checkmask & checkbit[k]) attacksStr += 'K'

                    chekingSquares.push(squareToStr(sq) + ' ' + attacksStr)
                }
            }
        }

        let safechekingSquares = []
        for (let sq = a1; sq <= h8; sq++) {

            let checkmask = this.chekingSquares[side][sq]
            let attacksStr = ''

            if (checkmask !== 0) {
                if (checkmask & mask_discovercheck) {
                    chekingSquares.push(squareToStr(sq) + ' D+')
                } else {
                    // console.log('scsq', squareToStr(sq),  this.numattacks[side][sq], this.numattacks[opposite(side)][sq] )  
                    if (this.numattacks[side][sq] === 0) continue
                    if (this.numattacks[side][sq] < this.numattacks[opposite(side)][sq]) continue

                    let kingistheonlydefender = this.attacks[opposite(side)][sq] === attackbit[k]
                    if ((this.numattacks[opposite(side)][sq] === 1) && !kingistheonlydefender) continue
                    let ispawncheck = (this.chekingSquares[this.stm][sq] & attackbit[p]) != 0
                    let ourpieceattacks = (this.chekingSquares[this.stm][sq] & this.attacks[this.stm][sq]) != 0

                    // console.log('scsq', squareToStr(sq),  this.numattacks[side][sq], this.numattacks[opposite(side)][sq], ispawncheck, ourpieceattacks )  
                    if (!ourpieceattacks && !ispawncheck) continue

                    // checkmask &= this.attacks[side][sq]
                    // if (checkmask == 0) continue

                    if (checkmask & checkbit[p]) attacksStr += 'P'
                    if (checkmask & checkbit[n]) attacksStr += 'N'
                    if (checkmask & checkbit[b]) attacksStr += 'B'
                    if (checkmask & checkbit[r]) attacksStr += 'R'
                    if (checkmask & checkbit[q]) attacksStr += 'Q'
                    if (checkmask & checkbit[k]) attacksStr += 'K'

                    safechekingSquares.push(squareToStr(sq) + ' ' + attacksStr)
                }
            }
        }

        console.log('chekingSquares', side, chekingSquares.join(' / '))
        console.log('safechekingSquares', side, safechekingSquares.join(' / '))
    }

    debug_matingSquares(side) {
        let matingSquares = []
        for (let sq = a1; sq <= h8; sq++) {

            let checkmask = this.matingSquares[side][sq]
            let attacksStr = ''

            if (checkmask !== 0) {
                if (checkmask & mask_discovercheck) {
                    matingSquares.push(squareToStr(sq) + ' D+')
                } else {
                    if (checkmask & checkbit[p]) attacksStr += 'P'
                    if (checkmask & checkbit[n]) attacksStr += 'N'
                    if (checkmask & checkbit[b]) attacksStr += 'B'
                    if (checkmask & checkbit[r]) attacksStr += 'R'
                    if (checkmask & checkbit[q]) attacksStr += 'Q'
                    if (checkmask & checkbit[k]) attacksStr += 'K'
                    matingSquares.push(squareToStr(sq) + ' ' + attacksStr)
                }
            }
        }

        console.log('matingSquares', side, matingSquares.join(' / '))
    }

    debug_pins(side) {

        let pinSquares = []
        for (let sq = a1; sq <= h8; sq++) {
            let pdir = this.pinDirection[side][sq]
            if (pdir !== 0) pinSquares.push(squareToStr(sq) + ' ' + pdir)
        }

        console.log('pins', side, pinSquares.join(' / '))
    }

    debug_kingSquares() {
        // console.clear()
        // console.log('stm', this.stm)
        // console.log(this.kingsquares)
        console.log('kingsquares', squareToStr(this.kingsquares[white]), squareToStr(this.kingsquares[black]))
    }

    debug_kingescapes(side) {
        console.log('kingescapes', side, this.kingescapes[side])
    }

    debug_pieceSquares() {
        let output = ''
        this.piecesquares[white].forEach(element => {
            output += squareToStr(element) + ' '
        });
        console.log('piecesquares', white, output)

        output = ''
        this.piecesquares[black].forEach(element => {
            output += squareToStr(element) + ' '
        });
        console.log('piecesquares', black, output)
    }

    debug_legalmoves() {
        let moveStr = ''
        for (const move of this.moves) {
            moveStr += this.getMoveStr(move) + ' '
        }

        console.log('legal moves', this.moves.length, moveStr)


    }

    debug_state() {
        if (this.moves.length === 0) {
            if (this.inCheck) {
                this.inCheckMate = true
                this.isDraw = false
                console.log('Checkmate')
            } else {
                this.isDraw = this.inStalemate = true
                console.log('Stalemate')
            }
        } else {
            if (this.inCheck) console.log('check')
            if (this.inDoubleCheck) console.log('double check')
        }
    }



    debug() {

        if (this.debugvalue) {

            console.log('History', this.history.debug())
            this.generateMoves()


            // this.debug_tableAttacks(white)
            // this.debug_tableAttacks(black)

            // this.debug_checkingSquares(white)
            // this.debug_checkingSquares(black)

            // this.debug_matingSquares(white)
            // this.debug_matingSquares(black)

            // this.debug_kingescapes(white)
            // this.debug_kingescapes(black)

            // this.debug_pins(white)
            // this.debug_pins(black)            
            // this.debug_pieceSquares()        
            this.debug_legalmoves()

        }
    }

    setdebug(debug) {
        console.log('setdebug', debug)

        this.debugvalue = [1, '1', 'true', 'on', true].includes(debug)
    }

    perft(depth) {

        // http://www.rocechess.ch/perft.html falla en perft 7 con los caballos 
        // console.log('perft ', depth)
        this.generateMoves()
        var moves = this.moves
        var nodes = 0

        var nmoves = moves.length
        if (depth === 1) return nmoves
        // if (depth === 0) return 1

        for (var i = 0; i < nmoves; i++) {
            this.makemove(moves[i]);
            nodes += this.perft(depth - 1);
            this.undomove();
        }

        return nodes;
    }

    divide(depth) {

        // http://www.rocechess.ch/perft.html falla en perft 7 con los caballos 
        // console.log('perft ', depth)
        this.generateMoves()
        var moves = this.moves
        var nodes = 0

        var nmoves = moves.length
        if (depth === 1) return nmoves
        // if (depth === 0) return 1

        for (var i = 0; i < nmoves; i++) {
            this.makemove(moves[i]);
            let movenodes = this.perft(depth - 1)
            nodes += movenodes
            console.log(this.getMoveStr(moves[i]), movenodes)
            this.undomove();
        }

        return nodes;
    }


    loadFEN(fenstring) {

        this.reset()

        // Loads the fen string
        let file = filea; // columna a..h
        let rank = rank8; // fila 1..8
        let [fenboard, fenstm, fencastling, fenep, fen50, fenmn] = fenstring.split(' ');

        // Fen Board
        this.pieceat.fill(empty);
        this.piecesquares[white].fill(-1)
        this.piecesquares[black].fill(-1)

        for (let i = 0; i < fenboard.length; i++) {
            let char = fenboard[i];
            if (char === '/') {
                rank--;
                file = filea;
                continue;
            }

            if (!isNaN(char)) {
                // this.output(char + ' not is nan');    
                file += Number(char);
                continue;
            }

            let piece = charpieces.findIndex(el => (el === char));
            let sq = square(file, rank)

            if (piece > 0) {
                this.addpiece(pcolor(piece), piece, sq)
                file++;
            }

            console.assert(piece > 0, ' piece > 0 ')
        }

        // console.log(this.piecesquares)

        // Fen Side to move
        this.stm = (fenstm === 'w') ? white : black;

        // castling rights
        this.castlingRights = 0
        if (fencastling != '-') {
            for (let i = 0; i < fencastling.length; i++) {
                let char = fencastling[i];
                if (char == 'Q') this.castlingRights |= whitecancastleQ;
                if (char == 'K') this.castlingRights |= whitecancastleK;
                if (char == 'q') this.castlingRights |= blackcancastleQ;
                if (char == 'k') this.castlingRights |= blackcancastleK;
            }
        }

        // enpassant square
        this.enpassantSquare = (fenep == '-') ? -1 : squareFromStr(fenep)

        // 50 move counter
        this.counter50 = (fen50 == '-') ? 0 : Number(fen50)

        // move number
        this.movenumber = (fenmn == '-') ? 1 : Number(fenmn)
        if (this.movenumber == 0) this.movenumber = 1

        this.movehalfnumber = ((this.movenumber) * 2) + this.stm

        // this.generateMoves()
        this.debug()
    }

    getFEN() {

        function getFenBoard(board) {

            let fenboard = ''
            let empty = 0

            for (let rank = rank8; rank >= rank1; rank--) {

                for (let file = filea; file <= fileh; file++) {

                    let sq = square(file, rank)
                    let piece = board[sq]

                    if (!piece) { empty++; continue }
                    if (empty > 0) { fenboard += empty.toString(); empty = 0 }

                    fenboard += pieceChar(piece) // charpieces[piece]                                            
                }

                if (empty > 0) { fenboard += empty.toString(); empty = 0 }
                if (rank > rank1) fenboard += '/'
            }

            return fenboard
        }

        function getFenCastling(castlingRights) {

            if (!castlingRights) return '-'

            let cr = ''
            if (castlingRights & whitecancastleK) cr += 'K'
            if (castlingRights & whitecancastleQ) cr += 'Q'
            if (castlingRights & blackcancastleK) cr += 'k'
            if (castlingRights & blackcancastleQ) cr += 'q'

            return cr
        }

        let fenboard = getFenBoard(this.pieceat)
        let fenstm = (this.stm == white) ? 'w' : 'b'
        let fencastling = getFenCastling(this.castlingRights)
        let fenep = (this.enpassantSquare > 0) ? squareToStr(this.enpassantSquare) : '-'
        let fen50 = this.counter50
        let fenmn = this.movenumber

        return [fenboard, fenstm, fencastling, fenep, fen50, fenmn].join(' ')
    }
}
