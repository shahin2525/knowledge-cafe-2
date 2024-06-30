import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookMarks, readTime }) => {
  //   console.log(bookMarks);
  return (
    <div className="w-[411px]">
      {/* spent time */}
      <div className="border-2 border-[#6047EC] rounded text-[#6047EC]">
        <h1 className="text-center my-[21px] mx-[48px]">
          Spent time on read : {readTime} min
        </h1>
      </div>
      {/* spent time  end*/}
      {/* bookMark blog*/}
      <div className="mt-[20px] bg-slate-100 p-[30px]">
        <h1>Bookmarked Blogs : {bookMarks.length}</h1>
        <div>
          {bookMarks.map((bookMark, idx) => (
            <Bookmark key={idx} bookMark={bookMark}></Bookmark>
          ))}
        </div>
      </div>
      {/* bookMark blog*/}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
