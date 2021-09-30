import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import MainHeader from './MainHeader';

const NavigationBar = (props) => {
    let location = useLocation()
    return(location.pathname === "/admin" || location.pathname === "/wizard" || location.pathname === "/company"  ? <AdminHeader loggedIn={props.loggedIn} onLogout={props.onLogout}/> : <MainHeader loggedIn={props.loggedIn} onLogout={props.onLogout}/>)
}
export default NavigationBar