/*globals*/
'use strict';

const requester = require('../utilities/http-requester');
const cheerio = require('cheerio');
const moment = require('moment');
let $ = null;


let dataExtractor = (() => {
    return {
        extractAdLinksFromPage(data)
        {
            return new Promise((resolve, reject) => {
                let links = [];

                data.adverts.forEach(function (ad) {
                    if (ad.ida) {
                        links.push(ad.ida);
                    }
                });

                resolve(links);
            });
        },
        extractAdFromPage (data) {
            return new Promise((resolve, reject) => {
                if (!data) {
                    reject("Empty page!")
                }

                let date = data.pubtime;
                let publishDate = moment(`${date.pub_day}-${date.pub_month}-${date.pub_year}`
                    , "DD-MM-YYYY");

                let ad = {};
                ad.id = data.ida;
                ad.brand = data.marka;
                ad.info = data.finfo;
                ad.model = data.model;
                ad.extras = data.extri;
                ad.dealer = data.houseinfo;
                ad.msg = data.extinfo;
                ad.pictures = {
                    path: data.pictspath,
                    pic: data.picts
                };
                ad.phone = data.phone;
                ad.price = data.price;
                ad.title = data.title;


                resolve(ad);

            })
        },
        parseLinkToHttp(link){
            let http = 'http://';
            return http + link.slice(4);
        }
    }
})();
module.exports = dataExtractor;
