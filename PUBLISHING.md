# Publishing to NPM

## Prerequisites

1. **NPM Account**: Create account at https://www.npmjs.com/signup
2. **Verify Email**: Confirm your email address
3. **Two-Factor Authentication**: Enable 2FA (recommended)

## Steps to Publish

### 1. Login to NPM

```bash
npm login
```

Enter your username, password, and email.

### 2. Verify Package Name Availability

```bash
npm search chess-movegen-js
```

If the name is taken, update `package.json` with a different name (e.g., `@mcarbonell/chess-movegen-js`).

### 3. Test Package Locally

```bash
# Run tests
npm test

# Check what will be published
npm pack --dry-run

# This shows all files that will be included
```

### 4. Publish to NPM

```bash
# First time publish
npm publish

# If using scoped package (@username/package)
npm publish --access public
```

### 5. Verify Publication

Visit: https://www.npmjs.com/package/chess-movegen-js

## Usage After Publishing

Users can install with:

```bash
npm install chess-movegen-js
```

And use it:

```javascript
// CommonJS
const { Board } = require('chess-movegen-js');

// ES6 (if you add module support)
import { Board } from 'chess-movegen-js';

const board = new Board();
board.loadFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
board.generateMoves();
console.log(board.moves.length); // 20
```

## Updating the Package

1. Update version in `package.json`:
   - Patch: `1.0.0` → `1.0.1` (bug fixes)
   - Minor: `1.0.0` → `1.1.0` (new features)
   - Major: `1.0.0` → `2.0.0` (breaking changes)

2. Publish update:
```bash
npm version patch  # or minor, or major
npm publish
```

## Package Size

Package includes:
- `js/x88.js` (~68KB) - x88 board representation (main implementation)
- `js/module.js` (~2KB) - Helper functions
- `README.md` + `README.es.md` - Documentation
- `LICENSE` - MIT License

**Total: ~70KB** (compressed: ~15KB)

### Why Only x88?

- **Performance**: 5.6M NPS in Node.js (faster than bitboards in JS)
- **Size**: 68KB vs 2.8MB (40x smaller)
- **Readability**: Easier to understand and debug
- **Complete**: All features (legal moves, check/mate detection, tactical analysis)

Bitboard implementation remains available on GitHub for educational purposes.

## NPM Badge

After publishing, add to README.md:

```markdown
[![npm version](https://badge.fury.io/js/chess-movegen-js.svg)](https://www.npmjs.com/package/chess-movegen-js)
[![npm downloads](https://img.shields.io/npm/dm/chess-movegen-js.svg)](https://www.npmjs.com/package/chess-movegen-js)
```

## Troubleshooting

**Error: Package name already exists**
- Use scoped package: `@mcarbonell/chess-movegen-js`
- Choose different name

**Error: Need to login**
```bash
npm logout
npm login
```

**Error: 2FA required**
- Enable 2FA in npm settings
- Use OTP when publishing: `npm publish --otp=123456`
