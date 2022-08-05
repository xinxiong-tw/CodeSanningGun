const os = process.platform;

let input = () => {
};

if (os === 'darwin') {
    const sendKeys = require('sendkeys-macos');
    input = (text) => {
        sendKeys(null, text, {delay: 0, initialDelay: 0})
    }
} else if (os === "win32") {
    const sendKeys = require('sendkeys');
    input = (text) => {
        sendKeys(text);
    }
}

module.exports = input;