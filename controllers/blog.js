const http = require('request');
module.exports.getBlogPage = (req, res, next) => {
  const apiOptions = {
    server: "http://localhost:8888"
  }
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET'
  };
  let sendObj = {
    title: 'My Blog'
  };
  http(requestOptions, function (error, response, body) {
    res.render('pages/blog', Object.assign(sendObj, JSON.parse(body)));
  })
  }

  
  