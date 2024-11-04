// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDxbYZPL4tZoa_fgaYZlzI1OBKi4EwpdgI",
//   authDomain: "imdb-d938d.firebaseapp.com",
//   projectId: "imdb-d938d",
//   storageBucket: "imdb-d938d.appspot.com",
//   messagingSenderId: "957972610846",
//   appId: "1:957972610846:web:d136795043f4f7f601d30f",
//   measurementId: "G-6GH4MBVJD7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytincs = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxbYZPL4tZoa_fgaYZlzI1OBKi4EwpdgI",
  authDomain: "imdb-d938d.firebaseapp.com",
  projectId: "imdb-d938d",
  storageBucket: "imdb-d938d.appspot.com",
  messagingSenderId: "957972610846",
  appId: "1:957972610846:web:d136795043f4f7f601d30f",
  measurementId: "G-6GH4MBVJD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { storage }; // Export storage to use it in other parts of your app
