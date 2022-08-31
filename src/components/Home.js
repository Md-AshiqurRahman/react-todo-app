import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Todos from './Todos';
import style from './Home.module.css';
import CreateTodo from './CreateTodo';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (todo) => {
    setTodos((oldTodos) => {
      return [...oldTodos, {id: uuidv4(), todo}];
    });
  }

  const handleRemoveTodo = (id) =>{
      setTodos((prevTodos) => {
        const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
        return filteredTodos;
      })
  }

  return (
    <div className={style.container}>
       <h1 style={{color:"white"}}>Todo App</h1>
        <CreateTodo onNewTodo={handleNewTodo} />
         <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home;