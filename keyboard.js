const sendKeys = require('sendkeys-macos');

module.exports = (text) => {
    sendKeys(null, text, {delay: 0, initialDelay: 0})
}