import './App.css';
import { useState } from 'react';

function App() {
    const [toDo, setTodo] = useState();
    const [toDos, setTodos] =useState([]);

    const onChange = (event) => setTodo(event.target.value)
    const onSubmit = (event) => {event.preventDefault();
      if(toDo === "" ) { 
        return;
      }
      setTodo("");
      setTodos(currentArray => [...currentArray, toDo]) 
    };
    console.log(toDos);
  return (
    <div className="App">
      <h1 className="todolist"> My To Do List ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
           className='input'
            onChange={onChange}
            value={toDo}
            type='text'
            placeholder='Write your To Do List'>
          </input>
          <button>Add To Do</button>
        </form>
        <hr />
      <ul>
        {toDos.map((item, index)=>(
          <li key={index}>{index+1+"."}{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
