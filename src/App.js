
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth-page/auth-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null;

componentDidMount(){
  this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
    const userRef=await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapshot=>{
     this.setState({
       currentUser:{
         id:snapshot.id,
         ...snapshot.data(),
       }
     })
   
    });
   
  }
  this.setState({currentUser:userAuth})
  })
}
componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    

    return (
      <div> 
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path='/login' component={AuthPage} />
      </Switch>
      
      </div>
    );
  }
 
}

export default App;
