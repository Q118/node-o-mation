const app = express();
const port = process.env.npm_package_config_port || 4005;
let runningMessage = 'Server is running ' + port;

app.get('/', (req, res) => {
    console.log('API successfully requested')
    res.send(runningMessage + 'hello!');
});

const server = app.listen(port, () => {
    console.log(runningMessage);
});

module.exports = server;
