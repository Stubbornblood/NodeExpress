const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to home page");
        return
    }
    if(req.url == "/about"){
        res.end("Welcome to about page")
        return
    }

    res.end(`
    
    <h1>Oops!</h1>
    <p>We can't seem to find page </p>
    <a href="/">Go to Home</a>
    
    `)
    

})

server.listen(5000) 