import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMEIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const signUp = async (name, email, password) => {
 await createUserWithEmailAndPassword(auth, email, password)
 await updateCurrentUser(auth, {displayName: name})
}

export const signIn = async (email, password) => {
 signInWithEmailAndPassword(auth, email, password)
}