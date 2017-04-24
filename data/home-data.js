"use strict";

module.exports = (models) => {
    const {User} = models;
    const {Course} = models;

    return {
        getHome(){
            return new Promise((resolve, reject) => {
                return resolve('Hello');
            })
        }
    }
};