/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'Trigo' });
  };
  
  module.exports = {
    index
  };