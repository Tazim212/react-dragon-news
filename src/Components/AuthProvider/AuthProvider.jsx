import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../firebase_init';


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signedUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)    
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    }, [])
    const userInfo = {
        loading,
        user,
        createUser,
        signedUser,
        signedOut
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;