import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleRidingTime }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex items-center justify-between mb-6">
        <div className=" flex items-center mt-5">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-2">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className=" flex gap-2">
          <span>{reading_time} min red</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className=" text-4xl mb-3">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-2">
            <a href=""> #{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="mt-3 text-purple-600 font-semibold underline"
        onClick={() => handleRidingTime(reading_time,id)}
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleRidingTime: PropTypes.func.isRequired,
};
export default Blog;
