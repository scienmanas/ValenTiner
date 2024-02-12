import React from 'react'
import Lottie from 'react-lottie'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/envelope.css'
import boyThinkAnimationFile from './assets/animations/boy-thinking.json'
import boyJumpingAnimatinFile from './assets/animations/boy-jumping.json'
import YayAnimationFile from './assets/animations/yay.json'

const boyThinkAnimation = {
  loop: true,
  autoplay: true,
  animationData: boyThinkAnimationFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};


const boyJumpingAnimatin = {
  loop: true,
  autoplay: true,
  animationData: boyJumpingAnimatinFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};


const YayAnimation = {
  loop: true,
  autoplay: true,
  animationData: YayAnimationFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};

export default function Card(props) {

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Open me !");


  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setButtonText("Yayyy !! ")
    document.querySelector('.animation-1').classList.add('hidden');
    document.querySelector('.animation-2').classList.remove('hidden');
    document.querySelector('.animation-3').classList.remove('hidden');
    document.querySelector('.card').classList.remove('blur-xl');
    document.querySelector('.card').classList.add('-translate-y-44', 'duration-1000', 'ease-in-out');
    document.querySelector('.button-1').classList.add('hidden');
    document.querySelector('.button-2').classList.remove('hidden');
    document.querySelector('.content-yay').classList.remove('hidden');
  }

  useEffect(() => {
    props.setProgress(100);
  }, [])
  

  return (
    <div className="card-and-animation flex min-h-screen flex-col bg-transparent bg-gradient-to-tr from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] ">
      <div className="contain place-content-center h-[430px] mt-[75px] sm:mt-24 w-full flex items-center justify-center">
        <div className="back-envelope absolute z-1 bg-[#8202d2] w-[330px] h-60 shadow-xl rounded-lg"></div>
        <div className="fron-envelope-area absolute">
          <div className="front-envelope absolute z-3"> </div>
        </div>
        <div className="card transition-transform blur-xl z-2 w-80 h-52 bg-[#ecb9e5] shadow-xl rounded-xl absolute flex flex-col flex-wrap items-center">
          <div
            className="text-1 relative mt-4 mx-11 text-3xl text-right select-none">
            Happy Valentine's Day!
          </div>
          <div className="relative text-right text-xl font-bold mt-1 mx-14 text-transparent bg-clip-text bg-gradient-to-br from-[#42275a] to-[#753a88] select-none">I have written something for you
          </div>
          <div
            className="button-2 w-fit h-fit hidden">
            <Link to='/ask'>
              <button
                className='relative rounded-lg py-2 px-3 shadow-[4px_4px_0px_0px_rgba(109,40,217)] bg-transparent bg-gradient-to-tr from-[#cc2b5e] to-[#ffc3a0] active:shadow-none active:translate-x-1 active:translate-y-1 duration-75'
              >
                <div
                  className="z-0 text-button text-center text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#eecda3] to-[#a8e063] select-none">
                  A Message
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div
          className="z-3 shadow absolute w-[330px] h-14 bg-slate-400 translate-y-44 rounded-[50%]"></div>
      </div>
      <div
        className="down-part flex flex-wrap w-full h-fit p-6 items-center justify-center gap-5 flex-row">
        <div
          className="button-1 w-fit h-fit">
          <button
            onClick={handleOpenEnvelope}
            // disabled={``}
            className='rounded-lg py-4 px-6 shadow-[8px_8px_0px_0px_rgba(109,40,217)] bg-transparent bg-gradient-to-tr from-[#cc2b5e] to-[#3a1c71] active:shadow-none active:translate-x-1 active:translate-y-1 duration-75'
          >
            <div
              className="z-0 text-button text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#eecda3] to-[#a8e063] select-none">{buttonText} {isEnvelopeOpen ? <span className='text-red-700'>&#x1F497;</span> : null}
            </div>
          </button>
        </div>
        <div
          className="content-yay w-fit h-fit hidden rotate-12">
          <div
            className='rounded-lg py-3 px-4  bg-transparent bg-gradient-to-tr from-[#cc2b5e] to-[#3a1c71]'
          >
            <div
              className="z-0 text-button text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#eecda3] to-[#a8e063] select-none">
              {buttonText}
              <span className='text-red-700'> &#x1F498;</span>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center">
          <div
            className="animation-1 pointer-events-none">
            <Lottie
              options={boyThinkAnimation}
              height={window.innerWidth < 640 ? 130 : 230}
              width={window.innerWidth < 640 ? 130 : 230}
              isClickToPauseDisabled={true}
            />
          </div>
          <div
            className="animation-2 hidden pointer-events-none">
            <Lottie
              options={boyJumpingAnimatin}
              height={window.innerWidth < 640 ? 111 : 230}
              width={window.innerWidth < 640 ? 111 : 230}
              isClickToPauseDisabled={true}
            />
          </div>
          <div
            className="animation-3 pointer-events-none absolute hidden">
            <Lottie
              options={YayAnimation}
              height={window.innerWidth < 640 ? 125 : 230}
              width={window.innerWidth < 640 ? 125 : 230}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
