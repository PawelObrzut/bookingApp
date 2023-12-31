import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Repertoire from "./app/containers/Repertoire/index";
import NotFound from './app/components/NotFound/NotFound';
import Login from "./app/containers/LogIn/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Repertoire />}></Route>
          <Route path='/repertoire' element={<Repertoire />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
