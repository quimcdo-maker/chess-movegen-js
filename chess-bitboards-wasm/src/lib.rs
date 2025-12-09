use wasm_bindgen::prelude::*;

// Piece constants
const EMPTY: u8 = 0;
const WP: u8 = 1;
const WN: u8 = 2;
const WB: u8 = 3;
const WR: u8 = 4;
const WQ: u8 = 5;
const WK: u8 = 6;
const BP: u8 = 9;
const BN: u8 = 10;
const BB: u8 = 11;
const BR: u8 = 12;
const BQ: u8 = 13;
const BK: u8 = 14;

const WHITE: u8 = 0;
const BLACK: u8 = 1;

/// Count the number of bits set in a 64-bit integer
#[wasm_bindgen]
pub fn popcount64(x: u64) -> u32 {
    x.count_ones()
}

/// Get the least significant bit set
#[wasm_bindgen]
pub fn lsb64(x: u64) -> u32 {
    if x == 0 { 
        return 64;
    }
    x.trailing_zeros()
}

/// Get the most significant bit set
#[wasm_bindgen]
pub fn msb64(x: u64) -> u32 {
    if x == 0 {
        return 64;
    }
    63 - x.leading_zeros()
}

/// Generate rook attacks using classical approach (on-the-fly)
#[wasm_bindgen]
pub fn rook_attacks(square: u32, occupancy: u64) -> u64 {
    let mut attacks: u64 = 0;
    let rank = (square / 8) as i32;
    let file = (square % 8) as i32;
    
    // North
    for r in (rank + 1)..8 {
        let sq = (r * 8 + file) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
    }
    
    // South
    for r in (0..rank).rev() {
        let sq = (r * 8 + file) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
    }
    
    // East
    for f in (file + 1)..8 {
        let sq = (rank * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
    }
    
    // West
    for f in (0..file).rev() {
        let sq = (rank * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
    }
    
    attacks
}

/// Generate bishop attacks using classical approach (on-the-fly)
#[wasm_bindgen]
pub fn bishop_attacks(square: u32, occupancy: u64) -> u64 {
    let mut attacks: u64 = 0;
    let rank = (square / 8) as i32;
    let file = (square % 8) as i32;
    
    // NE (North-East)
    let mut r = rank + 1;
    let mut f = file + 1;
    while r < 8 && f < 8 {
        let sq = (r * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
        r += 1;
        f += 1;
    }
    
    // NW (North-West)
    r = rank + 1;
    f = file - 1;
    while r < 8 && f >= 0 {
        let sq = (r * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
        r += 1;
        f -= 1;
    }
    
    // SE (South-East)
    r = rank - 1;
    f = file + 1;
    while r >= 0 && f < 8 {
        let sq = (r * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
        r -= 1;
        f += 1;
    }
    
    // SW (South-West)
    r = rank - 1;
    f = file - 1;
    while r >= 0 && f >= 0 {
        let sq = (r * 8 + f) as u32;
        attacks |= 1u64 << sq;
        if (occupancy & (1u64 << sq)) != 0 {
            break;
        }
        r -= 1;
        f -= 1;
    }
    
    attacks
}

/// Generate knight attacks
#[wasm_bindgen]
pub fn knight_attacks(square: u32) -> u64 {
    let mut attacks: u64 = 0;
    let rank = (square / 8) as i32;
    let file = (square % 8) as i32;
    
    let offsets: [(i32, i32); 8] = [
        (-2, -1), (-2, 1), (-1, -2), (-1, 2),
        (1, -2), (1, 2), (2, -1), (2, 1)
    ];
    
    for (dr, df) in offsets.iter() {
        let new_rank = rank + dr;
        let new_file = file + df;
        
        if new_rank >= 0 && new_rank < 8 && new_file >= 0 && new_file < 8 {
            let target = (new_rank * 8 + new_file) as u32;
            attacks |= 1u64 << target;
        }
    }
    
    attacks
}

/// Generate king attacks
#[wasm_bindgen]
pub fn king_attacks(square: u32) -> u64 {
    let mut attacks: u64 = 0;
    let rank = (square / 8) as i32;
    let file = (square % 8) as i32;
    
    for dr in -1..=1 {
        for df in -1..=1 {
            if dr == 0 && df == 0 {
                continue;
            }
            
            let new_rank = rank + dr;
            let new_file = file + df;
            
            if new_rank >= 0 && new_rank < 8 && new_file >= 0 && new_file < 8 {
                let target = (new_rank * 8 + new_file) as u32;
                attacks |= 1u64 << target;
            }
        }
    }
    
    attacks
}

/// Generate white pawn attacks
#[wasm_bindgen]
pub fn white_pawn_attacks(square: u32) -> u64 {
    let mut attacks: u64 = 0;
    let rank = square / 8;
    let file = square % 8;
    
    if rank < 7 {
        if file > 0 {
            attacks |= 1u64 << ((rank + 1) * 8 + file - 1);
        }
        if file < 7 {
            attacks |= 1u64 << ((rank + 1) * 8 + file + 1);
        }
    }
    
    attacks
}

/// Generate black pawn attacks
#[wasm_bindgen]
pub fn black_pawn_attacks(square: u32) -> u64 {
    let mut attacks: u64 = 0;
    let rank = square / 8;
    let file = square % 8;
    
    if rank > 0 {
        if file > 0 {
            attacks |= 1u64 << ((rank - 1) * 8 + file - 1);
        }
        if file < 7 {
            attacks |= 1u64 << ((rank - 1) * 8 + file + 1);
        }
    }
    
    attacks
}

/// Generate sliding piece attacks
#[wasm_bindgen]
pub fn sliding_attacks(square: u32, occupancy: u64, piece_type: u8) -> u64 {
    match piece_type {
        4 => rook_attacks(square, occupancy),
        3 => bishop_attacks(square, occupancy),
        5 => rook_attacks(square, occupancy) | bishop_attacks(square, occupancy),
        _ => 0,
    }
}

/// Chess bitboard engine
#[wasm_bindgen]
pub struct ChessBitboardEngine {
    // Placeholder for future magic bitboard tables
}

#[wasm_bindgen]
impl ChessBitboardEngine {
    #[wasm_bindgen(constructor)]
    pub fn new() -> ChessBitboardEngine {
        ChessBitboardEngine {}
    }
    
    /// Generate all attacks for a piece
    pub fn generate_attacks(&self, square: u32, occupancy: u64, piece_type: u8, color: u8) -> u64 {
        match piece_type {
            1 => {
                if color == WHITE {
                    white_pawn_attacks(square)
                } else {
                    black_pawn_attacks(square)
                }
            }
            2 => knight_attacks(square),
            3 => bishop_attacks(square, occupancy),
            4 => rook_attacks(square, occupancy),
            5 => rook_attacks(square, occupancy) | bishop_attacks(square, occupancy),
            6 => king_attacks(square),
            _ => 0,
        }
    }
    
    /// Test basic operations
    pub fn test_basic_operations(&self) -> bool {
        if popcount64(0b1111u64) != 4 { return false; }
        if lsb64(0b1000u64) != 3 { return false; }
        if msb64(0b1000u64) != 3 { return false; }
        if knight_attacks(28) == 0 { return false; }
        true
    }
}

/// Convert square index to algebraic notation
#[wasm_bindgen]
pub fn square_to_algebraic(square: u32) -> String {
    let files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let file = square % 8;
    let rank = square / 8 + 1;
    format!("{}{}", files[file as usize], rank)
}

/// Convert algebraic notation to square index
#[wasm_bindgen]
pub fn algebraic_to_square(algebraic: &str) -> Result<u32, JsValue> {
    if algebraic.len() != 2 {
        return Err(JsValue::from_str("Invalid algebraic notation"));
    }
    
    let file_char = algebraic.chars().nth(0).unwrap();
    let rank_char = algebraic.chars().nth(1).unwrap();
    
    let file = match file_char {
        'a'..='h' => file_char as u32 - 'a' as u32,
        _ => return Err(JsValue::from_str("Invalid file")),
    };
    
    let rank = match rank_char {
        '1'..='8' => rank_char as u32 - '1' as u32,
        _ => return Err(JsValue::from_str("Invalid rank")),
    };
    
    Ok(rank * 8 + file)
}

#[wasm_bindgen(start)]
pub fn main() {
    // WASM module initialized
}
