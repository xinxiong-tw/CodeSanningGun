const camera = require('./camera');
const readQrCode = require('./qrcode');
const keyboard = require('./keyboard');

(async () => {
    while (true) {
        const buffer = await camera().catch(error => {
            console.log('camera error', error);
        });
        if (!buffer) {
            console.log('take camera buffer error');
            return;
        }
        const data = await readQrCode(buffer).catch(error => {
            console.log('code not found', error);
        });
        if (data) {
            keyboard(data);
            return;
        }
    }
})();