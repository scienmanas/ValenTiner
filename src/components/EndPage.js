import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import NoteBook from './NoteBook';
import './styles/endpage.css'
import songVideo from './assets/videos/song.mp4';


export default function Note(props) {

  useEffect(() => {
    props.setProgress(100);
  }, []);


  return (
    <div className='note-for-crush bg-transparent bg-gradient-to-br from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] w-full min-h-screen flex flex-col flex-wrap gap-0 sm:gap-6 justify-center items-center'>
      <div className="up-content flex items-center justify-center">
        <div className="note-card flex items-center justify-between ">
         <NoteBook />
        </div>
      </div>
      <div className="down-content w-fit h-fit flex flex-col flex-wrap items-center justify-center gap-2 sm:gap-10">
        <div className={`video video-animation w-80 sm:w-[34rem] lg:w-[36rem] h-auto -rotate-6 p-[6px] mx-auto my-5 bg-transparent bg-gradient-to-r from-[#0099F7] to-[#F11712] rounded-xl shadow-2xl`}>
          <ReactPlayer
            url={songVideo}
            playing={true}
            loop={true}
            controls={true}
            muted={false} // Mute the video to avoid unwanted sound
            width="100%"
            height="100%"
          />
        </div>
        <div className="button">
          <a href="https://www.instagram.com/scienmanas/">
            <button className="button-chat-font  bg-transparent bg-gradient-to-bl from-[#ff00ff] to-[#5A3F37] text-white font-bold py-2 px-4 rounded-lg text-2xl sm:text-3xl lg:text-4xl shadow-2xl hover:scale-110 active:scale-95 duration-150 border-[2px] border-gray-300">
              Wanna Chat ?
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
