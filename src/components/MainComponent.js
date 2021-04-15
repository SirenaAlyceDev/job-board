import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPageComponent';
import HeaderComponent from './HeaderComponent'; 
import Login from './LoginComponent';
import EmployerSignUp from './EmployerSignUpComponent';
import ApplicantSignup from './ApplicantSignUpComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <LandingPage />
            )
        }
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/applicant-signup' component={ApplicantSignup} />
                    <Route path='/employer-signup' component={EmployerSignUp} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;