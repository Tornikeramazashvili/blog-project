import { useParams, NavLink } from "react-router-dom";
import ArticleOne from "../assets/images/ArticleOne.png";

const articlesData = [
  {
    image: ArticleOne,
    id: 1,
    title: "2024 and the future of education",
    description:
      "The biggest difference between ChatGPT and Bard is the Large Language Models (LLMs) they are powered by. ChatGPT uses the Generative Pre-trained Transformer 4 (GPT-4), while Bard uses the Language Model for Dialogue Applications (LaMBDA). Also, ChatGPT is developed by OpenAI, while Bard was built by Google.",
  },
  {
    id: 2,
    title: "Scrum vs. SAFe: Which Agile framework is right for your team?",
    description:
      "Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their..",
  },
];

function EachArticle() {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === Number(id));

  return (
    <div className="max-w-5xl mx-auto mt-14">
      {article ? (
        <>
          {/* <img src={article.image} alt={article.title} className="w-full h-auto object-cover" /> */}
          <h2 className="text-4xl font-medium">{article.title}</h2>
          <p className="mt-8">{article.description}</p>
        </>
      ) : (
        <div className="flex justify-center text-center max-w-5xl mx-auto">
          <div className="mt-40">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Article was not found
            </h1>
            <div className="mt-10">
              <NavLink to="/">Back to home</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EachArticle;
