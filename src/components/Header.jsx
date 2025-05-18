import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
    <h1 className="text-xl font-bold">Remote Health Dashboard</h1>
    <DarkModeToggle />
  </div>
);

export default Header;