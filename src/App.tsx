import React from 'react';
import './App.css';
import QRBox from './routes/QRBox';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Colorado Aware</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Signin</Link> |{" "}
        <Link to="impact">Impact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
