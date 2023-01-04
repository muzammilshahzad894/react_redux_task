import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import Frontend from "./components";
import Frontend from "./components/Frontend";
function App() {
  return (
    <div className="App">
      <PostForm />
      <Frontend />
      <PostList />
    </div>
  );
}

export default App;
