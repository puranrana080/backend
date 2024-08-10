
const fs=require("fs")

const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method


    if (url === '/') {

        fs.readFile("./inbox.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(data)
    
            res.write('<html>')
            res.write('<head><title>My Message</title></head>')
            if (data !== undefined) { res.write(`<body>${data}</body>`) }
    
            res.write('<body><form action="/message" method="Post"><input type="text" name="mymsg"><button type="submit">Send</button></form></body>')
            res.write('</html')
            return res.end()
    
    
        })
    
    
    }
    else if (url === '/message' && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
    
            const message = parsedBody.split('=')[1]
            fs.writeFile("./inbox.txt", message, err => {
                if(err){
                    console.log(err)
                }
    
                res.statusCode = 302;

                res.setHeader("location", "/")
                return res.end()
    
            })
    
    
        })
    
    
    
    
    }
    
    
    else {
        res.setHeader("content-type", "text/html")
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello welcome to nodeJS</h1></body>')
        res.write('</html')
        res.end()
    
    
    }


}
//module.exports={
  //  handler:requestHandler,
 //   someText:"heloo at last"}

module.exports.handler=requestHandler
module.exports.someText="hello again"


exports.handler=requestHandler;
exports.someText="hello again";




