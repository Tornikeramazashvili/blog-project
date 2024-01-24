import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../services/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreatePost = ({ isAuth }) => {
  const [formData, setFormData] = useState({ title: "", post: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");
  const [validationErrors, setValidationErrors] = useState({});

  // Function to validate form fields
  const validateForm = () => {
    const { title, post } = formData;
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title cannot be empty";
    if (!post.trim()) newErrors.post = "Post cannot be empty";

    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to create a new post
  const createPost = async () => {
    try {
      if (!validateForm()) return;

      setLoading(true);

      // Add new post to Firestore
      await addDoc(postsCollectionRef, {
        ...formData,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });

      // Navigate to the home page after successful post creation
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  // Effect to redirect to sign-in page if user is not authenticated
  useEffect(() => {
    if (!isAuth) navigate("/sign_in");
  }, [isAuth, navigate]);

  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
                name="title"
                placeholder="Enter your blog title"
                className={`input input-bordered w-full ${
                  validationErrors.title ? "border-red-500" : ""
                }`}
                value={formData.title}
                onChange={handleChange}
              />
              {validationErrors.title && (
                <p className="text-red-500 mt-1 text-sm">
                  {validationErrors.title}
                </p>
              )}
            </div>
          </div>
          <div className="mb-3">
            <div className="flex flex-col">
              <h2 className="mb-2.5">Blog Post</h2>
              <textarea
                required
                name="post"
                className={`textarea textarea-bordered h-24 ${
                  validationErrors.post ? "border-red-500" : ""
                }`}
                placeholder="Share your thoughts and insights here"
                value={formData.post}
                onChange={handleChange}
              ></textarea>
              {validationErrors.post && (
                <p className="text-red-500 mt-1 text-sm">
                  {validationErrors.post}
                </p>
              )}
            </div>
          </div>
          <button className="btn w-full" onClick={createPost}>
            Submit Post
          </button>
        </div>
      )}
    </>
  );
};

CreatePost.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default CreatePost;
