import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="aboutus flex flex-col items-center justify-center gap-5 max-w-4xl">
        <h1 className="font-bold text-4xl">About</h1>
        <p className="italic">
          Here is our web programming course project. This is already our third
          source code attempt. The first source code was too advanced for our
          newbie skills, so it was discarded. The second attempt was almost
          complete, only missing login/booking functionality, but it was not
          optimized and didn't look great. That's the reason for the current
          version. Thank you everyone for taking the time to experience our
          website.
        </p>
        <video
          src="https://cdn.pixabay.com/video/2020/10/17/52666-469398269_tiny.mp4"
          controls
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
}
