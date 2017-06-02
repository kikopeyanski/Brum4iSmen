/*globals*/
'use strict';
const constants = require('../utilities/constants');
const requester = require('../utilities/http-requester');

module.exports = (models) => {
    const {Ad} = models;

    return {
        saveAd(ad){
            return new Promise((resolve, reject) => {
                const dbEntry = new Ad({
                    id: ad.id,
                    brand: ad.brand,
                    model: ad.model,
                    info: ad.info,
                    extras: ad.extras,
                    dealer: ad.dealer,
                    msg: ad.msg,
                    pictures: ad.pictures,
                    phone: ad.phone,
                    price: ad.price,
                    title: ad.title
                });

                dbEntry.save((err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(dbEntry);
                });
            })
        }
    }
};