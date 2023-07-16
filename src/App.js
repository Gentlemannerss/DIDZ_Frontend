import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

// Import Components
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import {useContext, useState} from "react";
import LoginOverlay from "./components/LoginOverlay/LoginOverlay";
import {AuthContext} from "./context/AuthContext";

//Import Pages for Routes:
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import StudyGroup from "./pages/StudyGroup/StudyGroup"
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products"
import Review from "./pages/Review/Review"
import MessageBoard from "./pages/MessageBoard/MessageBoard"
import Message from "./pages/Message/Message"
import Invoice from "./pages/Invoice/Invoice";

function App() {
    const { isAuth, logout } = useContext(AuthContext);
    const [isLoginOverlayOpen, setIsLoginOverlayOpen] = useState(false);

    const openLoginOverlay = () => {
        setIsLoginOverlayOpen(true);
    };

    const closeLoginOverlay = () => {
        setIsLoginOverlayOpen(false);
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <div className="app-container">
            <Navigation isAuth={isAuth.isAuth} openLoginOverlay={openLoginOverlay} handleLogout={handleLogout}/>
            {isLoginOverlayOpen && <LoginOverlay onClose={closeLoginOverlay} />}
            <main className="mainContainer">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/products" element={<Products/>}/>

                    {/* Authorized pages */}
                    <Route path="/profile" element={isAuth.isAuth ? <Profile/> : <Navigate to="/"/>} />
                    <Route path="/invoice" element={isAuth.isAuth ? <Invoice/> : <Navigate to="/"/>} />
                    <Route path="/studygroup" element={isAuth.isAuth ? <StudyGroup/> : <Navigate to="/"/>}/>
                    <Route path="/review" element={isAuth.isAuth ? <Review/> : <Navigate to="/"/>}/>
                    <Route path="/messageboard/:id" element={isAuth.isAuth ? <MessageBoard/> : <Navigate to="/"/>}/>
                    <Route path="/messages" element={isAuth.isAuth ? <Message/> : <Navigate to="/"/>}/>
                </Routes>
            </main>
            <Footer/>
            </div>
        </>
    );
}

export default App;
