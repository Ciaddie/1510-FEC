var controller = require('./controllers');
var router = require('express').Router();

// Enable Routing
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

//Connect controller methods to their corresponding routes
router.get('/overview', controller.overview.get);
// router.post('/overview', controller.overview.post);
// router.put('/overview', controller.overview.put);
// router.delete('/overview', controller.overview.delete);


router.get('/questions', controller.questions.get);
// router.post('/questions', controller.questions.post);
// router.put('/questions', controller.questions.put);
// router.delete('/questions', controller.questions.delete);


router.get('/ratings/product', controller.ratings.getProducts);
router.get('/ratings/reviews', controller.ratings.getReviews);
// router.post('/ratings', controller.ratings.post);
// router.put('/ratings', controller.ratings.put);
// router.delete('/ratings', controller.ratings.delete);


router.get('/related', controller.related.get);
// router.post('/related', controller.related.post);
// router.put('/related', controller.related.put);
// router.delete('/related', controller.related.delete);

router.post('/interactions', controller.interactions.post);

module.exports = router;
