import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";




import TeacherProfile from "./TeacherRegistration/TeacherProfile";
import StudentQuery from "./StudentQuery/StudentQuery";
import "./App.css"
import TeacherPanel from "./Pages/TeacherPanel/TeacherPanel";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import BecomeATutor from "./Pages/BecomeATutor/BecomeATutor";
import HowItWork from "./Pages/HowItWork/HowItWork";
import TermAndCondition from "./Pages/TermAndCondition/TermAndCondition";



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      
        <Toaster />
        <Suspense fallback={<div>Loading...</div>}>
      
        <Routes>
      
        {/* <Route path="/" element={<TeacherPanel/>} />
        <Route path="/admin" element={<AdminPanel/>} /> */}
        {/* <Route path="/" element={<HowItWork/>} />
        <Route path="/" element={<TermAndCondition/>} /> */}

{/* <Route path="/" element={<StudentQuery/>} /> */}

<Route path="/" element={<TeacherProfile/>} />
        </Routes>
        </Suspense>
      
      </BrowserRouter>
    </div>
  )
}

export default App