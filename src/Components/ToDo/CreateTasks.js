import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'reactstrap';

class CreateTasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            tasks: [],
            updatedTasks: []
        };
    }

    saveInput = (e) => {
        this.setState({ value: e.target.value })
    };

    addNewTask = () => {
        this.setState(state => {
            const tasks = state.tasks.concat(state.value.toUpperCase())

            return {
                tasks,
                value: '',
            }
        })
    };

    deleteClicked = (index) => {
        // alert('this was clicked')
        if (window.confirm("Are you sure you want to delete this task?")) {
            this.setState(state => ({
                tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)]
            }))
            console.log(this.state.tasks)
        }
    }

    render() {
        return (
            <div>
                <h3>Enter your task here:</h3>
                <div>
                    <input
                        type="text"
                        placeholder="To Do Item"
                        value={this.state.value}
                        onChange={this.saveInput}
                    />

                    <button
                        type="button"
                        onClick={this.addNewTask}
                        disabled={!this.state.value}
                    > Add Item
                    </button>
                </div>
                <br />
                <div>
                <p>Click the item to mark it complete</p>
                    <Card >
                        <ListGroup>
                            {this.state.tasks.map((item, index) => (
                                <ListGroupItem
                                    tag="button"
                                    // action onClick={this.deleteClicked} 
                                    action onClick={(e) => this.deleteClicked(index)}
                                    key={item}>{item}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card>
                </div>
            </div>
        )
    }
}

export default CreateTasks;