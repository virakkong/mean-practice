var express = require('express');
var router = express.Router();

//retrieve parameter from server
router.get('/:userTitle', function(req, res, next) {
    //render html file from node.hbs
    res.render('node', {title: req.params.userTitle ? req.params.userTitle: ''});
});

router.post('/', function(req,res, next){
    //retrieve title from html
    var title=req.body.title;
    res.redirect('/' + title);
});

module.exports = router;
