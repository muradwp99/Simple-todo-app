import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TodoFunction from "./Todo/TodoFunction";
import Login from "./Login/Login";
import SignUp from "./Signup/Signup";

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PrivateRoute>
          <TodoFunction></TodoFunction>
        </PrivateRoute>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;