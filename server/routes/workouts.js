const express = require("express");
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutcontrollers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all routes
router.use(requireAuth);

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router