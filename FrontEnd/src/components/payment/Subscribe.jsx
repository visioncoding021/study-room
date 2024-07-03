import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md text-center w-1/3">
        <p className="bg-yellow-500 p-2 my-2">
          Pro Pack : <span>222 Rs</span>
        </p>
        <p>
          Lorem ipsum, dolor sit amet connctio, ducimus blanditiis
          perferendis nihil. Iure debitis quae accusamus esse illum quas id.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 my -3">
          Buy Now
        </button>
        <p className="my-2">100% refundable at Cancellation (T & C applicable)</p>
      </div>
    </div>
  );
};

export default Subscribe;
