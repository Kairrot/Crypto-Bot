const app = require('./web/app');
const secureEnv = require('secure-env');

global.env = secureEnv({secret: 'mdp'})

require('./core');

app.listen(8080, () => console.log("Server started"))