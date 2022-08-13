import {BrowserRouter as Router, Route, Routes, navigate} from 'react-router-dom'

import Login from "./components/login";
import SignUp from "./components/signUp";
import ForgotPassword from "./components/forgot password";
import Home from './components/home';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>}></Route>
                <Route path='/signup' element= {<SignUp/>}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
                <Route path='/home' element= {<Home/>}></Route>
            </Routes>
        </Router>
        
    );
}

export default AppRoutes;