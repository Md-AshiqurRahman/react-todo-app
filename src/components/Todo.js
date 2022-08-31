import React from 'react';

import style from './Todo.module.css';

const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;

    const deleteTodo = (id) => {
        props.onRemoveTodo(id);
    }


    return (
        <article className={style.todo}>
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div>
                <button className={style.btn}><i className="fa fa-trash fa-2x" onClick={() => deleteTodo(id)}></i></button>
            </div>
        </article>
    )
}

export default Todo