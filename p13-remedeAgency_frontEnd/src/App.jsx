import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from '@/_router/PublicRouter.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
