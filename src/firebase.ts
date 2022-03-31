import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FS_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FS_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FS_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FS_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FS_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FS_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FS_MEASURED_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const twitterProvider = new TwitterAuthProvider();
