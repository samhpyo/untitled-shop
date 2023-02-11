/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAot0Rkg_hy7vygHjYUdduxgkn7flBMmM',
  authDomain: 'untitled-shop.firebaseapp.com',
  projectId: 'untitled-shop',
  storageBucket: 'untitled-shop.appspot.com',
  messagingSenderId: '786706699537',
  appId: '1:786706699537:web:7c714f159ff76d8c1228b0',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
         await setDoc(userDocRef, {
            displayName, email, createdAt
         })
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
