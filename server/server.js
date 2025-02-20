require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts/", workoutRoutes)
app.use("/api/user/", userRoutes)


// connect to database
mongoose.connect(process.env.MONGO_URI,)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    })

  }).catch((err) => {
    console.log(err.message)
  })