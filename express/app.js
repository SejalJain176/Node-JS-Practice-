const express= require("express")
const fs = require("fs");
const app =express()
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

// Static Files: free to be use anywhere
//For serving static files

const path =require('path')
app.use('/static', express.static('static'))
app.get("/about",(req,res)=>{
    res.end(about)
})

// PUG related Stuff
const pug = require('pug');
app.set('view engine' ,'pug');
app.set('views',path.join(__dirname,'views'));
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title:'Hey',message:"Hello"})
// })



//Endpoints
app.get("/",(req,res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.end(home)

    res.status(200).render('index.pug')
    
    })


//Server start
const port=80
const hostname='127.0.0.1'
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});