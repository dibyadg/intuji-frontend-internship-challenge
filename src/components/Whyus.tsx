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

const Whyus = () => {
  return (
    <>
      <div className='flex flex-row justify-between px-[100px] py-[50px] relative'>
        <div>
          <h1 className='text-[56px] font-bold'>Automated <br/>
            portfolio tracking
          </h1>
          <p className='pt-1 text-[16px]'>
            Yet bed any for travelling assistance indulgence unpleasing. <br/>
            Not thoughts all exercise blessing.
          </p>
        </div>
        <Card className='bg-[#C4C4C4] p-8 rounded-xl relative w-[350px]'>
          <Image 
            src={"/images/quote.png"} 
            height={40} 
            width={40} 
            alt='quote' 
            className='absolute -top-4 left-[14%] transform -translate-x-1/2'
          />
          <p>
            Wise busy past both park when an ye no. Nay <br/>
            likely her length sooner thrown sex lively income.<br/>
            The expense windows adapted sir. Wrong widen.
          </p>
          <p className='mt-4'>- Mike Taylor, Web Designer</p>
          </Card>
      </div>

      <div className='flex flex-row justify-center item-center gap-10'>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>01</CardTitle>        
      </CardHeader>
      <CardContent className='flex flex-col items-center text-center'>
        <Image 
          src={"/images/card_blue.png"} 
          height={40} 
          width={40} 
          alt='card' 
        />
        <CardTitle className='py-4'>Connect wallets & <br/> companies</CardTitle>
        <CardDescription>
          Indulgence way everything joy alteration <br/> boisterous the attachment. Party we years <br/> to order allow asked of. 
        </CardDescription>
      </CardContent>
    </Card>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>02</CardTitle>        
      </CardHeader>
      <CardContent className='flex flex-col items-center text-center'>
        <Image 
          src={"/images/card_red.png"} 
          height={40} 
          width={40} 
          alt='card' 
        />
        <CardTitle className='py-4'>Review <br/>transactions</CardTitle>
        <CardDescription>
          Indulgence way everything joy alteration <br/> boisterous the attachment. Party we years <br/> to order allow asked of. 
        </CardDescription>
      </CardContent>
    </Card>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>01</CardTitle>        
      </CardHeader>
      <CardContent className='flex flex-col items-center text-center'>
        <Image 
          src={"/images/card_yellow.png"} 
          height={40} 
          width={40} 
          alt='card' 
        />
        <CardTitle className='py-4'>Get income <br/>insights</CardTitle>
        <CardDescription>
          Indulgence way everything joy alteration <br/> boisterous the attachment. Party we years <br/> to order allow asked of. 
        </CardDescription>
      </CardContent>
    </Card>
      </div>

      <div className='flex flex-row justify-between px-[100px] py-[50px]'>
        <div>
          <Image src={"/images/track.png"} height={600} width={600} alt='trackimg'/>
        </div>
        <div className='mr-40'>
        <span className='text-[14px] text-[#3734A9] font-semibold'>Why Choose Us</span>
        <h1 className='text-[50px] font-bold'>Track your payments <br/> on the go with the <br/> best way possible</h1>
        <p>Indulgence way everything joy alteration boisterous <br/> the attachment. Party we years to order allow asked of. </p>
        <hr className='bg-[#C4C4C4] h-[2.5px] mt-4 '  />
        <div className="flex flex-col mt-4">
          <div className="flex items-center mr-4 my-2">
          <Image src="/images/check_orange.png" height={18} width={18} alt='playbutton' />
        <span className="ml-2">Get Overview at a glance</span>
          </div>
          <div className="flex items-center my-2">
          <Image src="/images/check_orange.png" height={18} width={18} alt='playbutton' />
        <span className="ml-2">Deoposit funds easily, securlity</span>
          </div>
          <div className="flex items-center my-2">
          <Image src="/images/check_orange.png" height={18} width={18} alt='playbutton' />
        <span className="ml-2">Get Live Support</span>
          </div>
        </div>
        </div>
      </div>

      <div>
        Save money with proper transaction
      </div>
    </>
  )
}

export default Whyus
