import React, { Component } from 'react'
import List from '../components/List';


class Input extends Component {
    constructor () {
        super();
        this.state = {
            value: ''
        };
        this.inputValue = this.inputValue.bind(this)
        this.getTask = this.getTask.bind(this)
    }
    getTask() {
        this.props.createTask(this.state.value)
        this.setState({
            value: ''
        })
    }
    inputValue(event) {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return (
        <div className="wrapper">
             <div 
            className="input-group mb-3"
        >
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your task"
                value={this.state.value}
                onChange={this.inputValue}
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2" 
                onClick={this.getTask}
            >
                Add Task
            </button>
        </div>
        <List 
            listValue={this.props.list} 
            delTask={this.props.delTask} 
        />
        </div>
        
        );
    }

}
export default Input;



