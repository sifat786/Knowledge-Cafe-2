import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const isExist = bookmarks.find(item => item.id === blog.id);
    if(!isExist) {
      setBookmarks([...bookmarks, blog])
    } else {
      alert('Blog Already Exist!👀');
    }
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    //* remove the read blog from bookmark:
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className="container">

        <Header></Header>

        <main className="md:flex mt-8 gap-6">
            <Blogs handleAddToBookmark={handleAddToBookmark}
                   handleMarkAsRead={handleMarkAsRead}
            ></Blogs>
            <Bookmarks bookmarks={bookmarks}
                       readingTime={readingTime}
            ></Bookmarks>
            
        </main>

      </div>
    </>
  )
}

export default App