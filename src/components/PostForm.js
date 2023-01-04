import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";

const PostForm = () => {
  const posts = useSelector((state) => state.posts);
  const [formData, setFormData] = useState({
    username: "",
    body: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      id:
        posts.length === 0 ? 1 : Math.max(...posts.map((post) => post.id)) + 1,
      body: formData.body,
      username: formData.username,
      created_at: new Date().toLocaleString(),
    };
    dispatch(addPost(data));
    setFormData({
      username: "",
      body: "",
    });
  };
  const [createPost, setCreatePost] = useState(false);
  return (
    <>
      <div className="w-full text-right " onClick={() => setCreatePost("ture")}>
        <button className="bg-blue-400 p-2 rounded-xl text-white font-bold mt-2 hover:bg-blue-700 items-right">
          Create Post
        </button>
      </div>

      <div
        className={`w-[320px] shadow-lg rounded-xl absolute md:ml-[37%] bg-white z-50 h-auto p-4 md:top-[10%] ${
          createPost === "ture" ? "block" : "hidden"
        } `}
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-bold pt-3"> Create Post: </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 pt-3 pr-3 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setCreatePost("false")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="py-3 font-bold">Enter Your Name:</h3>
          <input
            type="text"
            className="w-full rounded-lg p-2 bg-slate-200"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <h3 className="py-3 font-bold">Discription:</h3>
          <input
            className="w-full rounded-lg p-2 bg-slate-200"
            type="text"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />

          <div className="w-full text-right pt-2">
            <button
              className="bg-blue-500 p-2 text-white rounded-md"
              onClick={() => setCreatePost("false")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostForm;
