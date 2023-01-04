export const addPost = (post) => ({
  type: "ADD_POST",
  post,
});

export const deletePost = (id) => ({
  type: "DELETE_POST",
  id,
});

// update post
export const updatePost = (id, updatedPost) => ({
  type: "UPDATE_POST",
  id,
  updatedPost,
});
