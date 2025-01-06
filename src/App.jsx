import React from 'react';
import Home from './home/Home';
import Essentials from './components/courses/Essentials';
import Mores from './content/Mores';


import {Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import Assignments from './content/Assignments';
import Notes from './content/Notes';
import SupportUs from './content/SupportUs';
import ToolKit from './content/ToolKit';
import JoinUs from './content/JoinUs';

function App() {
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Home></Home>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Essentials" element={<Essentials/>}/>
        <Route path="/Tools" element={<ToolKit/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/Assignments" element={<Assignments/>} />
        <Route path="/Notes" element={<Notes/>} />
        <Route path="/mores" element={<Mores/>} />
        <Route path="/SupportUs" element={<SupportUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
      </Routes> */}
      </div>
      
      
    </>
  );
}

export default App;
