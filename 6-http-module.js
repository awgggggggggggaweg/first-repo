const http= require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end("Welcome to our Home Page")
}
if(req.url === '/about'){
    res.end('Hello World')
}
res.end(`
<h1>Oops!</h1>
<p>Cant find this page</p>
<a href='/'>Back Home</a>
`)
})

server.listen(5000)