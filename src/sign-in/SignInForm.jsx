import { auth, provider } from "../services/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SignInForm({ setIsAuth }) {
  let navigate = useNavigate();

  // Function to sign in with Google using Firebase authentication
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/create_post");
    });
  };

  return (
    <>
      <div className="hero min-h-screen0 max-w-5xl mx-auto mt-20 px-2">
        <div className="flex items-center justify-center ">
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 border flex gap-2 border-slate-20 dark:hover:border-slate-500 rounded-lg"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="Google"
            />
            <span className="text-white-black">Sign in with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}

SignInForm.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};

export default SignInForm;
