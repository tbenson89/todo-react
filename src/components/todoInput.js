import React from "react";
import '../styles/todoInput.css'

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: 'Test'}

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        console.log('Change here!');
    }

    addTodo(todo) {
        console.log('Todo: ', todo);
    }

    render() {
        return (
            <div>
                <input type="text" value=""
                       onChange={this.handleChange}/>
                <button className="btn btn-primary"
                        onClick={() => this.addTodo(this.state.value)}>
                    Submit
                </button>
            </div>
        )
    }
}
