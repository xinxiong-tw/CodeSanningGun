const NodeWebcam = require("node-webcam");


//Default options

let opts = {

    //Picture related

    width: 1280,

    height: 720,

    quality: 1000,

    // Number of frames to capture
    // More the frames, longer it takes to capture
    // Use higher framerate for quality. Ex: 60

    frames: 60,


    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows

    delay: 0,


    //Save shots in memory

    saveShots: true,


    // [jpeg, png] support varies
    // Webcam.OutputTypes

    output: "png",


    //Which camera to use
    //Use Webcam.list() for results
    //false for default device

    device: false,


    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes

    callbackReturn: "buffer",


    //Logging

    verbose: false

};

module.exports = async () => {
    return new Promise((resolve, reject) => {
        NodeWebcam.capture("test", opts, function (err, data) {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}