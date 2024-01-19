import Article from "../components/Article";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-20 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 px-2">
        <Link to="/articles/1" className="flex">
          <div className="border-2 black-white rounded-2xl w-full dark:hover:border-slate-500 transition duration-150">
            <div className="card-body">
              <Article
                title="2024 and the future of education"
                description="Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their.."
              />
            </div>
          </div>
        </Link>
        <Link to="/articles/2" className="flex">
          <div className="border-2 black-white rounded-2xl w-full dark:hover:border-slate-500">
            <div className="card-body">
              <Article
                title="2024 and the future of education"
                description="Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their.."
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Latest;
