/*globals*/
'use strict';
const httpRequester = require('request');
const crypt = require('windows-1251');
let counter = 0;
module.exports = {
    get(url) {
        return new Promise((resolve, reject) => {
            httpRequester({
                uri: url,
                encoding: 'binary',
                method: 'GET'
            }, (err, response, body) => {

                let decoded = crypt.decode(body);
                if (err) {
                    reject(response);
                }
                resolve(decoded);
            });
        });
    },
    getJSON(url){
        return new Promise((resolve, reject) => {
            httpRequester({
                uri: url,
                contentType: 'application/json',
                method: 'GET'
            }, (err, response, body) => {
                if (err) {
                    reject(response);
                }

                if (!body && response) {
                    body = response.body;
                }

                resolve(JSON.parse(body));
            })
        })
    }
};