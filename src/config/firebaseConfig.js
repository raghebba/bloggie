import { initializeApp } from "firebase/app";
import { getDatabase, push, ref,onValue } from "firebase/database";
import { getAuth, signInAnonymously,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgWRGLZPCVwEjMMgdJEAS5uhkwjlL2kEw",
  authDomain: "bloggie-33360.firebaseapp.com",
  databaseURL: "https://bloggie-33360-default-rtdb.firebaseio.com",
  projectId: "bloggie-33360",
  storageBucket: "bloggie-33360.appspot.com",
  messagingSenderId: "931052066305",
  appId: "1:931052066305:web:d9d6a80ff6b5ac4a195200",
  measurementId: "G-SPG9Q8JL25",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);



const auth = getAuth(firebaseApp);


export const loginAnyonymously = ({setIsLoading}) => {
  setIsLoading(true)
  signInAnonymously(auth)
    .then(() => {
      alert("User signed in ");
      setIsLoading(false)
    })
    .catch((error) => {
      setIsLoading(false)
      alert("Error signing in anonymously: ", error);
    });
};

export const signOutAnyonymously = () =>{
  signOut(auth)
  .then(()=>{
    console.log("Logout successful")
  }).catch((error)=>{
  console.error("logout failed",error)
  })
}



export { database, push, ref ,onValue};
