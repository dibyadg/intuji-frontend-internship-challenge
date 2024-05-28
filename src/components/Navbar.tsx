"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";


const Navbar = () => {
  

const [profile, setProfile] = useState(false);

  const handleProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setProfile(true);
  };

  return (
    <div className='flex flex-row justify-between pt-[38px] px-[121px]'>
      <Link href="/" className='text-[20px] font-bold'> AR Shakir </Link>
      <div className='flex list-none gap-10 cursor-pointer'>
      <ul className='flex flex-row gap-12'>
        <li className='flex items-center'>
          Product <FaAngleDown className='ml-1' />
        </li>
        <li className='flex items-center'>
          Template <FaAngleDown className='ml-1' />
        </li>
        <li className='flex items-center'>
          Blog
        </li>
        <li className='flex items-center'>
          Pricing
        </li>
      </ul>
    </div>
      
      <div className="flex ">
        <button>Sign in</button>
        <button className='bg-[#4F46BA] p-2 ml-10 text-white'>Start Free</button>
      </div>
    </div>
  );
};

export default Navbar;