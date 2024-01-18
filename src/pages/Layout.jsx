import { Outlet, NavLink, Link } from "react-router-dom";
import DarkMode from "../components/DarkMode";

function Layout() {
  return (
    <>
      <div className="flex items-center justify-between max-w-5xl mx-auto mt-10">
        <nav className="navbar">
          <ul className="flex space-x-12 ">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      borderBottom: "1px solid currentColor",
                    }
                  : {}
              }
            >
              educationX
            </NavLink>
            <li>
              <NavLink
                to="/articles"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between w-32">
          <DarkMode />
          <Link to="/sign_in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <a
            href="https://github.com/Tornikeramazashvili/blog-project"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
