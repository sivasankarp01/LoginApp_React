const express = require('express');
const mysql = require('mysql');
const cors= require("cors");

const app = express();

app.use(express.json());
app.use(cors());

  const connection =mysql.createConnection(
    {
       user: "root",
       host: "localhost",
       password: "rootroot",
       database: "webapp",
    }
  );

//   app.get('/register', (req, res) => {
//     connection.query('SELECT * FROM login', (error, results) => {
//       if (error) {
//         console.error('Error executing MySQL query:', error);
//         res.status(500).json({ error: 'Error executing MySQL query' });
//       } else {
//         res.json(results);
//       }
//     });
//   });

  app.post('/register', (req, res) => {
    const email = req.body.email;
    const uname = req.body.uname;
    const password = req.body.password;

    connection.query("INSERT INTO login ( uname, email , pass) VALUES (?, ?, ?)", [ uname, email, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"});
            }
        }
    )
})
 

  app.post("/loginn", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query("SELECT * FROM login where email= ? and pass= ?", [email ,password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

/////
  app.listen(3001,()=>{
    console.log("running on port 3001")
  })