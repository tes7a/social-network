import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import { Input } from '../common/FormsControl/FormControl';
import {maxlength, requiredField} from "../../utils/validators/validators";

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormData>({form: 'login'})(LoginForm)

type FormData = {
    login: string,
    password: string,
    rememberMe: boolean,
}