import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="bg-cyan-300 h-screen">
      <div className="container mx-auto p-5">
        <h1 className="text-white font-bold text-2xl text-center">App React with Vite</h1>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
