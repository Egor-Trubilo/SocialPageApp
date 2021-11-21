import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/FormsControl.module.css'

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'rememberMe')}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <button>LOGIN</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);