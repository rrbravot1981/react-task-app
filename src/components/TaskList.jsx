import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="font-bold text-4xl text-white text-center">No hay tareas</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
