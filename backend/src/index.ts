import express from "express";

const app = express();

app.use(express.json());

// GET 
app.get("/hello", (req, res, next)=>{
  return res.send("Hello");
});

// PUT
app.put("/hello", (req, res, next)=>{
  console.log(req.body.name);
  return res.send("Hello");
});

// POST
app.post("/hello", (req, res, next)=>{
  console.log(req.body.name);
  return res.send("Hello");
});

// DELETE
app.delete("/user/:id", (req, res, next)=>{
  console.log(req.params.id);
  console.log(req.body.name);
  return res.send("Hello");
});

app.listen(5000, ()=>console.log("Server started..."));
