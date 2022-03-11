// this script:
// watch a directory and report 3 events:
// file was added, removed, changed
// this script should output a timestamped message about that event
// for our example, we will watch the emptyFiles directory which contains 3 empty files

// to see it in action: run the script and then change a file in the folder, or add and delete one and see the output in console.

const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'emptyFiles');
const currentFiles = fs.readdirSync(dirname);

console.log('Watching directory:', dirname);

const logWithTime = (message) => {
    console.log(`${new Date().toUTCString()}: ${message}`);
}

fs.watch(dirname, (eventType, filename) => {
    if (eventType === 'rename') {
        // rename meaning added or deleted
        const index = currentFiles.indexOf(filename);
        if (index >= 0) {
            // ^this conditional is saying if the file exists in the current array then the event was a remove event
            currentFiles.splice(index, 1); // remove it from array
            logWithTime(`${filename} was removed`);
            return;
        }
        currentFiles.push(filename);  // if we get to this point in the code, it means a file is being added(since its not in the currentFiles array)
        logWithTime(`${filename} was added`);
        return;
    }
    // the other event type supported in the listener is change
    // meaning the file was modified
    logWithTime(`${filename} was changed`); // idk why this displays twice
    return; 
});
