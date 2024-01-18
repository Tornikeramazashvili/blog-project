import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<Latest />} />
          <Route path="/community" element={<Posts />} />
          <Route path="/goodies" element={<Goodies />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/sign_in" element={<SignInForm />} />
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
