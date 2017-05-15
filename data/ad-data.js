/*globals*/
'use strict';
const constants = require('../utilities/constants');
const requester = require('../utilities/http-requester');

module.exports = (models) => {
    const {Ad} = models;

    return {
        getPage(index){
            return new Promise((resolve, reject) => {
                return resolve(requester.get(constants.pagesIndexUrl + index));
            })
        }
    }
};