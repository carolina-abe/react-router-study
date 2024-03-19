import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/tasks/1'>Tasks 1</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to='/items/1'>Items</NavLink>
        </li>
      </ul>
    </nav>
  )
}
