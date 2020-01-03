var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var AdmZip = require('adm-zip');
var readWrite = require('./test');
router.get('/',function(req,res,next){
    
    var zip = new AdmZip();
    
    zip.addLocalFolder('C:/Users/babaa/Downloads/bootly/template/');
    
    var downloadName = `${Date.now()}.zip`;
    var data = zip.toBuffer();
    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${downloadName}`);
    res.set('Content-Length',data.length);
    res.end(data);

})

router.post('/',function(req,res,next){
    
    
})


function compressLoad(){

return  zip.toBuffer();

}

module.exports = router;