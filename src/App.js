import './App.css';
import React from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes, Route
}from 'react-router-dom'


 const App =()=>{
    return (
     <div>
      <Router>
      <Routes>
          <Route exact path='/' element={<News category="general" title="Top Headlines"/>} />
          <Route exact path='/business' element={<News category="business"title="Bussiness Related" />} />
          <Route exact path='/entertainment' element={<News category="entertainment"title="Entertainment Realated" />} />
          <Route exact path='/sports' element={<News category="sports"title="Sports Related" />} />
          <Route exact path='/health' element={<News category="health"title="Health Related" />} />
          <Route exact path='/technology' element={<News category="technology" title="Technology Related"/>} />
          <Route exact path='/science' element={<News category="science"title="Science Related" />} />
        </Routes>
      </Router>
     </div>
    )
  }
export default App

