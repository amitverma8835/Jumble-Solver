const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const cors = require('cors');
const wordRoute = require('./route/wordRoute');
const path = require('path'); 
const _dirname = path.resolve()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', wordRoute); 
app.use(express.static(path.join(_dirname,"/jumble-frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"jumble-frontend","dist","index.html"));
})

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

mongoose.connect(config.DB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`Database Connection Failed: ${err}`);
  });
