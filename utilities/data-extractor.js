/*globals*/
'use strict';

let cheerio = require('cheerio');
let $ = null;


module.exports = {
    extractAdLinksFromPage(content){
        return new Promise((resolve, reject) => {
            $ = cheerio.load(content);

            let links = $('a.mmm');

            links.each(function () {
                console.log(this.attribs.href);
            });

            //Close the window
            $.html();


            //TODO: change
            resolve(content);

        });
    }
};
