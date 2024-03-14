import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    setBookmarks([...bookmarks, blog])
  }

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
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