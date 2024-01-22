import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../services/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");
  // Reference to the "posts" collection in the Firestore database

  // Function to create a new blog post and add it to the Firestore database
  const createPost = async () => {
    try {
      setLoading(true);
      await addDoc(postsCollectionRef, {
        title,
        post,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  // checks if the user is authenticated when the component mounts
  useEffect(() => {
    if (!isAuth) navigate("/sign_in");
  }, [isAuth, navigate]);

  return (
    <>
      {loading ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto mt-20 px-2 overflow-hidden mb-10">
          <div className="mb-3">
            <h2 className="mb-2.5">Blog Title</h2>
            <div>
              <input
                required
                type="text"
                placeholder="Enter your blog title"
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
                required
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
      )}
    </>
  );
}

export default CreatePost;
