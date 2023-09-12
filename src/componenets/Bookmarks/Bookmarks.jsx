import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:h-1/3 mt-4 text-center bg-gray-100 rounded-lg p-4">
      <div>
        <h2 className="text-2xl mb-4">Spent time on read : {readingTime} min</h2>
      </div>
      <h2 className="text-3xl">Bookmarked Blog: {bookmarks.length}</h2>

      {bookmarks.map((bookmark,idx) => (
        <Bookmark bookmark={bookmark} key={idx}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
