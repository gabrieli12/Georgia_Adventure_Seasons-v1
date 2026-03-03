import React from "react";

const Safety = () => {
  return (
    <div className="bg-white text-gray-800 px-6 flex flex-col justify-center items-center">

      <section>
        <div className="absolute inset-0 z-0 w-full h-96 overflow-hidden" >
          <img
            src="main.png"
            alt="Georgia Mountains"
            className="w-full h-full object-cover  scale-105"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="max-w-4xl h-96 relative flex justify-center items-center text-white ">
          <h1 className="text-5xl font-bold mt-15 ">
            Safety Guidelines
          </h1>

        </div>

      </section>


      <div className="w-7xl mx-auto py-20">
        <h1 className="text-xl font-bold mb-8">Safety Guidelines</h1>

        <h2 className="text-4xl font-bold mt-10">All participants must:</h2>
        <div className="text-gray-600 flex flex-col gap-6 py-5">
          <p>- Follow guide and driver instructions at all times</p>
          <p>- Use required safety equipment</p>
          <p>- Inform the Company of any relevant medical conditions</p>
          <p>- Respect local regulations and mountain safety rules</p>
          <p>- Act responsibly during all activities</p>
        </div>

        <p className="text-gray-600 flex flex-col gap-6 py-5">Failure to comply with safety rules may result in termination of participation without refund.</p>

      </div>
    </div>
  );
};

export default Safety;