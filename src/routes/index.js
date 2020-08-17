const route=require('express').Router();

route.get('/', (req,res,next) => {
    res.render('index.html');
});

module.exports  = route;
