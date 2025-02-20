import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from "date-fns";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch, API_BASE_URL } = useWorkoutsContext();
  const [deleting, setDeleting] = useState(false);
  const { user } = useAuthContext();

  const handleDelete = async () => {
    setDeleting(true);
    if (!user) {
      return;
    }

    const response = await fetch(
      `${API_BASE_URL}/api/workouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
    setDeleting(false);
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
      <span
        onClick={!deleting ? handleDelete : undefined}
        style={{
          cursor: deleting ? "not-allowed" : "pointer",
          opacity: deleting ? 0.5 : 1,
        }}
      >
        <FaTrashAlt />
      </span>
    </div>
  );
};

export default WorkoutDetails;
