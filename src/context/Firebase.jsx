import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";



const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDyvnZeUYHsSmEr37tMepx9zC1mljhXrDE",
    authDomain: "loginsignup-bbe28.firebaseapp.com",
    projectId: "loginsignup-bbe28",
    storageBucket: "loginsignup-bbe28.appspot.com",
    messagingSenderId: "1085092065425",
    appId: "1:1085092065425:web:2dd1c8762383a5ad694f30"
  };

  export const useFirebase = () => useContext(FirebaseContext);

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();

  export const FirebaseProvider = (props) =>{

    const [user, setUser] = useState(null); 

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, (user)=>{
            if(user) setUser(user)
            else setUser(null);
        });
    },[]);

    const signupUserWithEmailAndPassword =  (email, password)=>{
       return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const loginUserWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(firebaseAuth, email, password);
       
    };

    const signinWithGoogle = () =>{
        signInWithPopup(firebaseAuth, googleProvider);
    }; 

    const logout =  () =>{
        return signOut(firebaseAuth);
        
        
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, loginUserWithEmailAndPassword, signinWithGoogle, logout, isLoggedIn, user}}>{props.children}</FirebaseContext.Provider>
    )
  }
 


