import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Components/Firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user ,  setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    const provider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
     }

     const createGoogleUser = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
     }

     const UserLogIn = (email ,password) =>{
        setLoading(true)
    
        return signInWithEmailAndPassword( auth , email ,password);
    
     }

     const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser , updateData);
      }

      const userLogOut = () => {
        return signOut(auth);
      }

    const authInfo = {

        user ,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        createGoogleUser,
        UserLogIn,
        userLogOut

    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
    
        return () =>{
            unSubscribe();
        }
      },[])

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
      );
};

export default AuthProvider;