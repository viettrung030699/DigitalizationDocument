import React from 'react';
import { Login } from '../../components/login/LoginForm';
import { Navigationbar_LoginPage } from '../../components/Navbar/navbar';
import './loginPage.scss';

export const LoginPage = () => {
    return(
        <div className="homepage">
            <div className="context">
                <Navigationbar_LoginPage /> 
                <div className="context-login__loginForm">
                    <Login />
                </div>
            </div>

            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};