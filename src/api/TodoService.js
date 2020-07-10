import axios from 'axios'
import {API_URL, JPA_API_URL} from '../Constants'

class TodoService {

    getAllTodos(name) {

        return axios.get(`${JPA_API_URL}/users/${name}/todos`)

        //console.log('executed hello world')
    }

    getTodo(name, id) {

        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)

        //console.log('executed hello world')
    }

    deleteTodo(name, id) {

        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)

        //console.log('executed hello world')
    }

    updateTodo(name, id, todo) {

        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo)

        //console.log('executed hello world')
    }


    addTodo(name, todo) {

        return axios.post(`${JPA_API_URL}/users/${name}/todos`, todo)

        //console.log('executed hello world')
    }

}

export default new TodoService()
