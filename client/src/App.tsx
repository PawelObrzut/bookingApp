import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Header from './components/Header/Header';
import MenuModal from './components/MenuModal/MenuModal';

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuModal />
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
