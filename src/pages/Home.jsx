import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

function Home() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc })));
    };
    getPosts();
  });

  return (
    <>
      <div className="px-2 max-w-5xl mx-auto mt-10  lg:mt-20">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-10">
          {postList.map((posts, index) => (
            <article className="overflow-hidden line-clamp-1" key={index}>
              <h2 className="mb-4 text-2xl font-normal font-black-white truncate">
                <a href="#">{posts.title}</a>
              </h2>
              <p className="mb-5 font-black-white truncate">{posts.post}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-normal font-black-white truncate">
                    {posts.author.name}
                  </span>
                </div>
                <a href="#" className="inline-flex items-center font-normal ">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

// {posts.author.name}
// {posts.title}
// {posts.post}
