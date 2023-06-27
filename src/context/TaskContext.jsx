import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      id: tasks.length + 1,
      name: task.name,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(idTask) {
    setTasks(tasks.filter((t) => t.id !== idTask));
    //console.log(idTask)
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
