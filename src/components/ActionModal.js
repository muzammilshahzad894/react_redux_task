import React, { useState } from "react";
import { deletePost } from "../redux/actions/postActions";
import { useDispatch } from "react-redux";
import EditPostForm from "./EditPostForm";

const ActionModal = ({ isOpen, setIsOpen, id }) => {
  const dispatch = useDispatch();
  const [openModalId, setOpenModalId] = useState("");

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleEditClick = (id) => {
    if (openModalId === id) {
      setOpenModalId(null);
      return;
    }
    setOpenModalId(id);
    setIsOpen(false);
  };

  const closeEditForm = () => {
    setOpenModalId(null);
  };

  return (
    <>
      <EditPostForm openModalId={openModalId} closeEditForm={closeEditForm} />;
      <div
        className={`w-[120px] shadow-lg bg-white absolute right-40 z-50 pl-6 mt-[-30px] rounded-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button onClick={() => handleDelete(id)}> Delete</button>
        <br />
        <button onClick={() => handleEditClick(id)}> Edit </button>
      </div>
    </>
  );
};

export default ActionModal;
