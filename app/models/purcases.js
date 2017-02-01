"use strict";

const db = require('memcached')
    // Q = require("q"),
    // databaseFileName = `${__dirname}/../databases/users.json`;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let memcached = new db;

module.exports = {
    getById: (id) => {
        return new Promise((resolve,reject)=>{
            memcached.get(id,(err,res)=>{
                if(err) reject(err);
                resolve(res);
            })

        })
    },
    add: (id,params) => {
        return new Promise((resolve,reject)=> {
            memcached.set(id, params.count, 100, (err)=> {
                if (err) reject(err);
                resolve(params);
            })
        })
    },

    remove: (id) => {
        return new Promise((resolve,reject)=>{
            memcached.del(id, (err,res)=>{
                if(err) reject(err);
                resolve('Ok');
            })
        })
    }
};