'use strict';

const router = require('express').Router();

module.exports = function ({app, controllers}) {
    const home = controllers.home;
    const ad = controllers.ad;
    router
        .get('/', home.getHome)
        .get('/start',ad.startSearch);
    app.use(router);
};