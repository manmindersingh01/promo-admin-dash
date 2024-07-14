import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
const FirebaseContext = createContext(null);


const firebaseConfig = {
  apiKey: "AIzaSyB4BzIDDI0Gwdofz41SWyFiV6gN6rDjYcg",
  authDomain: "promo-8ece0.firebaseapp.com",
  projectId: "promo-8ece0",
  storageBucket: "promo-8ece0.appspot.com",
  messagingSenderId: "1001685262926",
  appId: "1:1001685262926:web:66f5f5894c5179ea97d91f",
  measurementId: "G-6CC5GVMEJZ"
};
const app = initializeApp(firebaseConfig);

export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider>
      {props.children}
    </FirebaseContext.Provider>
  )
}