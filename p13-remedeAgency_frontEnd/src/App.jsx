import './App.css'
import Test from '@/pages/Test.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
