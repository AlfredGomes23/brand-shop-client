/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    //sign up by email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }
    //update name, url
    const updateNameUrl = (name, url) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        });
    }
    //sign in by email
    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password);
    }
    //sign in by gmail
    const gmailSignIn = () => {
        setLoading(true);
        return signInWithPopup( auth, googleProvider);
    }
    //observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth, currentUser  => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, []);
    //log out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const myContext = {
        user, loading, setLoading, createUser, emailSignIn, updateNameUrl, gmailSignIn,logOut
    }
    return (
        <AuthContext.Provider value={myContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;