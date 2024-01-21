import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

function Community() {
  // const [title, setTitle] = useState("");
  // const [post, setPost] = useState("");

  // const postsCollectionRef = collection(db, "posts")

  // const createPost = async () => {
  //   await addDoc(postsCollectionRef, )
  // }

  return (
    <>
      <div className="max-w-5xl mx-auto mt-20 px-2 overflow-y-hidden">
        <div className="mb-3">
          <h2 className="mb-2.5">Blog Title</h2>
          <div>
            <input
              type="text"
              placeholder="Enter you blog title"
              className="input input-bordered w-full"
              // onChange={(event) => {
              //   setTitle(event.target.value);
              // }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="flex flex-col">
            <h2 className="mb-2.5">Blog Post</h2>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Share your thoughts and insights here"
              // onChange={(event) => {
              //   setPost(event.target.value);
              // }}
            ></textarea>
          </div>
        </div>
        <button className="btn w-full">Submit Post</button>
      </div>
    </>
  );
}

export default Community;
