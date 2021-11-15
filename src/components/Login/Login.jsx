import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/FormsControl.module.css'




let LoginForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={'Email'} validate={[required]}
                     name={'email'} component={Input} type={'email'}/>
          </div>
          <div>
              <Field placeholder={'Password'} validate={[required]}
                     name={'password'} component={Input} type={'password'}/>
          </div>
          <div>
              <Field type={'checkbox'} validate={[required]}
                     name={'rememberMe'} component={Input}/> remember me
          </div>
          {props.error &&  <div className={s.formSummaryError}>
              {props.error}
          </div>
          }
          <button>LOGIN</button>
      </form>
  )
}
const  LoginReduxForm =  reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
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

export default connect( mapStateToProps, {login} ) (Login);