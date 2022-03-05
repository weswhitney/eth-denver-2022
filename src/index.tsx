import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Impact from './routes/Impact';
import SignIn from './routes/Signin';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SignIn />} />
          <Route path="impact" element={<Impact />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
