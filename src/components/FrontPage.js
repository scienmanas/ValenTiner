import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import bg from './assets/images/page-1_bg.png';
import heartAnimation from './assets/animations/floating_hearts.json';
import './styles/frontpage.css';

export default function FrontPage() {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const sentence = "We have known each other from a long time but today I have something important to tell you...\n";
    const typingSpeed = 200; // Adjust typing speed here

    useEffect(() => {
        const typeSentence = (index) => {
            if (index < sentence.length) {
                setText(sentence.substring(0, index + 1));
                setTimeout(() => {
                    typeSentence(index + 1);
                }, typingSpeed);
            } else {
                setLoading(false);
            }
        };

        typeSentence(0);

        setTimeout(() => {
            document.getElementById('front-page').classList.remove('opacity-80');
            document.getElementById('front-page').classList.add('opacity-100');
        }, 100);
    }, []);

    const floatingHeartAnimation = {
        loop: true,
        autoplay: true,
        animationData: heartAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    return (
        <div id='front-page' className='min-h-screen opacity-80 overflow-hidden w-full flex items-center justify-center flex-col gap-16 transition-opacity duration-200 ease-in-out bg-transparent bg-gradient-to-r from-[#c33764] to-[#1d2671]' >
            <img src={bg} alt="" className='absolute min-h-screen object-cover pointer-events-none overflow-hidden' />
            <div className="absolute">
                <Lottie
                    options={floatingHeartAnimation}
                    height={230}
                    width={230}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div className="heart opacity-75">
                <div className="text absolute -top-4 z-10 w-72 p-3 h-auto flex flex-col rotate-45 select-none">
                    <p className='w-fit h-fit text-font text-center custom-color-text'>
                        In the midst of life's tumultuous sea,
                    </p>
                    <p className='w-fit h-fit text-font text-center custom-color-text'>
                        Amidst chaos and uncertainty,
                    </p>
                    <p className='w-fit h-fit text-font text-center custom-color-text'>
                        I found my anchor, my guiding light,
                    </p>
                    <p className='w-fit h-fit text-font text-center custom-color-text'>
                        In your love, serene and bright.
                    </p>
                </div>
                <div className="autor text-author absolute bottom-8 left-10 rotate-45">
                    ~ Manas
                </div>
            </div>
            <div className="content-ask text-white z-10 flex flex-col flex-wrap gap-6 justify-center items-center">
                <div className="text px-8">
                    <p className='sm:text-5xl text-3xl typing-text text-transparent bg-clip-text bg-gradient-to-br from-[#ff9966] to-[#36d1dc] shadow-pink-800 select-none'>{text}</p>
                </div>
                <div class="button shadow-[5px_5px_0px_0px_rgba(109,40,217)] active:translate-x-1 active:translate-y-1 active:shadow-none duration-150 mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-3 px-4 rounded-md"><button class="w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold">See Mesaage</button></div>
            </div>
        </div>
    );
}
