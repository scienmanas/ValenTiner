import React from 'react'
import { useState, useEffect } from 'react'
import Matter from 'matter-js';
import './styles/frontpage.css'
import bg from './assets/images/page-1_bg.png'


export default function FrontPage() {

    const [text, setText] = useState("")
    const [loading, setLoading] = useState(true)
    const sentence = "I am something important to tell you"


    // document.body.style.overflow = 'hidden'

    // useEffect(() => {
        

    //     return () => {
    //         second
    //     }
    // }, [])




    return (
        <>
            <div className='min-h-screen overflow-hidden w-full flex items-center justify-center flex-col gap-16'>
                <img
                    src={bg}
                    alt=""
                    className='absolute min-h-screen object-cover pointer-events-none' />
                <div className="heart opacity-75">
                    <div className="text absolute -top-4 z-10 w-72 p-3 h-auto flex flex-col rotate-45 select-none">
                        <p className='w-fit h-fit text-font text-center'>
                            In the midst of life's tumultuous sea,
                        </p>
                        <p className='w-fit h-fit text-font text-center'>
                            Amidst chaos and uncertainty,
                        </p>
                        <p className='w-fit h-fit text-font text-center'>
                            I found my anchor, my guiding light,
                        </p>
                        <p className='w-fit h-fit text-font text-center'>
                            In your love, serene and bright.
                        </p>
                    </div>
                    <div className="autor text-author absolute bottom-8 left-10 rotate-45">
                        ~ Manas
                    </div>
                </div>
                <div className="content-ask text-white z-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aut in incidunt! Harum, aliquam? Totam enim in sequi laboriosam ratione quod, voluptas quas animi adipisci officia eaque laborum quia obcaecati?
                </div>
            </div>
        </>
    )
}
