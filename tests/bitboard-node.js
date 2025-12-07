/**
 * Node.js wrapper for bitboard.js
 * Adapts the browser-based bitboard chess board to work in Node.js environment
 */

// Set up similar constants as x88-node.js
global.white = 0;
global.black = 1;

global.empty = 0;

global.p = 1;
global.n = 2;
global.b = 3;
global.r = 4;
global.q = 5;
global.k = 6;

global.wp = 1;
global.wn = 2;
global.wb = 3;
global.wr = 4;
global.wq = 5;
global.wk = 6;

global.bp = global.wp + 8;
global.bn = global.wn + 8;
global.bb = global.wb + 8;
global.br = global.wr + 8;
global.bq = global.wq + 8;
global.bk = global.wk + 8;

global.filea = 0;
global.fileb = 1;
global.filec = 2;
global.filed = 3;
global.filee = 4;
global.filef = 5;
global.fileg = 6;
global.fileh = 7;

global.rank1 = 0;
global.rank2 = 1;
global.rank3 = 2;
global.rank4 = 3;
global.rank5 = 4;
global.rank6 = 5;
global.rank7 = 6;
global.rank8 = 7;

global.whitecancastleK = 1;
global.whitecancastleQ = 2;
global.blackcancastleK = 4;
global.blackcancastleQ = 8;

global.mask_capture = 1;
global.mask_promotion = 1 << 1;
global.mask_pawnmove = 1 << 2;
global.mask_pawn2 = 1 << 15;
global.mask_ep = 1 << 3;
global.mask_castling = 1 << 4;
global.mask_check = 1 << 5;
global.mask_doublecheck = 1 << 6;
global.mask_discovercheck = 1 << 7;
global.mask_safe = 1 << 8;
global.mask_protected = 1 << 9;
global.mask_insecure = 1 << 10;
global.mask_hanging = 1 << 11;
global.mask_goodcapture = 1 << 12;
global.mask_freecapture = 1 << 13;
global.mask_winningcapture = 1 << 14;

global.MAXPLY = 100;

global.fileFromChar = function (char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
};

global.rankFromChar = function (char) {
    return char.charCodeAt(0) - '1'.charCodeAt(0);
};

global.fileToChar = function (file) {
    return String.fromCharCode('a'.charCodeAt(0) + file);
};

global.rankToChar = function (rank) {
    return String.fromCharCode('1'.charCodeAt(0) + rank);
};

global.pcolor = function (piece) {
    return (piece === 0) ? -1 : (piece & 8) >>> 3;
};

global.ptype = function (piece) {
    return (piece & 7) >>> 0;
};

global.makepiece = function (pcolor, ptype) {
    return (pcolor << 3) + ptype;
};

global.pieceChar = function (piece) {
    return global.charpieces[piece];
};

global.opposite = function (turn) {
    return 1 - turn;
};

global.pieces = '.♟♚♞♝♜♛  ♙♔♘♗♖♕';
global.diagpieces = [' ', '♟', '♞', '♝', '♜', '♛', '♚', '', '', '♙', '♘', '♗', 'r', '♖', '♔', ''];
global.charpieces = [' ', 'P', 'N', 'B', 'R', 'Q', 'K', '', '', 'p', 'n', 'b', 'r', 'q', 'k', ''];

global.lowestSetBit = function (n) {
    if (n === 0) return 32;
    let count = 0;
    while ((n & 1) === 0) {
        n >>>= 1;
        count++;
    }
    return count;
};

global.bitCount = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};

// Read and execute the bitboard.js file
const fs = require('fs');
const path = require('path');

try {
    const bitboardPath = path.join(__dirname, '..', 'js', 'bitboard.js');
    const bitboardCode = fs.readFileSync(bitboardPath, 'utf8');

    // Remove "use strict" to avoid conflicts and execute
    const modifiedCode = bitboardCode.replace(/^["']use strict["'];?\s*/gm, '');
    eval(modifiedCode);

    // Export the BBBoard class
    module.exports = {
        BBBoard: global.BBBoard
    };
} catch (error) {
    console.error('Error loading bitboard.js:', error.message);
    // Export a dummy class that will fail gracefully
    module.exports = {
        BBBoard: class BBBoard {
            constructor() {
                throw new Error('Bitboard generator not available');
            }
        }
    };
}
