import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3  '>
            {/* ///! Spent Time Section: */}
            <div className='py-[21px] px-[50px] bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600 mb-6'>
                <h1 className='text-indigo-600 text-2xl text-center font-bold leading-[38.40px]'>Spent time on read : {readingTime}</h1>
            </div>

            {/* ///! Blog Section: */}
            <div className='bg-neutral-900 bg-opacity-5 rounded-lg p-[30px]'>
                <h4 className='text-neutral-900 text-2xl font-bold leading-[38.40px]'>Bookmarked Blogs : {bookmarks.length}</h4>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx} 
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;