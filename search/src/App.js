import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SearchPage from './pages/searchPage'

function App () {
  return (
    <div className="App">
      <NavBar/>
      <SearchPage />
    </div>
  )
}

export default App
