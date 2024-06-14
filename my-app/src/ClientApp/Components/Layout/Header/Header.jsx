import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Where in the world?</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
