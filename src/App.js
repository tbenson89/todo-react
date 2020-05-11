import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import TodoInput from "./components/todoInput";

function App() {
    // TODO stuck here https://youtu.be/XCCW2y4wXNg?t=1467
    constructor(props)
    {
        super(props);

        this.state = {
            todos: [
                {id: 0, text: 'Create React Todo App'},
                {id: 1, text: 'Join Development Team'},
                {id: 2, text: 'Have Fun'},
            ],
            nextId: 3
        }

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }

    addTodo(todoText){
        console.log('Todo added: ', todoText);
    }
    removeTodo(id){
        console.log('Removed Todo: ');
    }

    render()
    {
        return (
            <div className="App">
                <div className="todo-wrapper">
                    <Header />
                    <TodoInput todoText="" addTodo={this.addTodo} />
                </div>
            </div>
        );
    }
}

export default App;
