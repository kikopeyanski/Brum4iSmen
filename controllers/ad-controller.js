/*globals*/
'use strict';
const dataExtractor = require('../utilities/data-extractor');
const requester = require('../utilities/http-requester');
const constants = require('../utilities/constants');

module.exports = ({data}) => {
    return {
        startSearch(req, res){

            let i = 1;
            setInterval(function () {
                if (i > 5) {
                    clearInterval(this);
                }
                requester.getJSON(constants.sitePagesLink + i)
                    .then(data => {
                        console.log('requesting ' + i + '\n');
                        return dataExtractor.extractAdLinksFromPage(data);
                    })
                    .then(links => {
                        links.forEach((link) => {
                                requester.getJSON(constants.adPageLink + link)
                                    .then(data => {
                                        return dataExtractor.extractAdFromPage(data);
                                    })
                                    .then(ad => {
                                        return data.saveAd(ad);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }
                        )
                            .catch(err => {
                                console.log(err);
                            })
                    });
                i++
            }, 1000);
        }
    }
};