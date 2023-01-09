import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Home from './components/Home';
import Login from './components/Login';


const App = () => {
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_SANITY_PROJECT_ID;

  useEffect(() => {
    const initClient = () => {
        gapi.client.init({
        clientId: clientId,
        scope: '',
        });
      };
      gapi.load('client:auth2', initClient);
  });

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;