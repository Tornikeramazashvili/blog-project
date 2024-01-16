import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="flex justify-center text-center max-w-5xl mx-auto">
        <div className="mt-40">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <NavLink to="/">Back to home</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
