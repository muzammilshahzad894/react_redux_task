import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import likeReducer from "./likeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  likes: likeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
