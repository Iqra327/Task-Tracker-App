import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <TaskInput />
      <TaskList />
    </Context>
  );
}

export default App;
