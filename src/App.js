import {Route, Routes } from "react-router-dom";
import './App.css';

// Import Components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

//Import Pages for Routes:
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import StudyGroup from "./pages/StudyGroup/StudyGroup"
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products"
import Login from "./pages/AuthPages/Login"
import SignUp from "./pages/AuthPages/SingUp"
import Review from "./pages/Review/Review"
import MessageBoard from "./pages/MessageBoard/MessageBoard"
import Message from "./pages/Message/Message"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            {/* Authorized pages */}
            <Route path="/profile" element={<Profile />}/>
            <Route path="/study group" element={<StudyGroup />}/>
            <Route path="/review" element={<Review />}/>
            <Route path="/message board" element={<MessageBoard />}/>
            <Route path="/messages" element={<Message />}/>
        </Routes>
      </main>
      <Footer />
      </>
  );
}

export default App;
