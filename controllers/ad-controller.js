/*globals*/
'use strict';
let dataExtractor = require('../utilities/data-extractor');

module.exports = ({data}) => {
    return {
        startSearch(req, res){
            for (let i = 0; i <= 0; i += 1) {
                data.getPage(i)
                    .then((response) => {
                        return dataExtractor.extractAdLinksFromPage(response);
                    })
                    // .then((response) => {
                    //     res.render('search', {content: response})
                    // })
            }

        }
    }
};