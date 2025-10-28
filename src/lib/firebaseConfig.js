
import { initializeApp , getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDsrjdDRjkXmjI3OMsl78qmfZRA7GSkAq8",
  authDomain: "kinkun-pakgad-project.firebaseapp.com",
  projectId: "kinkun-pakgad-project",
  storageBucket: "kinkun-pakgad-project.firebasestorage.app",
  messagingSenderId: "548466278753",
  appId: "1:548466278753:web:037a3cc1af7f32a1dd8520",
  measurementId: "G-22SEQYCSZZ"
};


const app = !getApps().length? initializeApp(firebaseConfig): getApp();
export const firestore = getFirestore(app);