import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../../bll/auth-reducer';
import { AppRootStateType } from '../../bll/redux-store';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginFrom/LoginForm';

type LoginProps = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
    authLogin: (
        password: string, 
        email: string, 
        rememberMe: boolean) => void,
}

type MapStateToPropsType = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
}

export const Login: React.FC<LoginProps> = ({ authLogin, isAuth }) => {
    const onSubmit = (formData: any) => {
        console.log(formData);
        
        authLogin(formData.password,formData.email,formData.rememberMe);
    }

    if(isAuth){
        return <Redirect to={ '/profile' }/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={  onSubmit }/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export const LoginContainer = connect(mapStateToProps, { authLogin })(Login);