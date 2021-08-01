import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component {
    constructor(props){
super(props);
this.state={
    email:"",
    password:"",
}
    }
    handlesubmit=event=>{
        event.preventDefault();
        this.setState({email:"",password:""})
    }
handlechange=event=>{
    const {value,name}=event.target;
    this.setState({[name]:value});
}
    render(){
    return (
        <div className="sing-in">
        <h2>I already have an account</h2>
        <span>SignIn with your email and password</span>
        <form onSubmit={this.handlesubmit}>
            <FormInput name="email" type="email" value={this.state.email} handleChange={this.handlechange} required label="email"/>
          
            <FormInput name="password" type="password" value={this.state.password} handleChange={this.handlechange} required label="password"/>
           <CustomButton type="submit">Sign In</CustomButton>
          
        </form>
        </div>
    )
    }
}

export default SignIn
