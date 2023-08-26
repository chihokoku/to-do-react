import './App.css';
import { Title } from "./components/Title"
import { InputForm } from "./components/InputForm"
import { ToDoList } from "./components/ToDoList";
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);  //配列を用意しておく


  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      {/* inputformに値を渡す */}
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
      {/* ここの引数の綴りが間違っていた */}
    </div>
  );
}

export default App;
