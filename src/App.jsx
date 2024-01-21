import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages and components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Article from "./components/Article";
import EachArticle from "./pages/EachArticle";
import SignInForm from "./sign-in/SignInForm";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "./services/FirebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Stay logged in: Update user authentication status and store data when logged in or out
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      authUser
        ? ((localStorage.isAuth = JSON.stringify(authUser)), setIsAuth(true))
        : (localStorage.removeItem("isAuth"), setIsAuth(false));
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Log out: Sign out the current authenticated user, remove data, and navigate to the home page
  const signOutUser = async () => {
    await signOut(auth);
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/", { replace: true });
  };

  // Display loading spinner if loading is true
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            signOutUser={signOutUser}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="/articles" element={<Latest />} />
        {isAuth && <Route path="/community" element={<Community />} />}
        <Route path="/sign_in" element={<SignInForm setIsAuth={setIsAuth} />} />
        <Route path="/article" element={<Article title="" description="" />} />
        <Route path="/articles/:id" element={<EachArticle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
