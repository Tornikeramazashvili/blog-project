import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import { Link } from "react-router-dom";

function Home() {
  const [postList, setPostList] = useState([]);
  // Firestore collection reference for posts
  const postsCollectionRef = collection(db, "posts");

  // Effect to fetch posts from Firestore when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postsCollectionRef]);

  return (
    <>
      <div className="px-2 max-w-5xl mx-auto mt-10  lg:mt-20">
        <div className="my-20 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-none  md:text-5xl lg:text-5xl font-black-white text-left">
            What is educationX?
          </h1>
          <p className="text-lg font-normal lg:text-xl font-black-white text-justify">
            This is a place where you can read and write your thoughts on
            education. educationX is all about freedom to learn, freedom to
            share, and freedom to use this blog however you want. Whether you
            are a student, educator, or lifelong learner, feel free to explore.
            and make educationX your own. Log in and write your thoughts.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-10">
          {postList.map((post, index) => (
            <Link key={index} to={`/post/${post.id}`}>
              <article className="overflow-hidden line-clamp-1 transform transition-transform duration-300 hover:scale-105">
                <h2 className="mb-4 text-2xl font-normal font-black-white truncate">
                  {post.title}
                </h2>
                <p className="mb-5 font-black-white truncate">{post.post}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-normal font-black-white truncate">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
