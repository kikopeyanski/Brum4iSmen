'use strict';

module.exports = ({data}) => {
    return {
        getHome(req, res){
            data.getHome()
                .then((response) => {
                    res.render('index', response);
                })
        }
    }
};