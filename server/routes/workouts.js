const express = require("express");
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controller/workoutcontrollers")

const router = express.Router();

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router