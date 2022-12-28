const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

// username:   Socielinr
// password ::  i0tY89pk9AfXdH1F

// mongodb conpale




const uri = "mongodb+srv://Socielinr:i0tY89pk9AfXdH1F@cluster0.zruk5xh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
    try{
        const userDb = client.db('sociel-inr').collection('userall')

    // user post in dt 
    app.post('/userss' , async(req ,res)=>{
        const body = req.body;
        console.log(body);
    })
    }
    finally{

    }
}

app.get("/", (req, res) => {
  res.send("ok sona");
});

app.listen(port, () => {
  console.log(`social-inr ser  is run on port ${port}`);
});
