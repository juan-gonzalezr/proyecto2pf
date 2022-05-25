const app = require('./app');

require("./database.js");


async function main(params) {
    await app.listen(app.get('port'))
    console.log("Servidor en el puerto ",app.get('port'))
}

main();