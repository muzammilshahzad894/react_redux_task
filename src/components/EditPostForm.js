import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../redux/actions/postActions";

const EditPostForm = ({ openModalId, closeEditForm }) => {
  const posts = useSelector((state) => state.posts);
  const [updatedPost, setUpdatedPost] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePost(openModalId, updatedPost));
    setUpdatedPost(null);
    closeEditForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  useEffect(() => {
    if (posts.length > 0 && openModalId) {
      const post = posts.find((post) => post.id === openModalId);
      setUpdatedPost(post);
    }
  }, [openModalId]);

  return (
    <div
      className={`w-[320px] shadow-lg rounded-xl fixed  md:ml-[25%] bg-white z-50 h-auto p-4 md:top-[30%] ${
        openModalId ? "block" : "hidden"
      } `}
    >
      <div className="flex justify-between">
        <h1 className="text-lg font-bold pt-3"> </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 pt-3 pr-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={closeEditForm}
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
        <h3 className="py-3 font-bold">Update Name:</h3>
        <input
          type="text"
          className="w-full rounded-lg p-2 bg-slate-200"
          name="username"
          value={updatedPost?.username}
          onChange={handleChange}
        />
        <h3 className="py-3 font-bold">Update Discription:</h3>
        <input
          className="w-full rounded-lg p-2 bg-slate-200"
          type="text"
          name="body"
          value={updatedPost?.body}
          onChange={handleChange}
        />

        <div className="w-full text-right pt-2">
          <button className="bg-blue-500 p-2 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
