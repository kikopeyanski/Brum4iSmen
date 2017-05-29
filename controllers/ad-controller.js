/*globals*/
'use strict';
let dataExtractor = require('../utilities/data-extractor');

module.exports = ({data}) => {
    return {
        startSearch(req, res){
            //TODO: change page counting to higher number
            for (let i = 0; i <= 0; i += 1) {
                data.getPage(i)
                    .then(links => {
                        return dataExtractor.extractAdLinksFromPage(links);
                    })
                    .then(response => {
                        return dataExtractor.extractAdFromAdPage(response);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }

        }
    }
};