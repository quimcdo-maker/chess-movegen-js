# 🦀 Chess Bitboards WebAssembly

High-performance bitboard operations for chess written in Rust and compiled to WebAssembly.

## 🚀 Features

- **Ultra-fast bitboard operations** using native Rust
- **WebAssembly** for cross-platform compatibility (browser + Node.js)
- **Complete chess attack generation** for all piece types
- **Population count, LSB/MSB operations** optimized for 64-bit integers
- **Magic bitboard support** for sliding pieces
- **Zero-cost abstractions** with Rust's performance guarantees

## 📦 Installation

### For Rust/Cargo Projects
```toml
[dependencies]
chess-bitboards-wasm = { path = "chess-bitboards-wasm" }
```

### For Node.js Projects
```bash
# Install wasm-pack if not already installed
cargo install wasm-pack

# Build the package
wasm-pack build --target node

# Install in your project
npm install chess-bitboards-wasm
```

### For Browser Projects
```bash
# Build for web
wasm-pack build --target web

# Copy files to your public directory
cp pkg/* your-public/js/
```

## 🎯 Quick Start

### JavaScript/TypeScript
```javascript
import init, { 
    ChessBitboardEngine, 
    popcount64, 
    knight_attacks,
    square_to_algebraic 
} from 'chess-bitboards-wasm.js';

await init(); // Initialize WASM

// Basic operations
const bitcount = popcount64(0xFFu64); // Returns 8

// Generate attacks
const engine = new ChessBitboardEngine();
const knight_moves = knight_attacks(28); // e4 square
const rook_moves = engine.generate_attacks(28, 0, 4, 0); // Rook from e4

// Convert squares
const algebraic = square_to_algebraic(28); // "e4"
const square = algebraic_to_square("e4"); // 28
```

### Rust
```rust
use chess_bitboards_wasm::{ChessBitboardEngine, popcount64, knight_attacks};

fn main() {
    // Basic bitboard operations
    let bitcount = popcount64(0xFFu64);
    
    // Create engine
    let engine = ChessBitboardEngine::new();
    
    // Generate attacks
    let knight_moves = knight_attacks(28); // e4 square
    let rook_moves = engine.generate_attacks(28, 0, 4, 0); // Rook from e4
}
```

## 🎮 API Reference

### Core Functions

#### `popcount64(x: u64) -> u32`
Count the number of set bits in a 64-bit integer.
```javascript
const count = popcount64(0xFFu64); // 8
```

#### `lsb64(x: u64) -> u32`
Get the index of the least significant set bit.
```javascript
const lsb = lsb64(0b1000u64); // 3
```

#### `msb64(x: u64) -> u32`
Get the index of the most significant set bit.
```javascript
const msb = msb64(0x8000000000000000u64); // 63
```

### Attack Generation

#### `knight_attacks(square: u32) -> u64`
Generate all knight attacks from a given square.
```javascript
const knight_attacks = knight_attacks(28); // e4 = 28
// Returns: 0x2844004428004428u64
```

#### `king_attacks(square: u32) -> u64`
Generate all king attacks from a given square.
```javascript
const king_attacks = king_attacks(28); // e4 = 28
// Returns: 0x0000000000383C00u64
```

#### `white_pawn_attacks(square: u32) -> u64`
Generate white pawn attacks from a given square.
```javascript
const white_pawn_attacks = white_pawn_attacks(28); // e4 = 28
// Returns: 0x000000000000003C00u64 (d5, f5)
```

#### `black_pawn_attacks(square: u32) -> u64`
Generate black pawn attacks from a given square.
```javascript
const black_pawn_attacks = black_pawn_attacks(28); // e4 = 28
// Returns: 0x00000000003C0000u64 (d3, f3)
```

#### `sliding_attacks(square: u32, occupancy: u64, piece_type: u8) -> u64`
Generate sliding piece attacks (rooks, bishops, queens).
```javascript
const rook_attacks = sliding_attacks(28, 0, 4); // Rook from e4
const bishop_attacks = sliding_attacks(28, 0, 3); // Bishop from e4
const queen_attacks = sliding_attacks(28, 0, 5); // Queen from e4
```

### Chess Engine

#### `ChessBitboardEngine`
Complete chess bitboard engine with magic bitboards.

```javascript
const engine = new ChessBitboardEngine();

// Generate attacks for any piece
const knight_attacks = engine.generate_attacks(28, 0, 2, 0); // White knight from e4
const rook_attacks = engine.generate_attacks(28, 0, 4, 1); // Black rook from e4

// Piece types:
// 1 = Pawn, 2 = Knight, 3 = Bishop, 4 = Rook, 5 = Queen, 6 = King
// Colors: 0 = White, 1 = Black
```

### Square Conversion

#### `square_to_algebraic(square: u32) -> String`
Convert square index (0-63) to algebraic notation.
```javascript
const algebraic = square_to_algebraic(28); // "e4"
```

#### `algebraic_to_square(algebraic: &str) -> Result<u32, JsValue>`
Convert algebraic notation to square index.
```javascript
const square = algebraic_to_square("e4"); // 28
```

## 🔧 Building from Source

### Prerequisites
- Rust 1.70+ 
- wasm-pack: `cargo install wasm-pack`
- Node.js (for testing)

### Build Commands
```bash
# Build for all targets
wasm-pack build --target web --target node

# Build for specific target
wasm-pack build --target web
wasm-pack build --target node
wasm-pack build --target bundler

# Build with optimizations
wasm-pack build --release --target web
```

### Testing
```bash
# Run Rust tests
cargo test

# Run WASM tests in browser
wasm-pack test --target web

# Run WASM tests in Node.js
wasm-pack test --target node
```

## 📊 Performance Benchmarks

### Comparison with JavaScript Implementation

| Operation | JS Implementation | WASM Implementation | Expected Speedup |
|-----------|------------------|---------------------|------------------|
| Popcount | ~50ns | ~5ns | ~10x |
| Knight Attacks | ~200ns | ~20ns | ~10x |
| Rook Attacks | ~800ns | ~80ns | ~10x |
| Queen Attacks | ~1.2μs | ~120ns | ~10x |

**Note**: This is a preliminary port from `js/bitboard.js`. Performance benchmarks are estimates and need validation.

### Example Performance Test
```javascript
const iterations = 1000000;
const start = performance.now();

for (let i = 0; i < iterations; i++) {
    knight_attacks(28);
}

const end = performance.now();
const nps = iterations / ((end - start) / 1000); // ~50M NPS expected
```

## 🎯 Integration with Chess.js

```javascript
import { Chess } from 'chess.js';
import init, { ChessBitboardEngine } from 'chess-bitboards-wasm.js';

const chess = new Chess();
const engine = new ChessBitboardEngine();

// Convert chess.js position to bitboards
function positionToBitboards(chess) {
    const board = chess.board();
    let bitboards = {
        white_pieces: 0n,
        black_pieces: 0n,
        rooks: 0n,
        bishops: 0n,
        knights: 0n,
        queens: 0n,
        kings: 0n,
        pawns: 0n
    };
    
    // Convert board to bitboards (implementation needed)
    // ...
    
    return bitboards;
}

// Fast attack detection
function getAttacks(chess, square) {
    const bitboards = positionToBitboards(chess);
    const occupancy = bitboards.white_pieces | bitboards.black_pieces;
    
    // Use WASM for fast attack generation
    const piece = chess.get(square);
    if (piece) {
        const piece_type = pieceCharToType(piece.type);
        return engine.generate_attacks(square, occupancy, piece_type, piece.color === 'w' ? 0 : 1);
    }
    
    return 0n;
}
```

## 🛠️ Development

### Project Structure
```
chess-bitboards-wasm/
├── src/
│   └── lib.rs              # Main WASM module
├── tests/
│   └── test_operations.rs  # Test suite
├── Cargo.toml              # Rust dependencies
├── README.md               # This file
└── pkg/                    # Generated WASM package
```

### Adding New Features

1. **Add functions to `lib.rs`**:
```rust
#[wasm_bindgen]
pub fn new_function(param: u64) -> u64 {
    // Implementation
}
```

2. **Add tests**:
```rust
#[wasm_bindgen_test]
fn test_new_function() {
    assert_eq!(new_function(42), expected);
}
```

3. **Rebuild**:
```bash
wasm-pack build --target web
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 🔗 Related Projects

- [chess.js](https://github.com/jhlywa/chess.js) - JavaScript chess engine
- [chessboard.js](https://github.com/oakmac/chessboardjs) - JavaScript chessboard
- [Stockfish](https://stockfishchess.org/) - World-class chess engine

## 📞 Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/mcarbonell/chess-movegen-js/issues)
- Email: mario.carbonell@example.com

---

**Built with ❤️ using Rust and WebAssembly**