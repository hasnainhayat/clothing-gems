import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component';

import './auth-page.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';
const AuthPage=()=>{
    return (
        <div className="auth-page">
            <SignIn />
            <SignUp />
        </div>

    )
}

export default AuthPage
