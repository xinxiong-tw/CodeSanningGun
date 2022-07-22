const QrCode = require('qrcode-reader');
const jimp = require('jimp');
const fs = require("fs/promises");
async function readQrCode(buffer) {
    console.log(buffer);
    return new Promise(async (resolve, reject) => {
        jimp.read(buffer).then((image) => {
            const qr = new QrCode();
            qr.callback = function(err, value) {
                const data = value?.result;
                if (err || !data) {
                    return reject(err);
                }
                if (data.startsWith('DQR')) {
                    return resolve(data);
                }
                reject(null);
            };
            qr.decode(image.bitmap);
        });
    })
}

module.exports = readQrCode;
// (async () => {
//     await readQrCode();
// })();