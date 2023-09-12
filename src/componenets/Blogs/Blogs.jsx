import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark,handleRidingTime }) => {
  const [blogs, stateBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => stateBlogs(data));
  }, []);
  return (
    <div className=" md:w-2/3 mt-4">
      <h1 className=" text-4xl mb-5">Blogs: {blogs.length}</h1>

      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleAddToBookmark={handleAddToBookmark}
          handleRidingTime={handleRidingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleRidingTime:PropTypes.func.isRequired
};
export default Blogs;
