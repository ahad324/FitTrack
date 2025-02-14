import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout }) => {
  const { dispatch, API_BASE_URL } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(API_BASE_URL + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete}>
        <FaTrashAlt />
      </span>
    </div>
  );
};

export default WorkoutDetails;
