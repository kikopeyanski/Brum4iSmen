'use strict';

module.exports = function ({data}) {
    return {
        getHome(req, res){
            data.getHome()
                .then(response => {
                    console.log('here');
                    res.render('index', {name: 'hello'});
                })
        }
    }
};