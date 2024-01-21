import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../services/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Community({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  // Reference to the "posts" collection in the Firestore database
  const postsCollectionRef = collection(db, "posts");

  // Function to create a new blog post and add it to the Firestore database
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  // checks if the user is authenticated when the component mounts
  useEffect(() => {
    if (!isAuth) {
      navigate("/sign_in");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <div className="max-w-5xl mx-auto mt-20 px-2 overflow-hidden">
        <div className="mb-3">
          <h2 className="mb-2.5">Blog Title</h2>
          <div>
            <input
              type="text"
              placeholder="Enter you blog title"
              className="input input-bordered w-full"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="flex flex-col">
            <h2 className="mb-2.5">Blog Post</h2>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Share your thoughts and insights here"
              onChange={(event) => {
                setPost(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <button className="btn w-full" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </>
  );
}

export default Community;
