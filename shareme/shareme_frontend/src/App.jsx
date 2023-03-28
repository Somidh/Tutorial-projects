import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./component/Login";

const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}
    >
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
