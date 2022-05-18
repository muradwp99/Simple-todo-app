import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import FormTodo from './FormTodo';
import Todo from './Todo';


const TodoFunction = () => {
    const [todos, setTodos] = useState([
        {
            text: "This is a sample todo list",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-4 text-bold">Todo List</h1>
                <FormTodo addTodo={addTodo} />
                <div>
                    {todos.map((todo, index) => (
                        <Card style={{ backgroundColor: "rgb(255, 251, 202)", border: "none" }}>
                            <Card.Body>
                                <Todo
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    markTodo={markTodo}
                                    removeTodo={removeTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoFunction;