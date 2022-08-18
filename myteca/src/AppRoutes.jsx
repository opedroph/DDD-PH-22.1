import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import { useContext } from 'react';

import { authContext, Authprovider } from './context/auth';

import Login from "./components/login";
import SignUp from "./components/signUp";
import ForgotPassword from "./components/forgot password";
import Home from './components/home';

const AppRoutes = () => {

    const Private = ({children}) =>{
        const {authenticated} = useContext(authContext)
         if(!authenticated)
            return <Navigate to={'/'} />
        
            return children;
    }

    return (
        <Router>
            <Authprovider>
            <Routes>
                <Route exact path='/' element={<Login/>}></Route>
                <Route path='/signup' element= {<SignUp/>}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
                <Route path='/home' element= {<Private><Home/></Private>}></Route>
            </Routes>
            </Authprovider>
        </Router>
        
    );
}

export default AppRoutes;