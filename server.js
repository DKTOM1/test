/**
 * Created by DK on 16-8-30.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
function Start(){
var server=http.createServer(function(req,res){
var paraValue='.'+url.parse(req.url).pathname;
fs.readFile(paraValue,'binary',function(err,data){
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(data,'binary');
    res.end();
    });
});
    server.listen(3000,'127.0.0.1');
}
exports.Start=Start;

