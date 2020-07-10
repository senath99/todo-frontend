import React, {Component} from 'react';
import moment from 'moment'
import TodoService from '../api/TodoService.js';
import AuthenticationService from './AuthenticationService.js'

class ListTodos extends Component{

    constructor(props){
        console.log('Counstructor')
        super(props)
        this.state = {
            todos : [],
            message : null
        }
        this.deleteTodo = this.deleteTodo.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
    }

    refreshTodos() {
        console.log('refresh todos')
        let name = AuthenticationService.getLoggedUsername()

        TodoService.getAllTodos(name)
        .then(
            response => {
                //console.log(response)
                this.setState({todos : response.data})
            }
        )
    }

    

    deleteTodo(id){
        console.log('delete todo method')
        let name = AuthenticationService.getLoggedUsername()
        
        TodoService.deleteTodo(name, id)
        .then(
            response => {
                console.log(response)
                this.setState({message : `Delete of todo ${id} is successful.`})
                this.refreshTodos()
            }
        )
        .catch(
            error => console.log(error)
        )
    }


    addTodo(){
        console.log('Add todo method' )
        this.props.history.push(`/todos/-1`)
    }


    updateTodo(id){
        console.log('update todo method' +id)
        this.props.history.push(`/todos/${id}`)
        // let name = AuthenticationService.getLoggedUsername
        
        // TodoService.deleteTodo(name, id)
        // .then(
        //     response => {
        //         console.log(response)
        //         this.setState({message : `Delete of todo ${id} is successful.`})
        //         this.refreshTodos()
        //     }
        // )
        // .catch(
        //     error => console.log(error)
        // )
    }

    render(){
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>isCompleted</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                        </tr>    
                                )
                                
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodos