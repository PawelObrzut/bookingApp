import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './styles/global.scss';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
