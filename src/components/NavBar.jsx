import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-links'>
        <li>
          <NavLink 
            to='/' 
            className={({isActive}) => isActive && 'active'}
          >
            All Tasks
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/completedTasks'
            className={({isActive}) => isActive && 'active'}
          >
            Completed Tasks
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar