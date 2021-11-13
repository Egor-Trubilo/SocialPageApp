import React from 'react';
import {Field, reduxForm} from "redux-form";



let LoginForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={'Login'} name={'login'} component={'input'}/>
          </div>
          <div>
              <Field placeholder={'Password'} name={'password'} component={'input'}/>
          </div>
          <div>
              <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
          </div>
          <button>LOGIN</button>
      </form>
  )
}
const  LoginReduxForm =  reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {

    }
    return (
        <div>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>

        )

}

export default Login;