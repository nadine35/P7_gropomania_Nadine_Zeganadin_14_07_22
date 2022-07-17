import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location = "/";
      };

  return (
    <li onClick={handleLogout}>
        <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;
