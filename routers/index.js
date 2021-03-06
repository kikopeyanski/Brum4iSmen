/*globals */
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function ({ app, controllers}) {
    fs.readdirSync(__dirname)
        .filter(x => x.includes('-router'))
        .forEach(file => {
            require(path.join(__dirname, file))({ app, controllers});
        });
};