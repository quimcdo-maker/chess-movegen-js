@echo off
echo 🦀 Building Chess Bitboards WebAssembly...
echo ========================================

echo [INFO] Cleaning previous builds...
rmdir /s /q pkg\ 2>nul
rmdir /s /q target\ 2>nul
cargo clean

echo [INFO] Building for target: web
wasm-pack build --target web --out-dir pkg\web --release

echo [INFO] Building for target: node
wasm-pack build --target node --out-dir pkg\node --release

echo [INFO] Building for target: bundler
wasm-pack build --target bundler --out-dir pkg\bundler --release

echo [SUCCESS] Build completed successfully!
echo.
echo 📦 Generated files:
echo   pkg\web\          - Browser-compatible version
echo   pkg\node\          - Node.js compatible version
echo   pkg\bundler\      - Bundler-compatible version
echo   pkg\package.json  - NPM package configuration
echo.
echo 🚀 Ready for distribution!
echo.
echo To test the build:
echo   cd pkg\web && python -m http.server 8080
echo   # Open http://localhost:8080 in browser
echo.
echo To publish to npm:
echo   cd pkg && npm publish

pause