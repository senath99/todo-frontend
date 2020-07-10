import axios from 'axios'

class HelloWorldService {

    executeHelloWorld() {

        return axios.get('http://localhost:8080/hello-world')

        //console.log('executed hello world')
    }

    executeHelloWorldBean() {

        return axios.get('http://localhost:8080/hello-world-bean')

        //console.log('executed hello world')
    }

    executeHelloWorldPathVariable(name) {

        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers: {
        //             authorization: basicAuthHeader
        //         }
        //     }
        )

        //console.log('executed hello world')
    }

}

export default new HelloWorldService()

