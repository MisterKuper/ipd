import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./pages/Login/Login";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import RegistrationPopup from "./components/RegistrationPopup/RegistrationPopup";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from "./pages/Home/Home.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import OneChoiceTask from "./components/Games/OneChoiceTask/OneChoiceTask.js";
import TaskLayout from "./components/TaskLayout/TaskLayout.js";
import LessonLayout from "./components/LessonLayout/LessonLayout.js";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="App">
          <Routes location={location} key={location.key}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                </PrivateRoute>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <PrivacyPolicy />
                </motion.div>
              }
            />
            <Route
              path="/terms"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TermsOfUse />
                </motion.div>
              }
            />
            <Route
              path="/registration"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <RegistrationPopup />
                </motion.div>
              }
            />
            <Route
              path="/login"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <LoginPopup />
                </motion.div>
              }
            />
            <Route
              path="/lesson/:lessonId"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <LessonLayout />
                </motion.div>
              }
            />
            <Route
              path="/task/:taskId"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TaskLayout />
                </motion.div>
              }
            />
            {/* <Route
              path="/onechoicetask"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <OneChoiceTask />
                </motion.div>
              }
            /> */}
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
