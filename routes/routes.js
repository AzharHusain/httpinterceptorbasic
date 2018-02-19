var express = require('express');
var router = express.Router();

//Middleware 
router.use(function(req,res,next){

    if(req.header('Authorization') == 'abc')
    { 
        next();
    }
    else{
        return res.status(501).json({message:'Auth Failed!'});
    }
});

router.get('/first', function(req,res,next){

    return res.status(201).json({
        name : ['John', 'Nick', 'Danny']
    });
});

router.get('/second', function(req,res,next){
    return res.status(201).json({
        name : ['Michael', 'Robert', 'Chris']
    });
});

router.get('/third', function(req,res,next){
    return res.status(201).json({
        name : ['Sean', 'Nathan', 'Aby']
    });
});

module.exports = router;