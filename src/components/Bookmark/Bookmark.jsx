import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

  return (
    <div className='my-4 bg-white rounded-lg p-5 '>
        <h3 className='text-neutral-900 text-lg font-semibold leading-[28.80px]'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;