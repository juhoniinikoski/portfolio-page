import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';


const App = () => {

  return (
    <Routes>
      <Route path="/work" element={<Home />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="" element={<Navigate replace to="/work" />} />
    </Routes>
  );
};

export default App;
