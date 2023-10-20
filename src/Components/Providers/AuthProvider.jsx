/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/config.firebase";





export const AuthContext = createContext(null);

const auth = getAuth(app)

// const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth,provider)

    }

    // const googleLogin = () =>{
    //    return signInWithPopup(auth,googleProvider);
    // }

    useEffect(() =>{

    const unSubscribe = onAuthStateChanged(auth, createUser =>{
            console.log("user in the auth state change", createUser);
            setuser(createUser);
            setLoading(false)
        });

        return () =>{
            unSubscribe()
        }


    },[])

    const authInfo ={
       user,
       loading,
       createUser,
       singIn,
       logOut,
       googleLogin
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;