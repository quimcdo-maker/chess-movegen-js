# 🚀 Quick Start - Chess Bitboards WASM

## ⚡ Inicio Rápido

### 1. Instalar Rust (5 minutos)
```bash
# Windows/Mac/Linux
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Verificar instalación
rustc --version
cargo --version
```

### 2. Instalar wasm-pack
```bash
cargo install wasm-pack
```

### 3. Compilar (2 minutos)
```bash
cd chess-bitboards-wasm
bash build.sh
```

### 4. Probar Demo
```bash
# En el directorio chess-bitboards-wasm
python -m http.server 8080

# Abrir: http://localhost:8080/demo.html
```

### 5. Integrar en tu Proyecto JavaScript
```javascript
// ES6 Module
import init, { ChessBitboardEngine } from './pkg/web/chess_bitboards_wasm.js';

async function main() {
    await init(); // Inicializar WASM
    
    const engine = new ChessBitboardEngine();
    
    // Usar las funciones optimizadas
    const attacks = engine.knight_attacks(28); // e4
    const popcount = engine.popcount64(0x123456789ABCDEFn);
    
    console.log('Attacks:', attacks.toString(2));
    console.log('Popcount:', popcount);
}

main();
```

## 📊 Mejoras de Rendimiento Esperadas

| Operación | JavaScript Actual | WASM Estimado | Mejora |
|-----------|------------------|---------------|---------|
| Popcount64 | ~5M ops/sec | ~50M ops/sec | **10x** |
| Knight Attacks | ~5M ops/sec | ~60M ops/sec | **12x** |
| Sliding Attacks | ~5M ops/sec | ~40M ops/sec | **8x** |
| Perft (4) | ~2s | ~0.3s | **6x** |

## 🔧 Funciones Principales Disponibles

```rust
// Operaciones básicas
pub fn popcount64(x: u64) -> u32
pub fn lsb64(x: u64) -> u32
pub fn msb64(x: u64) -> u32

// Generación de ataques
pub fn knight_attacks(square: u32) -> u64
pub fn king_attacks(square: u32) -> u64
pub fn sliding_attacks(square: u32, occupancy: u64, piece_type: u8) -> u64
pub fn white_pawn_attacks(square: u32) -> u64
pub fn black_pawn_attacks(square: u32) -> u64

// Motor completo
pub struct ChessBitboardEngine {
    pub fn new() -> ChessBitboardEngine
    pub fn test_basic_operations() -> bool
}
```

## 🎯 Próximos Pasos

1. **Instalar Rust** siguiendo `RUST_SETUP.md`
2. **Compilar** con `bash build.sh`
3. **Probar** el demo en navegador
4. **Integrar** con tu generador existente
5. **Benchmark** para validar mejoras
6. **Publicar** versión WASM en npm

## 🐛 Solución de Problemas

### Error: "rustup not found"
```bash
# Añadir al PATH
export PATH="$HOME/.cargo/bin:$PATH"
```

### Error: "wasm-pack not found"
```bash
cargo install wasm-pack
```

### Error: "Failed to load WASM"
- Verificar que `pkg/web/chess_bitboards_wasm.wasm` existe
- Servir desde HTTP (no file://)
- Usar servidor local: `python -m http.server 8080`

## 📝 Notas Importantes

- **Multiplataforma**: Mismo código funciona en navegadores y Node.js
- **Fallback**: Si WASM falla, usar implementación JavaScript existente
- **Sin cambios**: Tu API actual permanece igual
- **Opcional**: Puedes publicar como paquete npm separado o integrado

¡Tu generador de ajedrez va a ser **mucho más rápido**! 🎉