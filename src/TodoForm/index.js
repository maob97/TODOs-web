import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    const[newTodoValue, setNewTodoValue] = useState('');

    const { addTodo, setOpenModal } = useContext(TodoContext) 

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva Tarea</label>
            <textarea
            value = {newTodoValue}
            onChange = {onChange}
            placeholder='Escribe la tarea aqui' />
            <div className='TodoForm-buttonContainer'>
                <button 
                type='button' 
                className='TodoForm-button TodoForm-button-cancel' 
                onClick={onCancel}
                >
                    Cancelar 
                </button>
                <button
                type='submit'
                className='TodoForm-button TodoForm-button-add' >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export default TodoForm;