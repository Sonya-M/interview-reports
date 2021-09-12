import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Report from "./pages/Report";
import Candidates from './pages/Candidates';
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router';
import ErrorDisplay from "./pages/ErrorDisplay";
import MainHeader from "./components/UI/MainHeader";
import Footer from "./components/UI/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import { getCandidates } from "./services/services";

function App() {
  let location = useLocation();
  let history = useHistory();
  console.log("location", location)

  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("username");
    setLoggedIn(false);
    history.push("/");
  };

  const refreshPage = () => {
    window.location.reload();
  }


  return (
    <Container fluid className="m-0 p-0 mb-5">
      <MainHeader loggedIn={loggedIn} onLogout={handleLogout} onLogoClick={refreshPage} />

      {(!loggedIn) ?
        <LoginForm onLogin={handleLogin} /> :
        <Switch>
          {/* <Route exact path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route> */}
          <Route exact path="/candidates/:id">
            <Report loggedIn={loggedIn} />
          </Route>
          <Route exact path="/">
            <Candidates loggedIn={loggedIn} />
          </Route >

          <Route>
            <Redirect from="/candidates" to="/"></Redirect>
          </Route>

          <Route>
            <ErrorDisplay message="Page not found" />
          </Route>
        </Switch>}

      <Footer />
    </Container>
  );
}

export default App;

