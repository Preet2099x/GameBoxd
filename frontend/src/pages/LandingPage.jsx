import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-[Inter]">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/videomontage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black/60 to-black/85 text-white">
        <h1 className="font-[Orbitron] text-5xl md:text-6xl mb-4 tracking-wide">
          GameBoxd
        </h1>
        <p className="text-lg max-w-2xl opacity-90">
          Loading soon...
        </p>
      </div>
    </div>
  )
}

export default LandingPage
