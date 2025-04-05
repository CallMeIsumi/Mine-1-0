import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function Card() {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-xl shadow-black w-44 m-14 overflow-hidden md:w-56 sm:w-72">
          <img
            src="/public/76015bad-7af5-4fab-9801-66fd5b2bb4ed.webp"
            alt=""
            className=""
          />

          <h1 className="font-Popins text-xl text-center md:text-3xl">
            Flowers
          </h1>

          <a
            onClick={() => setshowModal(true)}
            href="#"
            className="bg-black text-white  font-Popins p-3 text-sm text-center hover:bg-neutral-600 transition-all duration-200 sm:text-lg md:text-2xl"
          >
            click me
          </a>
          {showModal && (
            <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
              <div className="bg-white/85 w-[1500px] h-96 rounded-2xl">
                <div className="flex flex-col relative">
                  <p className="font-Popins font-bold text-center mt-1 text-black text-xl">
                    thanks for your shopping
                  </p>

                  <div className="absolute top-2 right-2 cursor-pointer">
                    <IoClose onClick={() => setshowModal(false)} size={30} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
