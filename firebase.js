
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9EGqNIPLXCGPFdH-FcGzTk1nq20fSmIM",
  authDomain: "testing-purpose-dbf6d.firebaseapp.com",
  projectId: "testing-purpose-dbf6d",
  storageBucket: "testing-purpose-dbf6d.appspot.com",
  messagingSenderId: "114118761006",
  appId: "1:114118761006:web:5c1b94ed7faee0ce781dbf",
  measurementId: "G-YE6JMB3851"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
