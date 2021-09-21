import React from 'react';
import MainHeader from './MainHeader';
import AdminHeader from './AdminHeader';
import { useLocation } from 'react-router';

const NavHeader = (props) => {
    let location = useLocation();
    let path = location.pathname
    return (path === "/admin" || path === "/wizard" ? <AdminHeader onLogout={props.onLogout} loggedIn={props.loggedIn}/> : <MainHeader onLogout={props.onLogout} loggedIn={props.loggedIn}/> )
}
export default NavHeader