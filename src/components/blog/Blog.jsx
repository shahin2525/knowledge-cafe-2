import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog }) => {
  console.log(blog);
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
        <img src={cover} alt="" />
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
        <div className="flex ml-[120px] mr-0">
          {reading_time} <span className="mx-[4px]">min read</span>{" "}
          <CiBookmark />
        </div>
      </div>
      {/*  */}
      <p className="mb-[16px]">{title}</p>
      <div className="w-[260px] flex justify-normal gap-[16px] mb-[16px] ">
        <p># {hashtags[0]}</p>
        <p>#{hashtags[1]}</p>
      </div>
      <div className="mb-[38px]">
        <a className="text-lime-600 underline" href="">
          Marks as read
        </a>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.array,
};

export default Blog;
