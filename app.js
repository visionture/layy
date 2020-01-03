var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var downRouter = require('./routes/down');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/down',downRouter);
app.post('/build_v4/saveLayout',function(req,res,next){
   
       
   res.end(JSON.stringify({error:false,layout:JSON.stringify(req.body)}))
})
app.get('/build_v4/downloadAjax',function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile((path.join(__dirname),'modal.html'),'utf-8',(err,data)=>{
        if(err){  
            throw err ;  
        } 
        res.end(data)
    })
})

app.post('/build_v4/downloadLayout',function(req,res,next){
    
    const content = JSON.parse(JSON.stringify(req.body))['layout-v4'];
    const resContent = {};
    fs.readFile('template.html','utf-8',function(err,data){
        if(err) throw err;
        const tmp = data.replace('template',content);
        fs.writeFile('./template/index.html',tmp,"utf-8",function(){
            console.log('hahah');
        })

    });
    res.send({errors:false})

    

})


module.exports = app;


