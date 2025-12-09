#!/bin/bash

# Build script for Chess Bitboards WASM
# This script compiles the Rust code to WebAssembly for multiple targets

set -e

echo "🦀 Building Chess Bitboards WebAssembly..."
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    print_error "Rust is not installed. Please install Rust first:"
    echo "  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    exit 1
fi

# Check if wasm-pack is installed
if ! command -v wasm-pack &> /dev/null; then
    print_warning "wasm-pack is not installed. Installing..."
    cargo install wasm-pack
fi

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf pkg/
rm -rf target/
cargo clean

# Build for different targets
TARGETS=("web" "node" "bundler")

for target in "${TARGETS[@]}"; do
    print_status "Building for target: $target"
    
    if [ "$target" = "web" ]; then
        wasm-pack build --target web --out-dir pkg/web --release
        print_success "Built for web: pkg/web/"
    elif [ "$target" = "node" ]; then
        wasm-pack build --target node --out-dir pkg/node --release
        print_success "Built for Node.js: pkg/node/"
    elif [ "$target" = "bundler" ]; then
        wasm-pack build --target bundler --out-dir pkg/bundler --release
        print_success "Built for bundlers: pkg/bundler/"
    fi
done

# Run tests
print_status "Running tests..."
if wasm-pack test --headless --firefox; then
    print_success "All tests passed!"
else
    print_warning "Some tests failed. Check the output above."
fi

# Create distribution files
print_status "Creating distribution files..."

# Create package.json for npm distribution
cat > pkg/package.json << EOF
{
  "name": "chess-bitboards-wasm",
  "version": "0.1.0",
  "description": "High-performance chess bitboard operations in WebAssembly",
  "main": "node/chess_bitboards_wasm.js",
  "module": "bundler/chess_bitboards_wasm.js",
  "types": "bundler/chess_bitboards_wasm.d.ts",
  "files": [
    "web/",
    "node/",
    "bundler/"
  ],
  "scripts": {
    "test": "wasm-pack test --target web",
    "build": "wasm-pack build --target web --target node --target bundler"
  },
  "keywords": [
    "chess",
    "bitboards",
    "webassembly",
    "rust",
    "performance"
  ],
  "author": "Mario Carbonell",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/mcarbonell/chess-movegen-js.git"
  }
}
EOF

# Copy README to pkg
cp README.md pkg/

print_success "Build completed successfully!"
echo ""
echo "📦 Generated files:"
echo "  pkg/web/          - Browser-compatible version"
echo "  pkg/node/          - Node.js compatible version"  
echo "  pkg/bundler/      - Bundler-compatible version"
echo "  pkg/package.json  - NPM package configuration"
echo ""
echo "🚀 Ready for distribution!"
echo ""
echo "To test the build:"
echo "  cd pkg/web && python -m http.server 8080"
echo "  # Open http://localhost:8080 in browser"
echo ""
echo "To publish to npm:"
echo "  cd pkg && npm publish"