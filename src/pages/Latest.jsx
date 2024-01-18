import Article from "../components/Article";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-20 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
        <div className="border white-black rounded-2xl">
          <div className="card-body">
            <Link to="/article/1">
              <Article
                title="ChatGPT Vs Bard: Which is better for coding?"
                description="We test out which tool is best at code generation, problem solving, refactoring code, providing debugging assistance.."
              />
            </Link>
          </div>
        </div>
        <div className="border white-black rounded-2xl">
          <div className="card-body">
            <Link to="/article/2">
              <Article
                title="Scrum vs. SAFe: Which Agile framework is right for your team?"
                description="Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their.."
              />
            </Link>
          </div>
        </div>
        <div className="border white-black rounded-2xl">
          <div className="card-body">
            <Link to="/article/3">
              <Article
                title="Cloud computing challenges and opportunities for the public sector"
                description="A look at the current challenges and opportunities facing public sector organizations as they hope to adopt cloud..."
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Latest;
