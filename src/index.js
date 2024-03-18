import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Friends from './Pages/Friends';
import Videos from './Pages/Videos'
import Marketplaces from './Pages/Marketplaces';
import User from './Pages/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/watch" element={<Videos />} />
          <Route path="/marketplace" element={<Marketplaces />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
