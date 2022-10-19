import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './../firebase/firebase.init'
export const AuthContext =createContext()

const auth =getAuth(app)



const UserContext = ({children}) => {
    const [user, setUser]= useState('')
    const [loading,setLoading]= useState(true)

// const user ={email: 'abc'}

//google
const googleProvider =new GoogleAuthProvider();

//createUser
const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth ,email, password)
}

// signIn 
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// SignOut
const logOut =()=>{
    return signOut(auth)
}

//google
const signInWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
        console.log('auth state changed', currentUser)
    })
    return ()=>{
        unsubscribe();
    }
},[])

    const authInfo = {user, createUser,signIn,logOut,signInWithGoogle,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;