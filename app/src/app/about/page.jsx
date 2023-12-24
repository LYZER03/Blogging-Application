import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const about = () => {
 return (
    <div className="container mx-auto min-h-screen p-0 sm:p-6 flex flex-col">
      <div className="w-full h-72 relative overflow-hidden">
        <Image
          src="/images/dev.jpg"
          alt="dev illustration"
          layout="fill"
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
          </p>
          <ul className="list-disc list-inside">
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>Front-end Development</li>
            <li>Back-end Development</li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="font-bold text-3xl">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col items-center">
            <Image
              src="/images/author.png"
              alt="team member"
              width={200}
              height={200}
            />
            <h3 className="font-bold mt-4">John Doe</h3>
            <p className="text-base">Full Stack Developer</p>
          </div>
          {/* Add more team members here */}
        </div>
      </div>
    </div>
 );
};

export default about;