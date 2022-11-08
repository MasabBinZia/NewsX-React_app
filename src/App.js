import './App.css';
import React  from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



const App =()=> {

  const pageSize = 100;

  
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<News key="general" pageSize={pageSize} country="us" category="general" />}></Route>
          <Route path="/business" element={<News key="business" pageSize={pageSize} country="us" category="business" />} ></Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} ></Route>
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="us" category="health" />}></Route>
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="us" category="science" />} ></Route>
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="us" category="sports" />}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="us" category="technology" />}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App