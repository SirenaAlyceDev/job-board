import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from './components/MainComponent';
import LandingPage from "./components/LandingPageComponent";
import EmployerComponent from "./components/EmployerComponent";
import Login from "./components/LoginComponent";
import EmployerSignUp from "./components/EmployerSignUpComponent";
import ApplicantSignup from "./components/ApplicantSignUpComponent";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Main />
        {/* <LandingPage /> */}
        {/* <EmployerComponent /> */}
        {/* <Login />
     <EmployerSignUp />
     <ApplicantSignup /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
