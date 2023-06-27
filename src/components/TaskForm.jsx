import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ name, description });
    setName("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4 p-10 bg-neutral-700">
        <input
          type="text"
          placeholder="Escribe la tarea"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          className="mb-2 p-3 w-full"
        />
        <textarea
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="mb-2 p-3 w-full"
        ></textarea>
        <button className="bg-indigo-700 rounded-md px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
