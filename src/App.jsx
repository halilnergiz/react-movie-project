import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Search, Sidebar } from './components';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (input) => {
    return setSearchValue(input);
  };

  return (
    <div className='App'>
      <Sidebar />

      <section className='main-container'>
        <Search searching={searchValue} changeSearchValue={handleSearchValue} />
        <Outlet context={[searchValue, setSearchValue]} />
      </section>
    </div>
  );
};

export default App;
