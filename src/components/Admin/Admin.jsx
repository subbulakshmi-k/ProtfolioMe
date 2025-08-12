import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="admin">
      {isLoggedIn ? (
        <AdminDashboard onLogout={setIsLoggedIn} />
      ) : (
        <AdminLogin onLogin={setIsLoggedIn} />
      )}
    </div>
  );
};

export default Admin;
