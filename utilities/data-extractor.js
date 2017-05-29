/*globals*/
'use strict';

let cheerio = require('cheerio');
let $ = null;


let dataExtractor = (() => {
    return {
        extractAdLinksFromPage(page)
        {
            return new Promise((resolve, reject) => {
                $ = cheerio.load(page);

                let links = [];
                let query = $('a.mmm');

                query.each(function () {
                    links.push(this.attribs.href.slice(2));
                });

                // console.log(links);

                $.html();

                if (!links) {
                    reject("Empty page!")
                }

                resolve(links);
            });
        },
        extractAdFromAdPage (links) {
            return new Promise((resolve, reject) => {
                if (!links) {
                    reject("Empty list of links!")
                }

                links.forEach(function (link) {
                    console.log(link);
                })

            })
        }
    }
})();
module.exports = dataExtractor;
