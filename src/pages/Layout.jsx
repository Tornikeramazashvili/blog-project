import { Outlet, NavLink } from "react-router-dom";
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
              Home
            </NavLink>
            <li>
              <NavLink
                to="/latest"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/goodies"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Goodies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                      }
                    : {}
                }
              >
                Courses
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center w-20 justify-between">
          <DarkMode />
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
