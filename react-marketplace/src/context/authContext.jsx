import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';
import { auth } from '../services/fireBaseConfig'

export const authContext = createContext();

export const useAuth = () => {
const context = useContext(authContext) 
if (!context) throw new Error("There is no AuthProvider")
    return context
}

export function AuthProvider({children}) {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    //registrar
    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    //acessar
    const signin = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth)

    useEffect(() => {
        const unsub =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsub();
    }, [])

    return <authContext.Provider value={{signup, signin, user, logout, loading}}>{children}</authContext.Provider>;
}