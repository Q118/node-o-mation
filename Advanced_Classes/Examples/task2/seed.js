// seed script to create a testing files to work with


const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

// create directory
fs.mkdirSync(dirname);

const ms1Day = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
    // we want every file to have a diffferent timestamp
    // starting with the current and going back one at a time
    const filePath = path.join(dirname, `file${i}`);

    // convert the i into a string from a number (so can ue it inside the writeFIle())
    const iString = i.toString();



    fs.writeFile(filePath, iString, (err) => {
        if (err) throw err;
        const time = (Date.now() - i * ms1Day) / 1000;

        // utimes changes the time stamp of the file
        fs.utimes(filePath, time, time, (err) => {
            if (err) throw err;
        });
    });

}
