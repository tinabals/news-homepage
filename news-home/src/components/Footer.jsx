import retroImg from '../assets/images/image-retro-pcs.jpg';
import gamingImg from '../assets/images/image-gaming-growth.jpg';
import laptopImg from '../assets/images/image-top-laptops.jpg';

export const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center md:flex-row space-y-10 md:space-x-8 my-20'>
      <div className='flex'>
        <div className='w-2/5'>
          <img
            className='bg-cover bg-center w-32 h-full'
            src={retroImg}
            alt=''
          />
        </div>
        <div className='flex-flex-col space-y-7 tracking-wide w-4/5'>
          <p className='text-[#C5C6CE] font-extrabold text-4xl'>01</p>
          <p className='font-bold text-2xl'>Reviving Retro PCs</p>
          <p className='text-base '>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-2/5'>
          <img
            className='bg-cover bg-center w-32 h-full'
            src={gamingImg}
            alt=''
          />
        </div>
        <div className='flex-flex-col space-y-4 tracking-wide w-4/5'>
          <p className='text-[#C5C6CE] font-extrabold text-4xl'>02</p>
          <p className='text-[#F15D51] text-2xl font-bold'>
            Top 10 Laptops of 2022
          </p>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-2/5'>
          <img
            className='bg-cover bg-center w-32 h-full'
            src={laptopImg}
            alt=''
          />
        </div>
        <div className='flex-flex-col space-y-4 w-4/5'>
          <p className='text-[#C5C6CE] font-extrabold text-4xl'>03</p>
          <p className='font-bold text-xl'>The Growth of Gaming</p>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};
