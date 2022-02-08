import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/user.js';





const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get("/",(req,res)=>{res.send("Hi I am Atif")});

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.json({
        username:req.body.username,
        password:req.body.password
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
});