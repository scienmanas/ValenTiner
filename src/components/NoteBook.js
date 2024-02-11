import React from 'react';
import './styles/notebook.css';

export default function NoteBook() {
    return (
        <div className='Notebook relative flex items-center justify-between w-64 h-80'>
            <div id="container">
                <div className="book shadow-lg shadow-emerald-400">
                    <div className="cover">
                        <div className="notes custom-cover-text p-4 flex flex-col gap-28 items-end select-none text-transparent bg-clip-text bg-gradient-to-tr from-[#ed4264] to-[#ffedbc] rounded-xl ">
                            <div className="text-1">
                                Happy Valentines Day <span className='text-red-700'>💕</span>
                            </div>
                            <div className='w-fit h-fit text-end text-3xl select-none custom-author-book-cover text-transparent bg-clip-text bg-gradient-to-tr from-[#1d2671] to-[#ffedbc]'>
                                ~ Manas
                            </div>
                        </div>
                        <div className="smile"></div>
                        <div className="eyes"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
