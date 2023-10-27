import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Navbar} from "./component/navbar/Navbar";
import { Template1 } from './component/template1/Template1';
import { Template3 } from './component/template3/Template3';
import { Template2 } from './component/template2/Template2';
import { Template4 } from "./component/template4/Template4";
import { Template5 } from './component/template5/Template5';
import { Template6 } from './component/template6/Template6';
import { Template7 } from './component/template7/Template7';
import { Template8 } from "./component/template8/Template8";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/1' element={<Template1/>}/> 
     <Route path='/2' element={<Template2/>}/>
     <Route path='/3' element={<Template3/>}/>
     <Route path="/4" element={<Template4/>}/>
     <Route path='/5' element={<Template5/>}/> 
     <Route path='/6' element={<Template6/>}/>
     <Route path='/7' element={<Template7/>}/>
     <Route path="/8" element={<Template8/>}/>
    </Routes>  
    </>
  );
}

export default App;
