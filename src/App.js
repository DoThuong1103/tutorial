import "./App.css";
import Pages from "./components/pages/Pages";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ6_eYCcCqhoesv2Z9rwf1YWkpATCbAK4",
  authDomain: "web-react1.firebaseapp.com",
  projectId: "web-react1",
  storageBucket: "web-react1.appspot.com",
  messagingSenderId: "103049409028",
  appId: "1:103049409028:web:765c64973bfa7c76bc3b51",
  measurementId: "G-BES9JZC0WR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return <Pages />;
}

export default App;
