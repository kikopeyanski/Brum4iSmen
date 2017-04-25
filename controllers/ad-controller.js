/*globals*/
'use strict';

module.exports = ({data}) => {
    return {
        startSearch(req, res){
            data.startSearch()
                .then((response) => {
                    res.render('search', {content: response})
                })

        }
    }
};