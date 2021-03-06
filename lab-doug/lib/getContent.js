'use strict';

module.exports = function(req){
  return new Promise(function(resolve, reject){
    req.body = '';
    req.on('data', function(chunk){
      req.body += chunk.toString();
    });
    req.on('end', function(){
      try {
        //complete req.body JSON object
        req.body = JSON.parse(req.body);
        resolve();
      } catch(err){
        console.log('test');
        reject(err);
      }
    });
  });
};
