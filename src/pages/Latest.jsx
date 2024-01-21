import Article from "../components/Article";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
        <Link to="/articles/1" className="flex">
          <div className="border-2 black-white rounded-2xl w-full dark:hover:border-slate-500 transition duration-150">
            <div className="card-body">
              <Article
                title="Integrating the Science of How We Learn into Education Technology"
                description="For well over 100 years, researchers have labored tirelessly to understand how humans learn and remember. The resulting scientific literature is impressive, both in its scope and its depth. In fact, so much is now known that I doubt that any human could read and absorb all that has been written on the subject. The sad irony, though, is that it’s often not obvious how to use the findings of all of this research in educational settings."
              />
            </div>
          </div>
        </Link>
        <Link to="/articles/2" className="flex">
          <div className="border-2 black-white rounded-2xl w-full dark:hover:border-slate-500 transition duration-150">
            <div className="card-body">
              <Article
                title="To Prepare for Automation, Stay Curious and Don’t Stop Learning"
                description="Earlier this year, President Trump signed an executive order for the “American AI Initiative,” to guide AI developments and investments in the following areas: research and development, ethical standards, automation, and international outreach. This initiative is indicative of the changing times, and how, as a country, the U.S. is learning to navigate the implications of AI. Leaders in the business world, specifically, are faced with the responsibility of equipping our employees with the skills necessary for paving long-lasting career paths, and the workforce must discover what will be expected as technology continues to disrupt the norm, and work as we know it."
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Latest;
