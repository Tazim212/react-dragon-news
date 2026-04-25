import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../firebase_init';

const provider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider()

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

    const googleSigned = () =>{
        return signInWithPopup(auth, provider);
    }

    const githubSigned = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    // const passReset = (email) =>{
    //     setLoading(true)
    //     return sendPasswordResetEmail(auth, email)
    // }
    const signedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log(currentUser)    
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
        googleSigned,
        githubSigned,
        updateUser,
        signedOut
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;