import Logo from '../assets/images/logo.svg';
import menuBar from '../assets/images/Group.svg';

export const NavBar = () => {
  return (
    <div className='flex w-full justify-between  py-10'>
      <div className=''>
        <img src={Logo} alt='logo' />
      </div>
      <div className='hidden  md:block'>
        <ul className='flex justify-between space-x-8'>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className='md:hidden'>
        <img src={menuBar} alt='' />
      </div>
    </div>
  );
};
