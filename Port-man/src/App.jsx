import { Routes, Route } from 'react-router-dom'
import './App.css'
import market from './pages/market'

function App() {


  return (
    <>
      <Routes>
        <Route path='/market' element={<market />} />

      </Routes>
      <div>
        <h1>Portfilio Manager</h1>
        <p>Using Ai analysis and predictions of your chossen market.</p>
        <p>Let us automate research and help yo make the best decisions.</p>
      </div>
    </>
  )
}

export default App
