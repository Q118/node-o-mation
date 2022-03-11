// right now all of the files in this directory are messed with.
// each one has been copied and appeneded to the end of the file. 
// so each file has duplicate f everything

// my task is to write a script that fixes this problem.

const fs = require('fs');
const myFile = process.argv[2];


fs.readFile(myFile, (err, data) => {
    if (err) throw err;
    //parse through the file and find entries
    const entries = data.toString().split('\n');
    // filter out blank lines from entries
    const filteredEntries = entries.filter(entry => entry.length > 1);
    for (let i = 0; i < filteredEntries.length; i++) {
        // if any entry is equal to another entry, remove the second entry
        for (let j = 0; j < filteredEntries.length; j++) {
            if (filteredEntries[i] === filteredEntries[j] && i !== j) {
                filteredEntries.splice(j, 1);
            }
        }
    }
    // console.log(filteredEntries);
    // replace the contents of the file with the filtered entries
    fs.writeFile(myFile, filteredEntries.join('\n'), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

});

// const data = fs.readFileSync(__filename);
// exceptions are immediatly thrown
