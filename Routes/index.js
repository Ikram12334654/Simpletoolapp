const express=require('express');
const routes= express.Router();


routes.get('/', function(req, res) {
    res.redirect('http://localhost:3000/');
 });

 routes.get('/privacy', function(req, res) {
   res.redirect('http://localhost:3000/Privacypolicies.html');
});

 module.exports=routes;