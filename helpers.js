// helpers.js
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = Math.round((fTemp - 32) * 5 / 9);
    var message = fToCel + '\xB0C.';
    return message;
}

module.exports = {
    fToC,
};
