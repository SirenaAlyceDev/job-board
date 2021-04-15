import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPageComponent';
import Login from './LoginComponent';
import EmployerSignUp from './EmployerSignUpComponent';
import ApplicantSignup from './ApplicantSignUpComponent';
import EmployerComponent from './EmployerComponent';
import ApplicantComponent from './ApplicantComponent';
class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <LandingPage />
            )
        }
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/applicant-signup' component={ApplicantSignup} />
                    <Route path='/employer-signup' component={EmployerSignUp} />
                    <Route path='/employer-dashboard' component={EmployerComponent} />
                    <Route path='/applicant-dashboard' component={ApplicantComponent} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;