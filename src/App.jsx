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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/goodies" element={<Goodies />} />
          <Route path="/courses" element={<Courses />} />

          <Route
            path="/article"
            element={<Article title="" description="" />}
          />
          <Route path="/article/:id" element={<EachArticle />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
