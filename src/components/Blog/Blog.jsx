import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;


    return (
        
        <div>
            {/* /// 1 */}
            <img className='w-full rounded-lg' src={cover}/>

            {/* /// 2 */}
            <div className='flex items-center justify-between mt-[34px] '>
                <div className='flex items-center gap-6 '>
                    <img className='w-[60px]' src={author_img} alt="profile_pic" />
                    <div>
                        <h5 className='text-neutral-900 text-2xl font-bold leading-[38.40px]'>{author}</h5>
                        <p className='text-neutral-900 text-opacity-60 text-base font-semibold leading-relaxed'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className=''>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='text-red-500 text-2xl'>
                    <FaBookmark/></button>
                </div>
            </div>

            {/* /// 3 */}
            <div className='block mb-10 border-b border-neutral-900 border-opacity-10 pb-[38px]'>
                <p className='py4 w-[737px] text-neutral-900 text-[40px] font-bold leading-[64px]'>{title}</p>
                <div className='flex gap-4 mb-5'>
                    {
                        hashtags.map((hash, idx) => <span key={idx}>
                            <a href="" 
                            className='text-neutral-900 text-opacity-60 text-xl font-medium leading-loose '
                        >#{hash}</a></span>)
                    }
                </div>
                <button 
                    onClick={() => handleMarkAsRead(reading_time, id)}
                    className='text-indigo-600 text-xl font-semibold underline'
                >Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;