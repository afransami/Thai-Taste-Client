import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading (true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const userProfile = ()=>{
  //   setLoading(true);
  //   return updateProfile(auth.currentUser)
  // };
  

  const googleSignIn = () => {
    setLoading(true);
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    const GithubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, GithubProvider);
  };

  const loginUser = (email, password) => {
    setLoading (true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading (false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { registerUser, user, logOut, loginUser, loading, googleSignIn, githubSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
