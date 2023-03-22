/* import Express from "express";
import cors from 'cors'
let app=Express()
const PORT=3000;
// [x]Implement CORS.
app.use(cors({
    origin:'*',
    methods:['get','post','delete','patch']
}))
app.get('/',(req,res)=>{
    res.send({"Page":"Home"})
})
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}/`)
})
 */
/* 
import Express from "express";
import cors from 'cors'
let app=Express()
const PORT=3000;
// [x]:Create a middleware which will be applicable to all the routes
let middleware=(req,res,next)=>{
    console.log(`${req.url} --> ${req.host}--> ${req.path}`)
    next();
}
app.use(middleware)
app.get('/',(req,res)=>{
    res.send({"Page":"Home"})
})
app.get('/about',(req,res)=>{
    res.send({"Page":"about"})
})
app.get('/contact',(req,res)=>{
    res.send({"Page":"Contact"})
})
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}/`)
})
 */

/* 
import Express from "express";
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"
let app=Express()
const PORT=3000;
// [x]:Implement API for signup and login with hash password
app.use(Express.json())
app.get('/',(req,res)=>{
    res.send({"Page":"Home"})
})
let arr=[]
let KEY="LET_DO_IT"
app.post('/',async (req,res)=>{
    try{
        let {name,password} = req.body
        let Password=await bcrypt.hash(password,10)
        let data={name,Password}
        arr.push(data)
        res.send(data)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})
app.get('/login',(req,res)=>{
    res.send({"Page":"login"})
})
app.post('/login',async (req,res)=>{
    let {name,password} = req.body
    try{
        let pass=await bcrypt.compare(password,arr[0].Password)
        arr.map(data=>{
            if(data.name===name && pass===true){
                let token=jwt.sign(data,KEY)
                res.send(token)
            }else{
                res.send('Bro Error')
            }
        })
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})
app.get('/contact',(req,res)=>{
    res.send({"Page":"Contact"})
})
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}/`)
}) */


import Express from "express";
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"
let app=Express()
const PORT=3000;
// [x]:Implement an api accepts a token , checks the token . If correct sends data else error "token is expired"

let validToken='LETS_DANCE'
let expiredTime=new Date('2023-03-24')
app.get('/',(req,res)=>{
    let token=req.body.token
    if(token===validToken){
        let time=new Date()
        if(time<expiredTime){
            res.json({
                name:'JOHN CENA'
            })
        }else{
            res.status(401).json({error:"Error Bro"})
        }
    }else{
        res.status(401).json({error:"Error Bro"})
    }
})
app.get('/contact',(req,res)=>{
    res.send({"Page":"Contact"})
})
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}/`)
})