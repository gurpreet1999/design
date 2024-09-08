import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";




import TeacherProfile from "./TeacherRegistration/TeacherProfile";
import StudentQuery from "./StudentQuery/StudentQuery";
import "./App.css"
import TeacherPanel from "./Pages/TeacherPanel/TeacherPanel";



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      
        <Toaster />
        <Suspense fallback={<div>Loading...</div>}>
        {/* <Route path="/student" element={<StudentQuery/>} />
        <Route path="/teacher" element={<TeacherProfile/>} /> */}
        <Routes>
        <Route path="/admin" element={<TeacherPanel/>} />
        </Routes>
        </Suspense>
      
      </BrowserRouter>
    </div>
  )
}

export default App