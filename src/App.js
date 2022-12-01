import React from 'react';

import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import {selectTodoList} from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todocontainer">
          {
            todoList.map(item=>(
              <TodoItem
               name={item.item}
               done={item.done}
               id={item.id}
                />
            ))
          }
        </div>
    <h1>To Do Application</h1>
      <Input/>
      </div>
      
    </div>
  );
}

export default App;
