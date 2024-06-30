import PropTypes from "prop-types";
const Bookmark = ({ bookMark }) => {
  //   console.log(bookMark);
  return (
    <div className="w-[351px] h-[98px] border-[2px] border-gray-400 rounded flex justify-center my-[16px] bg-white">
      <p className="m-[20px]">{bookMark.title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookMark: PropTypes.array,
};
// Bookmarks.propTypes = {
//     bookMarks: PropTypes.array,
//   };
export default Bookmark;
