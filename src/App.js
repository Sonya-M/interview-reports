import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Report from "./pages/Report";
import Candidates from './pages/Candidates';
import { Route, Switch, Redirect, useHistory } from 'react-router';
import ErrorDisplay from "./components/ErrorDisplay";
import MainHeader from "./components/UI/MainHeader";
import AdminHeader from "./components/UI/AdminHeader";
import Footer from "./components/UI/Footer";
import AdminPage from "./pages/AdminPage";

import Wizard from "./pages/Wizard";
import AuthCommunicator from "./services/AuthCommunicator";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import About from "./pages/About";


function App() {
  let history = useHistory();
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
    clearSession();
  };

  const handleSessionExpired = () => {
    clearSession();
  };

  const clearSession = () => {
    setLoggedIn(false);
    AuthCommunicator.clearSession(() => {
      history.push("/");
    });
    // history.push("/");
  };

  const refreshPage = () => {
    history.push("/");
    window.location.reload();
  };

  const refreshAdminPage = () => {
    history.push("/admin");
    window.location.reload();
  }

  const mainHeader = (
    <MainHeader
      loggedIn={loggedIn}
      onLogout={handleLogout}
      onLogoClick={refreshPage} />);
  const adminHeader = (
    <AdminHeader
      onLogoClick={refreshAdminPage}
    />
  );

  return (
    <Container fluid className="m-0 p-0 mb-5">
      {(!loggedIn) ?
        <LoginForm onLogin={handleLogin} /> :
        <Switch>
          <Route exact path="/candidates/:id">
            {mainHeader}
            <Report onSessionExpired={handleSessionExpired} />
          </Route>
          <Route exact path="/">
            {mainHeader}
            <Candidates onSessionExpired={handleSessionExpired} />
          </Route >
          <Route exact path="/admin">
            {adminHeader}
            <AdminPage onSessionExpired={handleSessionExpired} />
          </Route>
          <Route exact path="/wizard">
            {adminHeader}
            <Wizard onSessionExpired={handleSessionExpired} />
            <Wizard />
          </Route>
          <Route exact path="/about">
            {mainHeader}
            <About onSessionExpired={handleSessionExpired} />
          </Route>
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

