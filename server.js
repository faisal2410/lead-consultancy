const path = require('path')
const { readdirSync } = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
// port
const port = process.env.PORT || 8000;

// app
const app = express();

// DB Connection
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

if(process.env.NODE_ENV === 'production'){

  app.use('/' , express.static('client/build'))

  app.get('*' , (req , res)=>{

      res.sendFile(path.resolve(__dirname , 'client/build/index.html'))

  }) 
  

}




app.listen(port, () => console.log(`Server is running on port ${port}`));
