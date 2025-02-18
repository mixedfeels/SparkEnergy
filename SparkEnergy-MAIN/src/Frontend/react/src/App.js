import GlobalStyles from "./styles/GlobalStyles";

import Home from "./pages/Home";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Calculo from "./pages/Calculo";
import SparkPost from "./pages/posts/SparkPost";
import SparkConnect from "./pages/posts/SparkConnect";
import Post from "./pages/posts/Post";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ValidLogin from "./pages/ValidLogin";
import ValidSignUp from "./pages/ValidSignUp";
import PageNotFound from "./pages/PageNotFound";
import ChangePassword from "./pages/ChangePassword";
import Ods from "./components/Home/Ods";
import Profile from "./pages/Profile";
import EnergyPage from "./pages/EnergyPage"; 


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { AuthContext } from "./Helpers/AuthContext";
import { useState } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    // Verifica o token de autenticação apenas uma vez quando o componente for montado
    axios
      .get("https://sparkenergy-api.onrender.com/user/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []); // O useEffect é chamado apenas uma vez na montagem do componente

  return (
    <div>
      <div>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ods" element={<Ods />} />
              <Route path="/calculo" element={<Calculo />} />
              <Route path="/SparkPost" element={<SparkPost />} />
              <Route path="/SparkConnect" element={<SparkConnect />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/validLogin" element={<ValidLogin />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/validSignUp" element={<ValidSignUp />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/energypage" element={<EnergyPage />} />
              <Route path="/energypage" element={<EnergyPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
