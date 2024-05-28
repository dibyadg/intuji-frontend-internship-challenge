import React from 'react';
import Image from 'next/image';

const Herobanner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex-1 p-4">
        <div>
          <h1 className="text-3xl font-bold">Managing freelance payments has never been easier</h1>
        </div>
        <div className="my-4">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
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
            <span className="mr-2">icon</span>
            <span>Free Register</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">icon</span>
            <span>Great Service</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <Image src="/images/hero_banner_img.png" height={200} width={200} alt="heroimg" />
      </div>
    </div>
  );
}

export default Herobanner;
