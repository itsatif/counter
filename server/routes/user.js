import express from 'express';
import { v4 as uuidv4} from 'uuid';
const router = express.Router();

// let users =[{
//     firstName:"Atif",
//     LastName:"Khan",
//     age:25
// },{
//     firstName:"Falak",
//     LastName:"Khan",
//     age:18
// }]

let users = [];


router.get('/',(req,res)=>{
    res.send(users)
})

router.post('/',(req,res)=>{
   const user = req.body;
   const userId = uuidv4();


   const userWithId = {...user,id:userId};
   users.push(userWithId);
    // res.json({
    //     firstName:req.body.firstName,
    //     LastName:req.body.LastName,
    //     age:req.body.age
    // })
    res.send(`User with name ${user.firstName} and with ID ${userId} added to the database!`);
});

//user with id get
router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((e) => e.id !== id );

    res.send(`User with id ${id} deleted from the database`);
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstName,LastName,age} = req.body;
    const user = users.find((user)=> user.id === id)

    if(firstName) user.firstName = firstName;
    if(LastName) user.LastName = LastName;
    if(age)  user.age = age;

    res.send(`User with id ${id} has been updated`);
})


export default router;
