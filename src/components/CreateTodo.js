import React, {useState} from 'react';

import style from './CreateTodo.module.css';

const CreateTodo = (props) => {
    const [todo, setTodo] = useState({
        title: '',
        desc: ''
    });

    const {title, desc} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
        setTodo({title:'', desc:''})
    }

    const eventHandler = (e) => {
        setTodo((oldTodo) => {
            return {...oldTodo, [e.target.name] : e.target.value}
        })
    }

    return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={eventHandler}></input>
        </div>

        <div className={style["form-field"]}>
            <label htmlFor="desc">Description</label>
            <textarea type="text" id="desc" name="desc" value={desc} onChange={eventHandler}></textarea>
        </div>
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default CreateTodo;