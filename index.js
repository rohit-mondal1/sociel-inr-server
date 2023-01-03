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



async function run() {
  try {
    const myusers = client.db("socielDb").collection("users");
    const myposts = client.db("socielDb").collection("posts");
    // user post in dt
    app.post("/userss", async (req, res) => {
      const body = req.body;

      const result = await myusers.insertOne(body);
      res.send(result);
    });
    // get the display users
    app.get("/user", async (req, res) => {
      const email = req.query.email;
      console.log('email', email )
      const query = { email: email };
      const result = await myusers.findOne(query);
      res.send(result);
    });


    // posts  in dt
    app.post("/posts", async (req, res) => {
      const bodys = req.body;
      const result = await myposts.insertOne(bodys);
      res.send(result);
    });
    // get the post in user see
    app.get("/posts", async (req, res) => {
      const emails = req.query.email;
      console.log(emails);
      const query = { email: emails };
      const result = await myposts.find(query).sort({date:-1}).toArray();
      res.send(result);
    });

    

  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("ok sona");
});

app.listen(port, () => {
  console.log(`social-inr ser  is run on port ${port}`);
});
