import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        
        <header className='flex justify-between items-center mx-6'>
            <h1 className="text-4xl font-bold">Knowldge Cafe </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
