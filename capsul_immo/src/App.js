import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./component/Navbar"
import Hero from './component/Hero'
import Home from './component/Home'
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Hero />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
