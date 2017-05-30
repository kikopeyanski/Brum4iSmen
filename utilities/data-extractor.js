/*globals*/
'use strict';

const requester = require('../utilities/http-requester');
const cheerio = require('cheerio');
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

                $.html();

                if (!links) {
                    reject("Empty page!")
                }

                resolve(links);
            });
        },
        extractAdFromPage (page) {
            return new Promise((resolve, reject) => {
                if (!page) {
                    reject("Empty page!")
                }
                $ = cheerio.load(page);
                let ad = {};

                // height:54px; display:inline-block;
                let form = $('form[name=search]');
                let table = form.find('table').first();
                let title = table.find('span div').first().css('height', '54px').css('display', 'inline-block');
                ad.title = title.text();



                console.log(ad);

            })
        },
        parseLinkToHttp(link){
            let http = 'http://';
            return http + link.slice(4);
        }
    }
})();
module.exports = dataExtractor;
