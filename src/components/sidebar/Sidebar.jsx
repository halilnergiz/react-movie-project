import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { AiFillAppstore } from 'react-icons/ai';
import { MdLocalMovies, MdMovie } from 'react-icons/md';
import { PiTelevision } from 'react-icons/pi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';

const Sidebar = () => {
  const [checkState, setCheckState] = useState('/');

  const handleCheck = (e) => {
    setCheckState(e.target.value);
  };

  return (
    <section className='sidebar-container'>
      <div className='sidebar'>
        <div className='top'>
          <div className='logo'>
            <MdMovie />
          </div>

          <ul className='item-list'>
            <SidebarItem
              id={'item-store'}
              onChange={handleCheck}
              checked={checkState}
              route={'/'}
              icon={<AiFillAppstore />}
            />
            <SidebarItem
              id={'item-movies'}
              onChange={handleCheck}
              checked={'/movies'}
              route={'/movies'}
              icon={<MdLocalMovies />}
            />
            <SidebarItem
              id={'item-series'}
              onChange={handleCheck}
              checked={'/tv-series'}
              route={'/tv-series'}
              icon={<PiTelevision />}
            />
            <SidebarItem
              id={'item-mark'}
              onChange={handleCheck}
              checked={'/bookmarked'}
              route={'/bookmarked'}
              icon={<BsFillBookmarkFill />}
            />
          </ul>
        </div>

        <div className='bottom'>
          <div className='user-profile'>
            <BiSolidUserCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
