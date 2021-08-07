import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { singnInWithGoogle } from '../../firebase/firebase.utils';
import {auth} from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor(props){
super(props);
this.state={
    email:"",
    password:"",
}
    }
    handlesubmit=async event=>{
        event.preventDefault();
    const {email,password}=this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:"",password:""})
    }
    catch(error){
        console.error(error)
    }
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
            <div className="buttons">
           <CustomButton type="submit">Sign In</CustomButton>
           <CustomButton onClick={singnInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
           </div>
        </form>
        </div>
    )
    }
}

export default SignIn
