import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";

import { authContext, Authprovider } from "./context/auth";

import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ForgotPassword from "./pages/forgot password";
import InviteModal from "./pages/modals/inviteModal";
import ModalAddFile from "./pages/modals/dropzoneModal";
import HomeDontLogged from "./pages/homes/homeDontLogged";


import HeaderLogged from "./components/headers/headerLogged";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(authContext);
    if (!authenticated) return <Navigate to={"/"} />;

    return children;
  };

  return (
    <Router>
      <Authprovider>
        <Routes>
          <Route exact path="/" element={<HomeDontLogged/>}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="/home"
            element={
              <Private>
                <HeaderLogged/>
              </Private>
            }
          ></Route>
          <Route
            path="/seestudents"
            element={<InviteModal></InviteModal>}
          ></Route>
          <Route
            path="/library"
            element={<ModalAddFile></ModalAddFile>}
          ></Route>
        </Routes>
      </Authprovider>
    </Router>
  );
};

export default AppRoutes;
