import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

function PostDetails() {
  const [postDetails, setPostDetails] = useState({});
  const { postId } = useParams();

  // Effect to fetch post details when postId changes
  useEffect(() => {
    // Create Firestore document reference based on postId
    const postDocRef = doc(db, "posts", postId);
    // Function to fetch post details from Firestore
    const getPost = async () => {
      try {
        const docSnap = await getDoc(postDocRef);

        if (docSnap.exists()) {
          setPostDetails({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    };

    getPost();
  }, [postId]);

  // Destructure properties from postDetails for easier use in JSX
  const { title, post, author } = postDetails;

  return (
    <>
      <div className=" max-w-5xl mx-auto mt-20  lg:mt-20 px-2">
        <h2 className="text-xl font-bold leading-tight xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl">
          {title}
        </h2>
        <p className="my-5 sm:text-xl md:text-xl lg:text-xl text-justify">
          {post}
        </p>
        <p className="my-5 sm:text-xl md:text-xl lg:text-xl text-justify">
          {author?.name}
        </p>
      </div>
    </>
  );
}

export default PostDetails;
