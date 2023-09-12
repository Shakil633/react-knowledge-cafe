import { useState } from "react";
import "./App.css";
import Blogs from "./componenets/Blogs/Blogs";
import Bookmarks from "./componenets/Bookmarks/Bookmarks";
import Header from "./componenets/header/header";

function App() {
  // Book mark data pathano
  const [bookmarks, stateBookmark] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    stateBookmark(newBookmarks);
  };

  // Mark as read button
  const [readingTime, stateReadingTime] = useState(0);
  const handleRidingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    stateReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('this is kola begon',id);

    const remainingBookmark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    stateBookmark(remainingBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-5xl mx-auto gap-4">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleRidingTime={handleRidingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
