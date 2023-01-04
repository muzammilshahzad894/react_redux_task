const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    case "UPDATE_POST":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updatedPost,
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

export default postReducer;
