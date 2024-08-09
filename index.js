const http= require("http");

const server=http.createServer((req,res)=>{
    const url=req.url;
    if (url==='/home'){
        res.write('<html')
        res.write('<head><title>Home</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if (url==='/about'){
        res.write('<html')
        res.write('<head><title>Home</title></head>')
        res.write('<body><h1>Welcome to about Us page</h1></body>')
        res.write('</html>')
        return res.end()
    }if (url==='/node'){
        res.write('<html')
        res.write('<head><title>Home</title></head>')
        res.write('<body><h1>Welcome to my NodeJs Project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    

    res.setHeader("content-type","text/html")
    res.write('<html>')
    res.write('<head><title>Js Project</title></head>')
    res.write('<body> <h1>Welcome to my First Page</h1>   </body>')
    res.write('</html>')
    res.end()


});

server.listen(4000);