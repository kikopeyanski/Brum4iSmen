/*globals*/
'use strict';
const constants = require('../utilities/constants');
const requester = require('../utilities/http-requester');

module.exports = (models) => {
    const {Ad} = models;
    let counter = 0;
    return {
        startSearch(){
            console.log('42');
            setInterval(function () {
                requester.get(constants.secretSiteUrl)
                    .then(response => {
                        counter++;
                        console.log(counter + ' ' + response.body[1]);
                    })
                    .catch(function () {
                        console.log('end' + counter);
                    })
            }, 10);
        }
        // startSearch(){
        //     return new Promise((resolve, reject) => {
        //         requester.get(constants.secretSiteUrl)
        //             .then((response) => {
        //                 return resolve(response.body);
        //             })
        //     })
        // }
    }
};