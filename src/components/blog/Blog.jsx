import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    cover,
    author_img,
    title,
    posted_date,
    author,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <div className="mb-[32px]">
        <img className="w-full rounded" src={cover} alt="" />
      </div>
      {/*  */}
      <div className="flex justify-between mb-[16px]">
        <div className="flex justify-normal gap-[24px] w-[242px]">
          <img className="size-[60px]" src={author_img} alt="" />
          <div>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[140px]">
          <p>
            {reading_time} <span className="mx-[4px]">min read</span>
          </p>
          <button onClick={() => handleBookMark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      {/*  */}
      <p className="mb-[16px]">{title}</p>
      <div className="w-[260px] flex justify-normal gap-[16px] mb-[16px] ">
        <p># {hashtags[0]}</p>
        <p>#{hashtags[1]}</p>
      </div>
      <div className="mb-[38px]">
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="text-lime-600 underline"
        >
          {" "}
          Marks as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.array,
  handleBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
