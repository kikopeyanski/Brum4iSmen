/*globals*/
'use strict';
const httpRequester = require('request');

module.exports = {
    get(url) {
        return new Promise((resolve, reject) => {
            httpRequester(url, (err, response, body) => {
                if (err) {
                    return reject(err);
                }

                return resolve({response, body});
            });
        });
    }
};