import React, { useEffect, useState, useContext } from "react";
import LoginForm from "./components/LoginForm";
import Report from "./pages/Report";
import Candidates from "./pages/Candidates";
import { Route, Switch, Redirect, useHistory } from "react-router";
import ErrorDisplay from "./components/ErrorDisplay";
import MainHeader from "./components/UI/MainHeader";
import AdminHeader from "./components/UI/AdminHeader";
import Footer from "./components/UI/Footer";
import AdminPage from "./pages/AdminPage";
import Wizard from "./pages/Wizard";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthCommunicator from "./services/AuthCommunicator";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import NavHeader from "./components/UI/NavHeader";

export const UserContext = React.createContext()
function App() {
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);


  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  const refreshPage = () => {
    history.push("/");
    window.location.reload();
  };

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
    setLoggedIn(false);
    AuthCommunicator.clearSession();
    history.push("/");
  };
  
  

  return (
    <Container fluid className="m-0 p-0 mb-5">
      <ErrorBoundary>
        <UserContext.Provider value={loggedIn}>
        <NavHeader onLogout={handleLogout} />
        </UserContext.Provider>
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
            <Route exact path="/about">
              <About onSessionExpired={handleSessionExpired} />
            </Route>
            <Route>
              <Redirect from="/candidates" to="/"></Redirect>
            </Route>
            {/* </ErrorBoundary> */}
            {/* For some reason, Page not found below is rendered below other pages when wrapped in ErrorBoundary, so I placed it outside
            TODO: ask why!!!*/}
            <Route>
              <ErrorDisplay message="Page not found" />
            </Route>
          </Switch>
        )}
        <Footer />
      </ErrorBoundary>
    </Container>
  );
}

export default App;
