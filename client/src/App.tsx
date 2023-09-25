import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import Repertoire from "./app/containers/Repertoire/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/repertoire' element={<Repertoire />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
