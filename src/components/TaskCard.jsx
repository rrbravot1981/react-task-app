import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div key={task.id} className="bg-gray-400 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize">{task.name}</h3>
      <p className="text-gray-200 text-sm">{task.description}</p>
      <button className="bg-green-600 px-2 py-1 rounded-md mt-4 hover:bg-green-200 text-black" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
