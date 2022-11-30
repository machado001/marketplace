// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCivo4hRkWD8wrvkIxZJanDO5PXd9iUiLU',
  authDomain: 'auth-mktplace.firebaseapp.com',
  projectId: 'auth-mktplace',
  storageBucket: 'auth-mktplace.appspot.com',
  messagingSenderId: '564694763378',
  appId: '1:564694763378:web:e8ba2f8683992b10d83feb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
