// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPaVDxSRyp2SvPHGRy8KbZ1vLMsUULg7k",
  authDomain: "crowdspring-95e1b.firebaseapp.com",
  projectId: "crowdspring-95e1b",
  storageBucket: "crowdspring-95e1b.firebasestorage.app",
  messagingSenderId: "905130630281",
  appId: "1:905130630281:web:8d7372cb84c9a6a4757a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);