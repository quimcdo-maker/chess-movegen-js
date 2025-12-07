/**
 * Node.js wrapper for x88.js
 * x88.js now has Node.js compatibility, so we can require it directly
 */

const path = require('path');
const x88 = require(path.join(__dirname, '..', 'js', 'x88.js'));

module.exports = {
    Board: x88.Board
};
