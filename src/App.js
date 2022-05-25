
import './App.css';

import {Route, Routes} from 'react-router-dom';

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import AddLoginComponent from "./components/AddLoginComponent";
import ResetPassword from "./components/ResetPassword";
import {FooterComponent} from "./components/FooterComponent";
import {HeaderComponent} from "./components/HeaderComponent";

function App() {
    return (
        <>

            <HeaderComponent/>
            <Routes>
                <Route exact path="/" element={<Welcome/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/home/:uid/*" element={<Home/>}/>
                <Route path="/add-Login" element={<AddLoginComponent/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                
            </Routes>
            <FooterComponent/>
        </>
    );
}

export default App;
