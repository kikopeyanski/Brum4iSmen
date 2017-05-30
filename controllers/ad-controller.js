/*globals*/
'use strict';
const dataExtractor = require('../utilities/data-extractor');
const requester = require('../utilities/http-requester');
const constants = require('../utilities/constants');

module.exports = ({data}) => {
    return {
        startSearch(req, res){
            //TODO: change page counting to higher number
            for (let i = 0; i <= 0; i += 1) {
                requester.get(constants.pagesIndexUrl + i)
                    .then(page => {
                        return dataExtractor.extractAdLinksFromPage(page);
                    })
                    .then(links => {
                            // links.forEach((link) => {
                            let httpLink = dataExtractor.parseLinkToHttp(links[0]);
                            requester.get(httpLink)
                                .then(page => {
                                    console.log(httpLink);
                                    return dataExtractor.extractAdFromPage(page);
                                })
                                .then(ad => {
                                    // data.saveAd(ad);
                                })
                                .catch(err => {
                                    console.log(err);
                                    // })
                                })
                        }
                    )

                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
}
;