import { auth, provider } from "../services/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignInForm({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((results) => {
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
              alt="google logo"
            />
            <span className="text-white-black">Sign in with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
