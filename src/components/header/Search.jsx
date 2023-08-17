import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import placeholder from './search-placeholder';

const Search = ({ searching, changeSearchValue }) => {
  const searchArea = useRef();
  const location = useLocation();
  const [searchPlaceholder, setSearchPlaceholder] = useState();

  const emptyControl = (e) => {
    e.preventDefault();
    const userInput = searchArea.current.value.trim();

    if (userInput) {
      changeSearchValue(userInput);
    } else {
      searchArea.current.value = '';
      searchArea.current.focus();
      changeSearchValue('');
    }
  };

  useEffect(() => {
    const currentPath = placeholder[location.pathname];
    setSearchPlaceholder(currentPath);
    searchArea.current.value = '';
    changeSearchValue('');
  }, [location]);

  return (
    <div className='search-container'>
      <form className='search'>
        <button className='search-icon' type='submit' onClick={emptyControl}>
          <FiSearch />
        </button>
        <input
          type='text'
          className='search-area'
          placeholder={`Search for ${searchPlaceholder}`}
          ref={searchArea}
        />
      </form>
    </div>
  );
};

export default Search;
