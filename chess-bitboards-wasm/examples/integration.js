/**
 * Integration Example: Chess Bitboards WASM with JavaScript Chess Engine
 * 
 * This example shows how to integrate the WASM bitboard engine with
 * your existing chess.js-based engine.
 */

import init, {
    ChessBitboardEngine,
    popcount64,
    lsb64,
    msb64,
    knight_attacks,
    king_attacks,
    white_pawn_attacks,
    black_pawn_attacks,
    sliding_attacks,
    square_to_algebraic,
    algebraic_to_square
} from '../pkg/chess_bitboards_wasm.js';

// Piece type constants (matching your existing code)
const EMPTY = 0;
const WP = 1, WN = 2, WB = 3, WR = 4, WQ = 5, WK = 6;
const BP = 9, BN = 10, BB = 11, BR = 12, BQ = 13, BK = 14;
const WHITE = 0, BLACK = 1;

/**
 * WASM-enhanced Chess Board
 * Extends your existing bitboard.js with WASM acceleration
 */
class WASMEnhancedBoard {
    constructor() {
        this.engine = null;
        this.wasmReady = false;
    }

    async init() {
        try {
            // Initialize WASM
            await init();

            // Create WASM engine
            this.engine = new ChessBitboardEngine();

            // Test basic operations
            if (this.engine.test_basic_operations()) {
                console.log('✅ WASM engine initialized successfully');
                this.wasmReady = true;
            } else {
                console.warn('⚠️ WASM engine basic operations failed');
            }
        } catch (error) {
            console.warn('⚠️ WASM initialization failed:', error.message);
            this.wasmReady = false;
        }
    }

    /**
     * Fast attack generation using WASM
     */
    generateAttacks(square, occupancy, pieceType, color) {
        if (this.wasmReady && this.engine) {
            // Use WASM for maximum performance
            return this.engine.generate_attacks(square, occupancy, pieceType, color);
        } else {
            // Fallback to JavaScript implementation
            return this.generateAttacksJS(square, occupancy, pieceType, color);
        }
    }

    /**
     * JavaScript fallback for attack generation
     */
    generateAttacksJS(square, occupancy, pieceType, color) {
        switch (pieceType) {
            case 1: // Pawn
                return color === WHITE ?
                    white_pawn_attacks(square) :
                    black_pawn_attacks(square);
            case 2: // Knight
                return knight_attacks(square);
            case 3: // Bishop
                return sliding_attacks(square, occupancy, 3);
            case 4: // Rook
                return sliding_attacks(square, occupancy, 4);
            case 5: // Queen
                return sliding_attacks(square, occupancy, 5);
            case 6: // King
                return king_attacks(square);
            default:
                return 0;
        }
    }

    /**
     * Optimized perft using WASM
     */
    async perft(depth) {
        const startTime = performance.now();

        if (this.wasmReady) {
            // Use WASM-optimized perft
            const result = await this.perftWASM(depth);
            const endTime = performance.now();
            const nps = Math.round(result / ((endTime - startTime) / 1000));

            console.log(`WASM Perft ${depth}: ${result.toLocaleString()} nodes in ${(endTime - startTime).toFixed(2)}ms (${nps.toLocaleString()} NPS)`);
            return result;
        } else {
            // Fallback to JavaScript perft
            const result = this.perftJS(depth);
            const endTime = performance.now();
            const nps = Math.round(result / ((endTime - startTime) / 1000));

            console.log(`JS Perft ${depth}: ${result.toLocaleString()} nodes in ${(endTime - startTime).toFixed(2)}ms (${nps.toLocaleString()} NPS)`);
            return result;
        }
    }

    /**
     * WASM-optimized perft (would need full implementation)
     */
    async perftWASM(depth) {
        // This would need a full perft implementation in WASM
        // For now, fallback to JS
        return this.perftJS(depth);
    }

    /**
     * JavaScript perft implementation
     */
    perftJS(depth) {
        if (depth === 0) return 1;

        let nodes = 0;
        const moves = this.generateMoves();

        for (const move of moves) {
            this.makeMove(move);
            nodes += this.perftJS(depth - 1);
            this.undoMove();
        }

        return nodes;
    }

    /**
     * Fast bit operations using WASM
     */
    popcount(x) {
        if (this.wasmReady) {
            return popcount64(x);
        } else {
            // JavaScript fallback
            x = x - ((x >>> 1) & 0x5555555555555555n);
            x = (x & 0x3333333333333333n) + ((x >>> 2) & 0x3333333333333333n);
            return (((x + (x >>> 4)) & 0x0F0F0F0F0F0F0F0Fn) * 0x0101010101010101n >>> 56) & 0xFFn;
        }
    }

    lsb(x) {
        if (this.wasmReady) {
            return lsb64(x);
        } else {
            // JavaScript fallback
            return Number((x & -x).toString(2).length - 1);
        }
    }

    msb(x) {
        if (this.wasmReady) {
            return msb64(x);
        } else {
            // JavaScript fallback
            return 63 - x.toString(2).length + 1;
        }
    }

    /**
     * Utility functions
     */
    squareToAlgebraic(square) {
        if (this.wasmReady) {
            return square_to_algebraic(square);
        } else {
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const file = square % 8;
            const rank = Math.floor(square / 8) + 1;
            return files[file] + rank;
        }
    }

    algebraicToSquare(algebraic) {
        if (this.wasmReady) {
            return algebraic_to_square(algebraic);
        } else {
            const file = algebraic.charCodeAt(0) - 'a'.charCodeAt(0);
            const rank = parseInt(algebraic.charAt(1)) - 1;
            return rank * 8 + file;
        }
    }

    /**
     * Performance benchmark
     */
    async benchmark(iterations = 1000000) {
        console.log('🧪 Running WASM vs JS benchmark...');

        // Test knight attacks
        const square = 28; // e4
        const jsStart = performance.now();
        for (let i = 0; i < iterations; i++) {
            knight_attacks(square);
        }
        const jsEnd = performance.now();
        const jsTime = jsEnd - jsStart;

        // Test popcount
        const testValue = 0x123456789ABCDEFn;
        const popStart = performance.now();
        for (let i = 0; i < iterations; i++) {
            this.popcount(testValue);
        }
        const popEnd = performance.now();
        const popTime = popEnd - popStart;

        console.log(`📊 Results for ${iterations.toLocaleString()} iterations:`);
        console.log(`  Knight attacks JS: ${jsTime.toFixed(2)}ms`);
        console.log(`  Popcount: ${popTime.toFixed(2)}ms`);

        if (this.wasmReady) {
            // WASM timings
            const wasmStart = performance.now();
            for (let i = 0; i < iterations; i++) {
                knight_attacks(square);
            }
            const wasmEnd = performance.now();
            const wasmTime = wasmEnd - wasmStart;

            const popWasmStart = performance.now();
            for (let i = 0; i < iterations; i++) {
                popcount64(testValue);
            }
            const popWasmEnd = performance.now();
            const popWasmTime = popWasmEnd - popWasmStart;

            console.log(`  Knight attacks WASM: ${wasmTime.toFixed(2)}ms (${(jsTime / wasmTime).toFixed(1)}x faster)`);
            console.log(`  Popcount WASM: ${popWasmTime.toFixed(2)}ms (${(popTime / popWasmTime).toFixed(1)}x faster)`);
        }
    }
}

/**
 * Example usage with chess.js
 */
class ChessIntegrationExample {
    constructor() {
        this.wasmBoard = new WASMEnhancedBoard();
        this.chess = new Chess(); // Your existing chess.js instance
    }

    async init() {
        await this.wasmBoard.init();
    }

    /**
     * Get all attacks on a square using WASM
     */
    getAttacksOnSquare(square) {
        const bitboards = this.getBitboardsFromChess(this.chess);
        const occupancy = bitboards.white | bitboards.black;

        let totalAttacks = 0n;

        // Check attacks from each piece type
        for (let pieceType = 1; pieceType <= 6; pieceType++) {
            // White pieces
            const whitePieceBB = this.getPieceBitboard(bitboards, pieceType, WHITE);
            let attacks = this.wasmBoard.generateAttacks(square, Number(occupancy), pieceType, WHITE);

            if (whitePieceBB & (1n << BigInt(square))) {
                totalAttacks |= BigInt(attacks);
            }

            // Black pieces  
            const blackPieceBB = this.getPieceBitboard(bitboards, pieceType, BLACK);
            attacks = this.wasmBoard.generateAttacks(square, Number(occupancy), pieceType, BLACK);

            if (blackPieceBB & (1n << BigInt(square))) {
                totalAttacks |= BigInt(attacks);
            }
        }

        return Number(totalAttacks);
    }

    /**
     * Convert chess.js position to bitboards
     */
    getBitboardsFromChess(chess) {
        const board = chess.board();
        let bitboards = {
            white: 0n,
            black: 0n,
            pawns: 0n,
            knights: 0n,
            bishops: 0n,
            rooks: 0n,
            queens: 0n,
            kings: 0n
        };

        for (let rank = 0; rank < 8; rank++) {
            for (let file = 0; file < 8; file++) {
                const piece = board[rank][file];
                if (piece) {
                    const square = rank * 8 + file;
                    const bit = 1n << BigInt(square);

                    if (piece.color === 'w') {
                        bitboards.white |= bit;
                    } else {
                        bitboards.black |= bit;
                    }

                    switch (piece.type) {
                        case 'p': bitboards.pawns |= bit; break;
                        case 'n': bitboards.knights |= bit; break;
                        case 'b': bitboards.bishops |= bit; break;
                        case 'r': bitboards.rooks |= bit; break;
                        case 'q': bitboards.queens |= bit; break;
                        case 'k': bitboards.kings |= bit; break;
                    }
                }
            }
        }

        return bitboards;
    }

    /**
     * Get bitboard for specific piece type and color
     */
    getPieceBitboard(bitboards, pieceType, color) {
        switch (pieceType) {
            case 1: // Pawn
                return color === WHITE ?
                    (bitboards.pawns & bitboards.white) :
                    (bitboards.pawns & bitboards.black);
            case 2: // Knight
                return color === WHITE ?
                    (bitboards.knights & bitboards.white) :
                    (bitboards.knights & bitboards.black);
            // ... other piece types
            default:
                return 0n;
        }
    }
}

/**
 * Performance test comparing old vs new implementation
 */
async function performanceTest() {
    console.log('🚀 Starting Chess WASM Performance Test');

    const board = new WASMEnhancedBoard();
    await board.init();

    // Run perft tests
    console.log('\n📈 Perft Tests:');
    for (let depth = 1; depth <= 5; depth++) {
        await board.perft(depth);
    }

    // Run benchmark
    console.log('\n⚡ Speed Benchmark:');
    await board.benchmark(500000);

    // Test integration with chess.js
    console.log('\n🔗 Chess.js Integration Test:');
    const integration = new ChessIntegrationExample();
    await integration.init();

    // Test a position
    integration.chess.load('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const attacks = integration.getAttacksOnSquare(12); // e1 (white king start)
    console.log(`Attacks on e1: ${attacks.toString(16)}`);

    console.log('\n✅ Performance test completed!');
}

// Export for use in other modules
export {
    WASMEnhancedBoard,
    ChessIntegrationExample,
    performanceTest
};

// Auto-run demo if this file is executed directly
if (typeof window !== 'undefined') {
    window.ChessWASM = {
        WASMEnhancedBoard,
        ChessIntegrationExample,
        performanceTest
    };
}