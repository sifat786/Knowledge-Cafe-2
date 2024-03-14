import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className="pt-8 pb-8 flex justify-between items-center border-b-2 border-neutral-900 border-opacity-20">
            <a href=""><h1 className="text-neutral-900 text-[40px] font-bold leading-[64px]">Knowledge Cafe</h1></a>
            <img className='cursor-pointer' src={profile} alt="profile" />
        </header>
    );
};

export default Header;