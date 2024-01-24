import { Link } from "react-router-dom";
import Article from "../components/Article";
import Article1 from "../assets/images/article-1.webp";
import Article2 from "../assets/images/article-2.webp";

function Latest() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
        <Link to="/articles/1" className="flex">
          <div className=" w-full">
            <div className="card-body p-4 transform transition-transform duration-300 hover:scale-105">
              <Article
                imageUrl={Article1}
                title="What the year 2050 has in store for humankind"
                description="Forget programming - the best skill to teach children is reinvention. In this exclusive extract from his new book, the author of Sapiens reveals what 2050 has in store for humankind."
              />
            </div>
          </div>
        </Link>
        <Link to="/articles/2" className="flex">
          <div className=" w-full">
            <div className="card-body p-4 transform transition-transform duration-300 hover:scale-105">
              <Article
                imageUrl={Article2}
                title="How data could eat the world"
                description="There's an emerging market called Dataism, which venerates neither gods nor man - it worships data. From a Dataist perspective, we may interpret the entire human species as a single data-processing system, with individual humans serving as its chips. If so, we can also understand the whole of history as a process of improving the efficiency of this system, through four basic methods:"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Latest;
