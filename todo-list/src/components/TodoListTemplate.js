import React from 'react';
import './TodoListTemplate.css';


const TodoListTemplate = ({form, children}) => {
    return (
        <div className="todo-list-template">
            <div className="title">
                오늘의 할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </div>
    );
};

export default TodoListTemplate;