import CompletedTasks from "./components/CompletedTasks";
import NavBar from "./components/NavBar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Context from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Context>
      <Router>
        <TaskInput />
        <NavBar />
          <Routes>
            <Route path="/" element={<TaskList />}/>
            <Route path="/completedTasks" element={<CompletedTasks />}/>
          </Routes>
      </Router>
    </Context>
  );
}

export default App;
