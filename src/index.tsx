import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './routes/Signin';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SignIn />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There&#39;s nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
