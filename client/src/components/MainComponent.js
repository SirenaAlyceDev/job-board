import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPageComponent';
import Login from './LoginComponent';
import EmployerSignUp from '../components/employer/EmployerSignUpComponent';
import ApplicantSignup from '../components/applicant/ApplicantSignUpComponent';
import EmployerComponent from '../components/employer/EmployerComponent';
import ApplicantComponent from '../components/applicant/ApplicantComponent';
import ActiveJobs from './employer/ActiveJobsComponent';
import ApplicantList from './employer/ApplicantListComponent';
import ExpiredJobs from './employer/ExpiredJobsComponent';
import EmployerNotificaitons from './employer/NotificationsComponent';
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
                    <Route path='/active-jobs' component={ActiveJobs} />
                    <Route path='/expired-jobs' component={ExpiredJobs} />
                    <Route path='/applicants' component={ApplicantList} />
                    <Route path='/employer-notifications' component={EmployerNotificaitons} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;