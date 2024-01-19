import { Outlet, NavLink, Link } from "react-router-dom";
import DarkMode from "../components/DarkMode";

function Layout({ isAuth, setIsAuth, signOutUser }) {
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

            {isAuth && (
              <NavLink
                to="/community"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  borderBottom: isActive ? "1px solid currentColor" : "none",
                })}
              >
                Community
              </NavLink>
            )}
          </ul>
        </nav>
        <div className="flex items-center justify-between w-32">
          {!isAuth ? (
            <Link to="/sign_in">LOG IN</Link>
          ) : (
            <button onClick={signOutUser}>LOG OUT</button>
          )}
          <DarkMode />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
