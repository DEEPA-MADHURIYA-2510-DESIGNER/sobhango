import React from 'react';
import './App.css';
import Display from './Component/Display/Display';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplaySummarizer from './Component/DisplaySummarizer/DisplaySummarizer';
import DisplayTranslator from './Component/DisplatTranslator/DisplayTranslator';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Display/>} />
          <Route path='/Paraphaser' element={<Display/>} />
          <Route path='/Summarizer' element={<DisplaySummarizer/>} />
          <Route path='/Translator' element={<DisplayTranslator/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
