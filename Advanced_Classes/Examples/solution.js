const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);

// dont really need the file content, just the size since we know
// that the files have been doubled by exactly 2

files.forEach(file => {
    const filePath = path.join(dirname, file);
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;

        fs.truncate(filePath, stats.size / 2, (err) => {
            if (err) throw err;
            console.log('The file has been truncated!');
        });
    });
})