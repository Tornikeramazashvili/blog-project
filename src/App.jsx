import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Posts from "./pages/Posts";
import Goodies from "./pages/Goodies";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import Article from "./components/Article";
import EachArticle from "./pages/EachArticle";
import SignInForm from "./sign-in/SignInForm";

import { signOut } from "firebase/auth";
import { auth } from "./services/FirebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      navigate("/", { replace: true });
    });
  };
  return (
    <>
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
          {isAuth && <Route path="/community" element={<Posts />} />}
          <Route path="/goodies" element={<Goodies />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/sign_in"
            element={<SignInForm setIsAuth={setIsAuth} />}
          />
          <Route
            path="/article"
            element={<Article title="" description="" image="" />}
          />
          <Route path="/articles/:id" element={<EachArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
