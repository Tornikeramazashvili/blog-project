import { useParams } from "react-router-dom";

const articlesData = [
  {
    id: 1,
    title: "ChatGPT Vs Bard: Which is better for coding?",
    description:
      "We test out which tool is best at code generation, problem solving, refactoring code, providing debugging assistance..",
  },
  {
    id: 2,
    title: "Scrum vs. SAFe: Which Agile framework is right for your team?",
    description:
      "Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their..",
  },
  {
    id: 3,
    title: "Cloud computing challenges and opportunities for the public sector",
    description:
      "A look at the current challenges and opportunities facing public sector organizations as they hope to adopt cloud...",
  },
];

function EachArticle() {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === Number(id));

  return (
    <div>
      {article ? (
        <>
          <h1>Article: {article.id}</h1>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </>
      ) : (
        <p>Article was not found</p>
      )}
    </div>
  );
}

export default EachArticle;
