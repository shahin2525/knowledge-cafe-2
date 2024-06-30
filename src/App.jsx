import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  // console.log(bookMarks);
  const handleBookMark = (data) => {
    setBookMarks([...bookMarks, data]);
  };
  const handleMarkAsRead = (time, id) => {
    setReadTime(readTime + time);

    const remaining = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(remaining);
  };
  return (
    <div className="max-w-[1280px] mx-auto my-[10px]">
      <Header></Header>

      <hr />
      <div className="mt-[32px] md:flex justify-between gap-[24px]">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readTime={readTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
