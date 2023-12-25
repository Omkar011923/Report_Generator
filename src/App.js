import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportPage from "./pages/ReportPage";
import Layout from "./Layout";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  let User = JSON.parse(localStorage.getItem("islogged"));
  // let loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <>
      <BrowserRouter>
        {!User ? (
          <Routes>
            <Route path="/" element={<LoginPage loggedIn={setIsLogged} />} />
            <Route path="/login" element={<LoginPage loggedIn={setIsLogged} />} />
          </Routes>
        ) : (
          <Layout loggedIn={setIsLogged}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path=":name" element={<ReportPage />} />
            </Routes>
          </Layout>
        )}
      </BrowserRouter>
    </>
  );
}
