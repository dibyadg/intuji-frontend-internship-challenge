import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center item-center  px-[100px] py-[50px]'>
    <h1 className='text-[71px] font-bold'>Testimonials</h1>
    <p className='text-[16px]'>We so opinion friends me message as delight. Whole front do of plate heard oh <br/> ought. His defective nor convinced residence own.</p>
    
    <div className='flex flex-row gap-10'>
    
    <Card className=' p-8 rounded-xl relative w-[550px] mt-10 flex gap-10 '>
        <div>

          <Image 
            src={"/images/quote.png"} 
            height={40} 
            width={40} 
            alt='quote' 
            className='absolute -top-4 left-[14%] transform -translate-x-1/2'
            />
          <p className='mt-10'>
          Wise busy past both park when <br/>
           an ye no. Nay likely her length <br/>
            sooner thrown sex lively <br/>
             income. The expense windows . <br/>
              Blessing welcomed ladyship.
          </p>
          <p className='mt-4'>- Mike Taylor, Web Designer</p>
            </div>
            <div>

          <Image 
            src={"/images/testimonial1.png"} 
            height={180} 
            width={180} alt="test1"/>
            </div>
          </Card>

          <Card className=' p-8 rounded-xl relative w-[550px] mt-10 flex gap-10 '>
        <div>

          <Image 
            src={"/images/quote.png"} 
            height={40} 
            width={40} 
            alt='quote' 
            className='absolute -top-4 left-[14%] transform -translate-x-1/2'
            />
          <p className='mt-10'>
          Wise busy past both park when <br/>
           an ye no. Nay likely her length <br/>
            sooner thrown sex lively <br/>
             income. The expense windows . <br/>
              Blessing welcomed ladyship.
          </p>
          <p className='mt-4'>- Mike Taylor, Web Designer</p>
            </div>
            <div>

          <Image 
            src={"/images/testimonial1.png"} 
            height={180} 
            width={180} alt="test1"/>
            </div>
          </Card>
    </div>
    </div>
  )
}

export default Testimonials