const http= require("http");

const server=http.createServer((req,res)=>{
    console.log("Puran")
});

server.listen(4000);