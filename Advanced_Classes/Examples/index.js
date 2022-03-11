const dns = require('dns');
// put argument into a variable
const domain = process.argv[2];
dns.lookup(domain || 'localhost', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
});