var fs = require('fs');



 function readWrite(filePath,oldStr,replaeStr){
     fs.readFile(filePath,'utf-8',function(err,data){
        if(err) throw err;
        var tmp = data.replace(oldStr,replaeStr);
        fs.writeFile(filePath,tmp,'utf-8',function(){
            console.log('success')
        })
    });
    
}


module.exports = readWrite;







