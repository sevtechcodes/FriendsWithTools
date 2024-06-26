import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,


  // apiKey: "AIzaSyDaTw0YKeupH65ityFNyalSZurZCBS5paE",
  // authDomain: "friends-with-tools.firebaseapp.com",
  // projectId: "friends-with-tools",
  // storageBucket: "friends-with-tools.appspot.com",
  // messagingSenderId: "404193361474",
  // appId: "1:404193361474:web:aa22adabb076a0e91df7db",
  // measurementId: "G-VQ1NMT4M1G"


};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };