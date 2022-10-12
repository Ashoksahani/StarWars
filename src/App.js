
import './App.css';
import AllCharacters from './component/AllCharacters.js';
import Details from './component/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 



function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<AllCharacters />} /> 
        <Route exact path="/people/:id" element={<Details />} /> 
     
       {/* <Route  exact path="/" element={<Films />} />  */}
      </Routes>
      
      </Router>
 
  );
}

export default App;
