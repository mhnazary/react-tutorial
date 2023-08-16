
import './App.css';
import TodoItem from "./components/TodoItem"

function App() {
  return (
    <div className="App">
     <TodoItem message="ali" />
     <TodoItem message="khan ali" />
     <TodoItem message="Mohammad mahdi" />
    </div>
  );
}

export default App;
