import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="global-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
