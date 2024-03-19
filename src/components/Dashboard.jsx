import { NavLink, Outlet } from "react-router-dom"

export const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='settings'>Settings</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
