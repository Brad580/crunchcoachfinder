import React from 'react';
import { usePageTitle } from '../PageTitleContext'; // Adjust the path as necessary

const Header = () => {
  const { title } = usePageTitle(); // Use the hook to access the title

  return (
    <header className="App-header">
      <h1>{title}</h1> {/* Dynamic title */}
    </header>
  );
};

export default Header;
