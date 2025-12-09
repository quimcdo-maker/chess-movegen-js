# 🦀 Setup de Rust para WebAssembly

## 📥 Instalación en Windows

### Opción 1: Instalador Oficial (Recomendado)
1. Ve a: https://forge.rust-lang.org/infra/channel-layout.html
2. Descarga `rust-1.XX.X-x86_64-pc-windows-msvc.msi`
3. Ejecuta el instalador y sigue las instrucciones
4. Reinicia tu terminal/VSCode

### Opción 2: rustup (Línea de comandos)
```powershell
# Descarga e instala rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Reinicia tu terminal
# O carga el entorno manualmente:
source $env:USERPROFILE\.cargo\env
```

### Verificar Instalación
```bash
rustc --version    # Debe mostrar rustc 1.70+ 
cargo --version    # Debe mostrar cargo 1.70+
```

## 🛠️ Herramientas Adicionales

### wasm-pack (Esencial para wasm-bindgen)
```bash
# Instala wasm-pack
cargo install wasm-pack

# Verifica instalación
wasm-pack --version
```

### Node.js (si no lo tienes)
- Descarga desde: https://nodejs.org/
- Instala LTS version

### Opcional: wasm32 target
```bash
# Añade target para WebAssembly
rustup target add wasm32-unknown-unknown

# Lista targets instalados
rustup target list --installed
```

## 🚀 Verificación Final

```bash
# Test básico de Rust
cargo new hello-rust --bin
cd hello-rust
cargo run

# Test de WebAssembly
cargo new hello-wasm --lib
cd hello-wasm
echo 'fn main() { println!("Hello from Rust!"); }' > src/lib.rs
cargo build --target wasm32-unknown-unknown
```

## ✅ Checklist de Instalación

- [ ] Rust instalado (rustc 1.70+)
- [ ] Cargo disponible
- [ ] wasm-pack instalado
- [ ] Node.js disponible (para testing)
- [ ] wasm32 target añadido

¡Una vez completados estos pasos, podemos empezar con la implementación!