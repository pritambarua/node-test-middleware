var express = require('express');
var http = require('http');
var url = require('url');
var app = express();

module.exports = (req, res, next) => {
    var queryData = req.query;
    req.context = Object.assign({}, queryData);
    let ref = req.context;
    if(!ref.page){
        ref.page = 1;
    }else{
        ref.page = Number(ref.page);
    }

    if(!ref.limit){
        ref.limit = 3;
    }else{
        ref.limit = Number(ref.limit);
    }

    
    ref.skip = Number((ref.page - 1) * ref.limit);

    ref.searchTerm = ref.q || "";
    ref.search = new RegExp(`.*${ref.searchTerm}.*`,"gi");
    next();
};
