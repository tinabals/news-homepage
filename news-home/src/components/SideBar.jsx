export const SideBar = () => {
  return (
    <div className='flex flex-col bg-[#00001A] px-4 py-6'>
      <div className='flex flex-col space-y-6 py-4'>
        <h1 className='text-[#E9AA52] font-bold text-4xl mb-2'>New</h1>
        <div className='flex flex-col space-y-2 py-2'>
          <h3 className='text-[#FFFDFA] font-bold text-2xl'>
            Hydrogen Vs Electric cars
          </h3>
          <p className='text-[#C5C6CE] text-md tracking-wide'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
      </div>
      <hr className='border-[#5E607A;]' />
      <div className='flex flex-col py-8 space-y-4'>
        <h4 className='text-[#E9AA52] font-extrabold text-xl'>
          The Downsides of AI Artistry
        </h4>
        <p className='text-[#C5C6CE] text-md tracking-wide'>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr className='border-[#5E607A;]' />
      <div className='flex flex-col py-8 space-y-4'>
        <h3 className='text-[#FFFDFA] font-extrabold text-xl'>
          Is VC Funding Drying Up?
        </h3>
        <p className='text-[#C5C6CE] text-md tracking-wide'>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};
