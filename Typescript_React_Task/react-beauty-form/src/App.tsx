import React from "react";
import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Pages/Login/Login";
import { Register } from "./Components/Pages/Register/Register";
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </div>
    );
}
