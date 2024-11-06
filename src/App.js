import React from "react";
import { Routes ,Route} from "react-router-dom";
import Admin from './Pages/AdminHome';
import '../src/index.css'
import AdminLogin from "./Pages/AdminLogin";
import AddingQuiz from "./Pages/AddingQuiz";
import AdminProfile from "./Pages/AdminProfile";




function App() {


  return (
    <Routes>
      <Route path="/admin" element={<Admin></Admin>}/>
      <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}/>
      <Route path="/addquiz" element={<AddingQuiz></AddingQuiz>}/>
      <Route path="/adminprofile" element={<AdminProfile></AdminProfile>}/>



    </Routes>
  );
}

export default App;
