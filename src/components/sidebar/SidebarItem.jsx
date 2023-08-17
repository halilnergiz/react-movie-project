import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SidebarItem = ({
  id,
  checked,
  onChange,
  route,
  icon,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <li className='item'>
      <input
        type='radio'
        id={id}
        name='sidebar-option'
        className='sidebar-checkbox'
        onChange={onChange}
        checked={location.pathname === checked}
      />
      <label htmlFor={id} onClick={() => navigate(route)}>
        {icon}
      </label>
    </li>
  );
};

export default SidebarItem;
