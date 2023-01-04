import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActionModal from "./ActionModal";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleEditClick = (index) => {
    if (isModalOpen === index) {
      setIsModalOpen(null);
      return;
    }
    setIsModalOpen(index);
  };

  const timeElapsed = (createdAt) => {
    const currentDate = new Date();
    const postDate = new Date(createdAt);
    const timeElapsed = currentDate - postDate;
    if (timeElapsed < 60000) {
      return `${Math.floor(timeElapsed / 1000)}s`;
    } else if (timeElapsed < 3600000) {
      return `${Math.floor(timeElapsed / 60000)}m`;
    } else if (timeElapsed < 86400000) {
      return `${Math.floor(timeElapsed / 3600000)}h`;
    } else {
      return `${Math.floor(timeElapsed / 86400000)}d`;
    }
  };

  return (
    <>
      {posts.map((item, index) => {
        return (
          <div className="post mt-[2%]" key={index}>
            <div className="w-4/5 shadow-lg rounded-lg p-6  ml-[10%]  gap-4">
              <div className="items-center justify-between w-full flex gap-4  pb-4">
                <div className="flex gap-3">
                  <button className="bg-gray-500 h-12 w-12 rounded-full text-white">
                    MS
                  </button>
                  <div>
                    <h4 className="font-bold text-lg">{item.username}</h4>
                    <div className="flex items-center">
                      <p className="text-gray-400 font-medium">
                        {timeElapsed(item.created_at) == "0s"
                          ? "few seconds ago"
                          : timeElapsed(item.created_at)}
                      </p>

                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0
              11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleEditClick(index)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ActionModal
                isOpen={index === isModalOpen}
                setIsOpen={setIsModalOpen}
                id={item.id}
              ></ActionModal>
              <p className="py-4 text-gray-500"> {item.body}</p>
              <div className="flex justify-between border-b-2 border-b-gray-200 pb-2">
                <div className="h-4 w-4 bg-blue-600 rounded-full items-center pl-[2px] flex  gap-2">
                  <img src="/img/thumb.png" alt="" className="h-3 w-3" />
                  <span>1</span>
                </div>
                <div className="flex  gap-3">
                  <p className="text-gray-400  font-medium">1 Comment</p>
                  <p className="text-gray-400  font-medium">0 Share</p>
                </div>
              </div>
              <div className="flex justify-between md:px-[10%] pt-3  border-b-2 border-b-gray-200 pb-3">
                <div className="flex gap-2 cursor-pointer">
                  <img src="/img/thumb1.png" className="h-6 w-6" alt="" />
                  <span className="italic">Liked</span>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <img src="/img/chat_icon.png" className="h-6 w-6" alt="" />
                  <span className="italic">Comment</span>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <img src="/img/errow.png" className="h-6 w-6" alt="" />
                  <span className="italic">Share</span>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="bg-gray-500 h-12 w-12 rounded-full text-white">
                  MS
                </button>
                <div className="bg-gray-200 justify-between flex w-full rounded-3xl px-4 items-center py-2">
                  <div>
                    <h3 className="font-bold"> Supplier2</h3>
                    <p>Hello</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
