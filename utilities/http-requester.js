/*globals*/
'use strict';
const httpRequester = require('request');
const crypt = require('windows-1251');
module.exports = {
    get(url) {
        return new Promise((resolve, reject) => {
            httpRequester({
                uri: url,
                encoding: 'binary',
                method: 'GET'
            }, (err, response, body) => {
                let decoded = crypt.decode(response.body);
                resolve(decoded);
            });
        });
    }
};