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
      <div className="max-w-5xl mx-auto text-justify px-2 leading-2 mt-20 ">
        {postList.map((post, index) => (
          <p key={index}>{post.title}</p>
        ))}
      </div>
    </>
  );
}

export default Home;
