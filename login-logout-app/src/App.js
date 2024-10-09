import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <header className="navigation">
        <nav>
          <span>Navigation</span>
          {isLoggedIn ? (
            <button onClick={handleLogout} style={{marginLeft:"870px",borderRadius:"7px"}} >Logout</button>
          ) : (
            <button onClick={handleLogin}  style={{marginLeft:"870px",borderRadius:"7px"}} >Login</button>
          )}
        </nav>
      </header>
      <main className="views">
        {isLoggedIn ? <PrivateViews /> : <PublicViews />}
      </main>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
};

const PublicViews = () => {
  return <div>Public Views</div>;
};

const PrivateViews = () => {
  return <div>Private Views</div>;
};

export default App;