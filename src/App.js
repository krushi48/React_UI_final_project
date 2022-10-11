import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";

function App() {
  return (
    <div className="App">
     This is blank page
     <Routes>
      <Route index element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
