import React, { children, createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.Config'
import  { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { MdLocalShipping } from 'react-icons/md';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        // return createUserWithEmailAndPassword
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return() => {
            return unsubscribe();

        }
    } ,[])

    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider