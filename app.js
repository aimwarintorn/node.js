const express = require('express');
const app = express();
const port = 3000;
const debug = require('debug')('app');
import('chalk').then(module => {
    const chalk = module.default;

    app.get("/", (req, res) => {


        res.send('Hello AIm');
    })

    app.listen(port, () => {

        debug("Listening on port ：" + chalk.red(port));
    })
})