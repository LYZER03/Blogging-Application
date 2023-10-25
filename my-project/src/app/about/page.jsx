import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const about = () => {
  return (
    <div className="container mx-auto min-h-screen p-0 sm:p-6 flex flex-col">
      <div className="w-full h-72 relative overflow-hidden">
        <Image  
          src ="/images/dev.jpg" 
          alt="dev illustration" 
          layout='fill' 
          objectFit="cover"
        />
      </div>
      <div className="flex gap-16">
        <div className="font-bold flex-1 mt-12 flex flex-col gap-8">
          <h1>Who Are We ?</h1>
          <p className="text-base font-light text-justify">            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="font-bold flex-1 mt-12 flex flex-col gap-8">
          <h1>What we Do ?</h1>
          <p className="text-base font-light text-justify">            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
          </p>
          <button className="px-4 py-2 cursor-pointer bg-green-800 rounded-lg max-w-max text-white">
          <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default about