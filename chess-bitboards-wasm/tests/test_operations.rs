use chess_bitboards_wasm::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_popcount() {
        assert_eq!(popcount64(0), 0);
        assert_eq!(popcount64(0xFF), 8);
        assert_eq!(popcount64(0xFFFF), 16);
        assert_eq!(popcount64(0xFFFFFFFFFFFFFFFF), 64);
        assert_eq!(popcount64(0b1010101010101010), 8);
    }

    #[test]
    fn test_lsb() {
        assert_eq!(lsb64(0), 64);
        assert_eq!(lsb64(1), 0);
        assert_eq!(lsb64(0b1000), 3);
        assert_eq!(lsb64(0b10000), 4);
        assert_eq!(lsb64(0xFF00), 8);
    }

    #[test]
    fn test_msb() {
        assert_eq!(msb64(0), 64);
        assert_eq!(msb64(1), 0);
        assert_eq!(msb64(0b1000), 3);
        assert_eq!(msb64(0x8000000000000000), 63);
        assert_eq!(msb64(0xFF), 7);
    }

    #[test]
    fn test_knight_attacks_center() {
        // Knight on e4 (square 28)
        let attacks = knight_attacks(28);
        assert_eq!(popcount64(attacks), 8);
        
        // Check specific squares: d2, f2, c3, g3, c5, g5, d6, f6
        let expected_squares = [11, 13, 18, 22, 34, 38, 43, 45];
        for sq in expected_squares.iter() {
            assert_ne!(attacks & (1u64 << sq), 0, "Square {} should be attacked", sq);
        }
    }

    #[test]
    fn test_knight_attacks_corner() {
        // Knight on a1 (square 0)
        let attacks = knight_attacks(0);
        assert_eq!(popcount64(attacks), 2);
        
        // Knight on h8 (square 63)
        let attacks = knight_attacks(63);
        assert_eq!(popcount64(attacks), 2);
    }

    #[test]
    fn test_king_attacks_center() {
        // King on e4 (square 28)
        let attacks = king_attacks(28);
        assert_eq!(popcount64(attacks), 8);
    }

    #[test]
    fn test_king_attacks_corner() {
        // King on a1 (square 0)
        let attacks = king_attacks(0);
        assert_eq!(popcount64(attacks), 3);
        
        // King on h8 (square 63)
        let attacks = king_attacks(63);
        assert_eq!(popcount64(attacks), 3);
    }

    #[test]
    fn test_white_pawn_attacks() {
        // White pawn on e4 (square 28)
        let attacks = white_pawn_attacks(28);
        assert_eq!(popcount64(attacks), 2);
        
        // d5 and f5
        assert_ne!(attacks & (1u64 << 35), 0);
        assert_ne!(attacks & (1u64 << 37), 0);
    }

    #[test]
    fn test_black_pawn_attacks() {
        // Black pawn on e5 (square 36)
        let attacks = black_pawn_attacks(36);
        assert_eq!(popcount64(attacks), 2);
        
        // d4 and f4
        assert_ne!(attacks & (1u64 << 27), 0);
        assert_ne!(attacks & (1u64 << 29), 0);
    }

    #[test]
    fn test_rook_attacks_empty_board() {
        // Rook on e4 (square 28) with empty board
        let attacks = rook_attacks(28, 0);
        assert_eq!(popcount64(attacks), 14); // 7 horizontal + 7 vertical
    }

    #[test]
    fn test_rook_attacks_with_blockers() {
        // Rook on e4 (square 28)
        // Blocker on e6 (square 44)
        let occupancy = 1u64 << 44;
        let attacks = rook_attacks(28, occupancy);
        
        // Should attack e6 but not e7, e8
        assert_ne!(attacks & (1u64 << 44), 0);
        assert_eq!(attacks & (1u64 << 52), 0);
        assert_eq!(attacks & (1u64 << 60), 0);
    }

    #[test]
    fn test_bishop_attacks_empty_board() {
        // Bishop on e4 (square 28) with empty board
        let attacks = bishop_attacks(28, 0);
        assert_eq!(popcount64(attacks), 13);
    }

    #[test]
    fn test_bishop_attacks_with_blockers() {
        // Bishop on e4 (square 28)
        // Blocker on g6 (square 46)
        let occupancy = 1u64 << 46;
        let attacks = bishop_attacks(28, occupancy);
        
        // Should attack g6 but not h7
        assert_ne!(attacks & (1u64 << 46), 0);
        assert_eq!(attacks & (1u64 << 55), 0);
    }

    #[test]
    fn test_sliding_attacks_queen() {
        // Queen combines rook and bishop
        let rook = rook_attacks(28, 0);
        let bishop = bishop_attacks(28, 0);
        let queen = sliding_attacks(28, 0, 5);
        
        assert_eq!(queen, rook | bishop);
    }

    #[test]
    fn test_square_to_algebraic() {
        assert_eq!(square_to_algebraic(0), "a1");
        assert_eq!(square_to_algebraic(7), "h1");
        assert_eq!(square_to_algebraic(28), "e4");
        assert_eq!(square_to_algebraic(56), "a8");
        assert_eq!(square_to_algebraic(63), "h8");
    }

    #[test]
    fn test_algebraic_to_square() {
        assert_eq!(algebraic_to_square("a1").unwrap(), 0);
        assert_eq!(algebraic_to_square("h1").unwrap(), 7);
        assert_eq!(algebraic_to_square("e4").unwrap(), 28);
        assert_eq!(algebraic_to_square("a8").unwrap(), 56);
        assert_eq!(algebraic_to_square("h8").unwrap(), 63);
    }

    #[test]
    #[cfg(target_arch = "wasm32")]
    fn test_algebraic_to_square_invalid() {
        assert!(algebraic_to_square("").is_err());
        assert!(algebraic_to_square("a").is_err());
        assert!(algebraic_to_square("a9").is_err());
        assert!(algebraic_to_square("i1").is_err());
    }

    #[test]
    fn test_engine_basic_operations() {
        let engine = ChessBitboardEngine::new();
        assert!(engine.test_basic_operations());
    }

    #[test]
    fn test_engine_generate_attacks() {
        let engine = ChessBitboardEngine::new();
        
        // White knight on e4
        let knight = engine.generate_attacks(28, 0, 2, 0);
        assert_eq!(popcount64(knight), 8);
        
        // White rook on e4
        let rook = engine.generate_attacks(28, 0, 4, 0);
        assert_eq!(popcount64(rook), 14);
        
        // White bishop on e4
        let bishop = engine.generate_attacks(28, 0, 3, 0);
        assert_eq!(popcount64(bishop), 13);
        
        // White queen on e4
        let queen = engine.generate_attacks(28, 0, 5, 0);
        assert_eq!(queen, rook | bishop);
    }

    #[test]
    fn test_engine_pawn_attacks() {
        let engine = ChessBitboardEngine::new();
        
        // White pawn on e4
        let white_pawn = engine.generate_attacks(28, 0, 1, 0);
        assert_eq!(popcount64(white_pawn), 2);
        
        // Black pawn on e5
        let black_pawn = engine.generate_attacks(36, 0, 1, 1);
        assert_eq!(popcount64(black_pawn), 2);
    }
}
