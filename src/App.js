import React, { useEffect, useState } from "react";
import LoginForm from "./pages/LoginForm";
import Report from "./pages/Report";
import Candidates from './pages/Candidates';
import { Route, Switch, Redirect } from 'react-router';
import ErrorDisplay from "./pages/ErrorDisplay";
import MainHeader from "./components/UI/MainHeader";
import Footer from "./components/UI/Footer";

import useLoginInfo from "./pages/useLoginInfo";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container fluid className="m-0 p-0 mb-5">
      <MainHeader />
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/candidates/:id">
          <Report />
        </Route>
        <Route exact path="/">
          <Candidates
          />
        </Route >
        <Redirect from="/candidates" to="/"></Redirect>
        <Route>
          <ErrorDisplay message="Page not found" />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;

