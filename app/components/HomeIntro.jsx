'use client'
import { TypeAnimation } from 'react-type-animation';

export default function HomeIntro() {

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col h-1/3">
        <h2 className="text-4xl font-mono font-bold text-white mb-4">Hi, My name is Kaleigh. I'm</h2>
        <div className="relative">
          <TypeAnimation
            className="text-6xl font-sans uppercase text-white absolute top-0 left-0"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "an aspiring frontend developer",
              3000,
              "a computer science student",
              3000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </div>
      </div> </div>
    </div>
  );
}