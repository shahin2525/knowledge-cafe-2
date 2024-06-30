import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto my-[10px]">
      <Header></Header>

      <hr />
      <Blogs></Blogs>
    </div>
  );
}

export default App;
