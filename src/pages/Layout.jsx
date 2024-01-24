import { Outlet, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import DarkMode from "../components/DarkMode";

function Layout({ isAuth, signOutUser }) {
  return (
    <>
      <div className="flex items-center justify-between max-w-5xl mx-auto mt-10">
        <nav className="navbar">
          <ul className="flex space-x-12 ">
            <NavLink
              to="/"
              className="font-normal"
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
                className="font-normal"
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
                className="font-normal"
                to="/create_post"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  borderBottom: isActive ? "1px solid currentColor" : "none",
                })}
              >
                Create Post
              </NavLink>
            )}
          </ul>
        </nav>
        <div className="flex items-center justify-between w-36 pr-2">
          {!isAuth ? (
            <NavLink
              to="/sign_in"
              className="font-normal"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      borderBottom: "1px solid currentColor",
                    }
                  : {}
              }
            >
              Log in
            </NavLink>
          ) : (
            <button onClick={signOutUser}>Log out</button>
          )}

          <DarkMode />
        </div>
      </div>
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func,
};

export default Layout;
