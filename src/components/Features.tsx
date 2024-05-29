import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Features = () => {
  return (
    <div className='flex flex-col justify-center item-center bg-[#C9E7F2] px-[100px] py-[50px]'>
       <h1 className='text-[71px] font-bold'>Features that blows mind</h1>
       <p className='text-[16px]'>We so opinion friends me message as delight. Whole front do of plate heard <br/> oh ought. His defective nor convinced residence own.</p>
       
       <div className='flex flex-row gap-10'>       
       <Card className="w-[400px] mt-10 p-8">
      
      <CardContent className='flex flex-col '>
        <Image 
          src={"/images/card_red.png"} 
          height={40} 
          width={40} 
          alt='card' 
        />
        <CardTitle className='py-4'>Really boy law county she <br/> unable her sister</CardTitle>
        <CardDescription className='text-black text-[15px]'>
        We so opinion friends me message as <br/> delight. Whole front do of plate heard oh <br/> ought.        </CardDescription>
      </CardContent>
    </Card>
    <Card className="w-[400px] mt-10 p-8">
    
      <CardContent className='flex flex-col '>
        <Image 
          src={"/images/card_blue.png"} 
          height={40} 
          width={40} 
          alt='card' 
        />
        <CardTitle className='py-4'>Among sex are leave law <br/> built now</CardTitle>
        <CardDescription className='text-black text-[15px]'>
        We so opinion friends me message as <br/> delight. Whole front do of plate heard oh <br/> ought.        </CardDescription>
      </CardContent>
    </Card>

    <div className='flex flex-col'>
    <Card className="w-[350px] mt-10 p-10">
        <CardTitle>
        Merits behind on afraid or warmly
        </CardTitle>
    </Card>
    <Card className="w-[350px] mt-10 p-10">
        <CardTitle>
        Believing neglected so so allowance existence
        </CardTitle>
    </Card>
    </div>
        </div>
        </div>
  )
}

export default Features