import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut
} from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    /*  const [isLoading, setIsLoading] = useState(true); */

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //create user
    const registerUser = (email, password, name, history) => {
        /* setIsLoading(true); */
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name }
                //Save User Data to the database
                userDataCollect(email, name, 'POST');
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
        /* .finally(() => setIsLoading(false)) */
    }

    //Google LogIn
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                userDataCollect(user.email, user.displayName, 'PUT');
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);

            });
    }

    //user login
    const loginUser = (email, password, location, history) => {
        /* isLoading(true); */
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
        /* .finally(() => setIsLoading(false)) */
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            /* setIsLoading(false); */
        });
        return () => unsubscribe;
    }, [])

    //user logout
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        /* .finally(() => setIsLoading(false)) */
    }

    const userDataCollect = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;