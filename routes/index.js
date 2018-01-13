const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/welcome');
const ctrlWorks = require('../controllers/works');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');


/* GET home page. */
router.get('/', ctrlHome.getIndex);

router.get('/my-works', ctrlWorks.getWorksPage);
router.post('/contact', ctrlWorks.getContact);


router.get('/blog', ctrlBlog.getBlogPage);

router.get('/about', ctrlAbout.getAboutPage);


module.exports = router;
