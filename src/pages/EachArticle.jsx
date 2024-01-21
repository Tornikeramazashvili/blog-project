import { useParams } from "react-router-dom";
import articlesData from "../data/ArticlesData"; // Use PascalCase for imports
import NotFound from "../pages/NotFound";

const EachArticle = () => {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === Number(id));

  return (
    <div className="max-w-5xl mx-auto mt-14">
      {article ? (
        <>
          <h2 className=" text-2xl sm:text-3xl  font-medium px-2 text-left">
            {article.title}
          </h2>
          <div className="article-description px-2 ">{article.description}</div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default EachArticle;
