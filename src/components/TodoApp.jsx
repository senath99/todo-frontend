import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import ListTodos from './ListTodos'
import ErrorComponent from './ErrorComponent'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'
import Logout from './Logout'
import Todo from './Todo.jsx';
 
class TodoApp extends Component{

    render(){
        return(
            <div className="TodoApp">

                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                        <AuthenticatedRoute path="/todos/:id" component={Todo} />
                        <AuthenticatedRoute path="/todos" component={ListTodos} />
                        <AuthenticatedRoute path="/logout" component={Logout} />
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                </Router>


                {/* <LoginComponent/>
                <Welcome/> */}

            </div>
        );
    }

}


// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }else {
//         return null
//     }
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage){
//         return <div>Login Successfull</div>
//     }else{
//         return null
//     }
// }


export default TodoApp;