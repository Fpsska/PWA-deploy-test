import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import AboutPage from './AboutPage';
import MainPage from './MainPage'

import '../App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/PWA-deploy-test" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
