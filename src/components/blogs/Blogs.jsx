import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mt-[32px] md:flex justify-between gap-[24px]">
      <div className="w-[845px">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>

      <div className="w-[411px]">
        <h1>Book-marks</h1>
      </div>
    </div>
  );
};

export default Blogs;
