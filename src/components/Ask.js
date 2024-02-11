import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { Link , useNavigate} from 'react-router-dom';
import MessageSend from './MessageSend';
import './styles/ask.css';
import boyLookingToBeAcceptedFile from './assets/animations/boy-looking-to-accept.json';
import cryingBoyAnimationFile_1 from './assets/animations/crying_boy_1.json';
import cryingBoyAnimationFile_2 from './assets/animations/crying_boy_2.json'
import doesntMatterAnimationFile from './assets/animations/doesnt_matter_boy.json'
import acceptAnimationFile from './assets/animations/love_animation.json'

const boyLookingToBeAccepted = {
  loop: true,
  autoplay: true,
  animationData: boyLookingToBeAcceptedFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};

const cryingBoyAnimation_1 = {
  loop: true,
  autoplay: true,
  animationData: cryingBoyAnimationFile_1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};

const cryingBoyAnimation_2 = {
  loop: true,
  autoplay: true,
  animationData: cryingBoyAnimationFile_2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};

const doesntMatterAnimation = {
  loop: true,
  autoplay: true,
  animationData: doesntMatterAnimationFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};

const acceptAnimation = {
  loop: true,
  autoplay: true,
  animationData: acceptAnimationFile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  },
};


export default function Ask(props) {

  const navigate = useNavigate();

  const [noCount, setNoCount] = useState(0);
  const [askText, setAskText] = useState("Will you do me the honor of being my Valentine?");
  const [emojiAsk, setEmojiAsk] = useState('💗');
  const [yesOrNow, setYesOrNow] = useState(null);


  useEffect(() => {
    if (noCount > 2) { 
      setTimeout(() => {
        navigate('/destroy'); 
      }, 1000); 
    }
  }, [noCount, navigate]);

  useEffect(() => {
    props.setProgress(100);
  }, [])
  

  const handleNoClick = (event) => {
    event.preventDefault();
    setNoCount(noCount + 1);
    document.querySelector('.wait-animation').classList.add('hidden');
    if (noCount === 0) {
      document.querySelector('.cry-animation-1').classList.remove('hidden');
      setAskText("Please don't say no?")
      setEmojiAsk('😢')
    } else if (noCount === 1) {
      document.querySelector('.cry-animation-1').classList.add('hidden');
      document.querySelector('.cry-animation-2').classList.remove('hidden');
      setAskText("Please be my Valentine?")
      setEmojiAsk('😭')
    }
    else {
      document.querySelector('.cry-animation-2').classList.add('hidden');
      document.querySelector('.doesnt-matter-animation').classList.remove('hidden');
      document.querySelector('.Yes').classList.add('hidden');
      document.querySelector('.convey').classList.add('hidden');
      document.querySelector('.ask').classList.remove('sm:text-4xl', 'text-2xl');
      document.querySelector('.ask').classList.add('text-3xl', 'sm:text-6xl');
      setAskText("Bye You don't deserve me .")
      setEmojiAsk('');
      document.querySelector('.No').classList.add('translate-y-56', 'sm:translate-y-[22.8rem]', 'pointer-events-none');
    }
  }

  const handleYesClick = (event) => {
    event.preventDefault();
    document.querySelector('.wait-animation').classList.add('hidden');
    document.querySelector('.cry-animation-1').classList.add('hidden');
    document.querySelector('.cry-animation-2').classList.add('hidden');
    document.querySelector('.accept-animation').classList.remove('hidden');
    document.querySelector('.buttons').classList.add('hidden');
    setAskText("Yayy.. lets meet ! ")
    setEmojiAsk('😍');
    setYesOrNow("Yes");
  }

  return (
    <div className='message-sending-body flex items-center flex-col w-full h-full bg-transparent bg-gradient-to-tr from-[#F56217] to-[#0B486B] min-h-screen gap-6 sm:gap-20'>
      <div className="animation w-fit h-fit">
        <div className="wait-animation pointer-events-none">
          <Lottie
            options={boyLookingToBeAccepted}
            height={300}
            width={300}
          />
        </div>
        <div className='cry-animation-1 pointer-events-none hidden'>
          <Lottie
            options={cryingBoyAnimation_1}
            height={300}
            width={300}
          />
        </div>
        <div className='cry-animation-2 pointer-events-none hidden'>
          <Lottie
            options={cryingBoyAnimation_2}
            height={300}
            width={300}
          />
        </div>
        <div className='doesnt-matter-animation pointer-events-none hidden'>
          <Lottie
            options={doesntMatterAnimation}
            height={300}
            width={300}
          />
        </div>
        <div className='accept-animation pointer-events-none hidden'>
          <Lottie
            options={acceptAnimation}
            height={300}
            width={300}
          />
        </div>
      </div>
      <div className="ask-convey px-4 flex flex-col flex-wrap items-center gap-3 sm:gap-7">
        <div className='convey h-fit w-fit text-transparent bg-clip-text  bg-gradient-to-t from-[#962820] to-[#111125] sm:text-4xl text-center select-none'>In a world brimming with over 3.95 billion extraordinary souls, you stand out to me as exceptionally beautiful and charming.</div>
        <div className='ask-text w-fit h-fit flex flex-col gap-3 sm:gap-16 items-center'>
          <div
            className="ask text-2xl text-center sm:text-4xl select-none">
            {askText} <span>{emojiAsk}</span>
          </div>
          <div className="buttons flex flex-row flex-wrap gap-16 mb-2 items-center justify-center">
            <button
              className='Yes w-fit h-fit'
              onClick={handleYesClick}
            >
              <div className="button-yes button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 hover:scale-110 active:scale-90 duration-200">
                Yes
              </div>
            </button>
            <button
              className='No w-fit h-fit rotate-[14deg] duration-300'
              onClick={handleNoClick}
            >
              <div className="button-no button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 hover:scale-110 active:scale-90 duration-200">
                No
              </div>
            </button>
          </div>
          {yesOrNow === "Yes" ? <MessageSend /> : null}
        </div>
      </div>
      <Link to="/destroy" className="destroy-link hidden pointer-events-none select-none"></Link>
    </div>
  )
};
