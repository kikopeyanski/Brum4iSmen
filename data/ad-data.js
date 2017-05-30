/*globals*/
'use strict';
const constants = require('../utilities/constants');
const requester = require('../utilities/http-requester');

module.exports = (models) => {
    const {Ad} = models;

    return {
        getAdPage(link){
            return new Promise((resolve, reject) => {
                return resolve(requester.get(link));
            })
        }
    }
};