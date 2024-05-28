import React from 'react';
import Image from 'next/image';

const Herobanner = () => {
  return (
    <div className="flex justify-center items-center px-[100px]   ">
      <div className="flex-1 ">
        <div>
          <h1 className="text-[60px] font-bold">Managing freelance <br/>
          payments has never <br/>
           been easier</h1>
        </div>
        <div className="my-4 text-[#64607D] text-[20px]">
          <p>Yet bed any for travelling assistance indulgence <br/>
             unpleasing. Not thoughts all exercise blessing.</p>
        </div>
        <div className="my-4 flex items-center">
      <button className="mr-2 p-2 bg-[#3734A9] text-white rounded-full">Get Started</button>
      <button className="flex items-center p-2 text-[#3734A9] rounded">
        <Image src="/images/playbutton.png" height={40} width={40} alt='playbutton' />
        <span className="ml-2">See How It Works</span>
      </button>
    </div>
        <div className="flex mt-4">
          <div className="flex items-center mr-4">
          <Image src="/images/check_icon.png" height={18} width={18} alt='playbutton' />
        <span className="ml-2">Free Register</span>
          </div>
          <div className="flex items-center">
          <Image src="/images/check_icon.png" height={18} width={18} alt='playbutton' />
        <span className="ml-2">Great Service</span>
          </div>
        </div>
      </div>
      <div className="flex-1  h-full  flex ">
        <Image src="/images/hero_banner_img.png" height={400} width={400} alt="heroimg" />
      </div>
    </div>
  );
}

export default Herobanner;
