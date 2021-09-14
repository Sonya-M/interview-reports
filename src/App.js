import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Report from "./pages/Report";
import Candidates from './pages/Candidates';
import { Route, Switch, Redirect, useHistory } from 'react-router';
import ErrorDisplay from "./components/ErrorDisplay";
import MainHeader from "./components/UI/MainHeader";
import Footer from "./components/UI/Footer";
import AdminPage from "./pages/AdminPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';


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
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("username");
    setLoggedIn(false);
    history.push("/");
  };

  const refreshPage = () => {
    history.push("/");
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
            <Report />
          </Route>
          <Route exact path="/">
            <Candidates />
          </Route >
          <Route exact path="/admin-page">
            <AdminPage />
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

