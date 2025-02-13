import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw new Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider."
    );
  }
  return context;
};
