import React from 'react';

import Todo from './Todo';
import style from './Todos.module.css';

const Todos = (props) => {   
  return (
    <section className={style.todos}>
        {props.todos.map((todoItem) => <Todo key={todoItem.id} todo={todoItem.todo} id={todoItem.id} onRemoveTodo={props.onRemoveTodo} />)}
    </section>
  )
}

export default Todos