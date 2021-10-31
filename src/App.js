import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Report from "./pages/Report";
import Candidates from "./pages/Candidates";
import { Route, Switch, Redirect, useHistory, Router } from "react-router";
import ErrorDisplay from "./components/ErrorDisplay";
import Footer from "./components/UI/Footer";
import AdminPage from "./pages/AdminPage";
import Wizard from "./pages/Wizard";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthCommunicator from "./services/AuthCommunicator";
import NavigationBar from "./components/UI/NavigationBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import { BgContainer } from "./components/BgContainer";
import Company from "./pages/Company";
import NewCandidate from "./pages/NewCandidate";
import ThreeAnimation from "./components/UI/ThreeAnimation";

function App() {
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    history.push("/");
  };

  const handleLogout = () => {
    clearSession();
  };

  const handleSessionExpired = () => {
    setSessionExpired(true);
    clearSession();
  };

  const clearSession = () => {
    AuthCommunicator.clearSession();
    setLoggedIn(false);
    history.push("/");
    // window.location.reload();
  };

  return (
    <ErrorBoundary>
      <BgContainer>
        <NavigationBar loggedIn={loggedIn} onLogout={handleLogout} />
        {!loggedIn ? (
          <LoginForm onLogin={handleLogin} sessionExpired={sessionExpired} />
        ) : (
          <Switch>
            {/* ErrorBoundary can also be inside Switch */}
            {/* <ErrorBoundary> */}
            <Route exact path="/">
              <Candidates onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/candidates/:id">
              <Report onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/admin">
              <AdminPage onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/wizard">
              <Wizard onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/company">
              <Company onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/test">
              <ThreeAnimation onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/new_candidate">
              <NewCandidate onSessionExpired={handleSessionExpired} />
            </Route>
            <Route exact path="/about">
              <About onSessionExpired={handleSessionExpired} />
            </Route>

            <Route>
              <Redirect from="/candidates" to="/"></Redirect>
            </Route>
            <Route>
              <ErrorDisplay message="Page not found" />
            </Route>
          </Switch>
        )}
        <Footer />
      </BgContainer>
    </ErrorBoundary>
  );
}

export default App;
