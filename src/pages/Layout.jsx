import { Outlet, NavLink } from "react-router-dom";
import DarkMode from "../components/DarkMode";


function Layout() {
  return (
    <>
      <div className="flex items-center justify-between max-w-5xl mx-auto mt-16 ">
        <nav>
          <ul className="flex space-x-12">
            <li>
              <NavLink to="/">Logo</NavLink>
            </li>
            <li>
              <NavLink to="/latest">Latest</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/goodies">Goodies</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
          </ul>
        </nav>
        <DarkMode />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
