import React from 'react'
import Lottie from 'react-lottie'
import './styles/card.css'



// const animation-1 = {
//   loop: true,
//   autoplay: true,
//   animationData: loading_animation,
//   rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//   },
// };

export default function Card() {
  return (
    <div className="card-and-animation flex min-h-screen flex-col bg-transparent bg-gradient-to-br from-[#fdc3c9] to-purple-200 ">
      <div
        className="contain h-[450px] mt-24 w-full flex items-center justify-center">
        <div className="back-envelope absolute z-1 bg-[#8202d2] w-[330px] h-60 shadow-xl rounded-lg"></div>
        <div className="z-2 card w-80 h-60 bg-[#ecb9e5] shadow-xl rounded-xl absolute flex flex-col flex-wrap items-center">
          <div className="text-1 relative mt-4 mx-11 text-3xl text-right select-none">
            Happy Valentine's Day!
          </div>
          <div className="relative text-right text-3xl font-bold mt-1 mx-14 text-transparent bg-clip-text bg-gradient-to-br from-[#42275a] to-[#753a88] select-none">I have written something for you</div>
        </div>
        <div className="front-envelope absolute z-3">
        </div>
        <div className="z-3 shadow absolute w-[330px] h-14 bg-slate-400 translate-y-44 rounded-[50%]"></div>
      </div>
      <div className="down-part flex flex-wrap w-full h-fit p-6 items-center justify-center gap-5 sm:flex-row flex-col ">
        <button className='rounded-lg py-4 px-6 shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-transparent bg-gradient-to-tr from-[#cc2b5e] to-[#3a1c71] active:shadow-none active:translate-x-1 active:translate-y-1 duration-100'>
            <div className="z-0 text-button text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#eecda3] to-[#a8e063] select-none">Open me!</div>
        </button>
        <div className="animation w-fit h-fit">

        </div>
      </div>
    </div>
  )
}
