import React, { useState, useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Loader from "../components/Loader";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch, API_BASE_URL } = useWorkoutsContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}`);

        if (!response.ok) {
          throw new Error("Failed to fetch workouts. Server might be down.");
        }

        const json = await response.json();
        dispatch({ type: "SET_WORKOUTS", payload: json });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [dispatch, API_BASE_URL]);

  return (
    <div className="home">
      <div className="workouts">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>No workouts yet.</p>
        )}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
