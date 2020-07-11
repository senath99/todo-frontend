import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService.js';

class Header extends Component{
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);
<<<<<<< HEAD
    //test comment
    
=======
	//test comment
	//test comment 02
>>>>>>> 69905fe649dcaa20d7403f59554f7f593f13aed1

        return(
            <div>
                
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://google.com" className="navbar-brand">in28minutes</a></div>
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minuts">Home</Link></li>}
                            {isUserLoggedIn &&<li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>

            </div>
        )
    }
}

export default withRouter(Header)
