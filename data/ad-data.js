/*globals*/
'use strict';
const constants = require('../utilities/constants');
const requester = require('../utilities/http-requester');

module.exports = (models) => {
    const {Ad} = models;
    let counter = 0;
    return {
        startSearch(){
            return new Promise((resolve, reject) => {
                requester.get(constants.secretSiteUrl)
                    .then((response) => {
                        counter++;
                        return resolve(response.body);
                    })
            })
        }
    }
};