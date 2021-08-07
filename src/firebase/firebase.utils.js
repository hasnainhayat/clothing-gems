import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDZ41mrwqoP6rj3qeM9aK2O1ilhHhE81fo",
    authDomain: "clothing-gems.firebaseapp.com",
    projectId: "clothing-gems",
    storageBucket: "clothing-gems.appspot.com",
    messagingSenderId: "368909341615",
    appId: "1:368909341615:web:4f67760944fb30024bd55a",
    measurementId: "G-GYEQL5153S"
  };
  export const createUserProfileDocument=async (userAuth, additionalData)=>{
    if(!userAuth){
    return;  
    }
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user',error.message)
    }
   
  }
  return userRef;
  }
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const singnInWithGoogle=()=>{
auth.signInWithPopup(provider)
  }
  export default firebase;