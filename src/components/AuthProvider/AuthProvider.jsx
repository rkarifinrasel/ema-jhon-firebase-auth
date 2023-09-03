import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { useNavigate } from 'react-router-dom';
const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


    const createSignUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
       
    }
    const signOutUser=()=>{
      return  signOut(auth)

    }
    useEffect(()=>{
        const unsubsicribsion=onAuthStateChanged(auth,currentUser=>{
            console.log('onstate Auth',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
           return unsubsicribsion();
        }
    },[])
    const authInfo={
        user,
        loading,
        createSignUp,
        signIn,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;