import React from "react";
import Image from "next/image";

const Card = ({ title, locked, gradient }) => {
  return (
    <div className={`rounded-lg p-1 ${gradient} relative overflow-hidden w-[52.32px] h-[62.7px]`}>
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <Image
          src="/path-to-your-image.png"
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-between h-full p-4">
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <button className="p-2 bg-white rounded-full bg-opacity-20">
          {locked ? (
            <i className="text-xl text-white fas fa-lock"></i>
          ) : (
            <i className="text-xl text-white fas fa-play"></i>
          )}
        </button>
      </div>
      {locked && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-40"></div>
      )}
    </div>
  );
};

export default Card;
