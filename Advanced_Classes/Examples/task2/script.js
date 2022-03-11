// script to clean old files in a directory called files
// anything older than 7 days should be deleted

const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);

files.forEach(file => {
    // check the timestamp for each file and if it is older than 7 days, delete it
    const filePath = path.join(dirname, file);
    //! always important to use filePath and not a string so it can be cross platform
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        const timeDiff = Date.now() - stats.mtimeMs;
        if (timeDiff > 7 * 24 * 60 * 60 * 1000) {
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log(`The ${filePath} has been deleted!`);
            });
        }
    });
})