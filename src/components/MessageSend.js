import React, { useState, useEffect } from 'react';
import { DatePicker } from "antd";
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './styles/message.css';

export default function MessageSend() {

    const templateId = process.env.REACT_APP_API_EMAIL_JS_templateId;
    const serviceId = process.env.REACT_APP_API_EMAIL_JS_serviceId;
    const publicKey = process.env.REACT_APP_API_EMAIL_JS_publicKey;

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null)
    const [isSent, setIsSent] = useState("Send");
    const [messageInput, setMessageInput] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const navigate2 = useNavigate();

    const handleOnChangeDate = (date, dateString) => {
        setDate(dateString);
    }

    dayjs.extend(customParseFormat);

    const handleOnChangeTime = (time, timeString) => {
        setTime(timeString);
    };

    useEffect(() => {
        setIsButtonDisabled(!(messageInput !== '' && date && time));
    }, [date, time, messageInput]);

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        setIsSent("Sent");
        setIsButtonDisabled(true);

        // Emailing

        const templateParams = {
            message: messageInput,
            date: dayjs(date).format('DD/MM/YYYY'),
            time: time
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            })

        setDate(new Date());
        setTime(null);
        setMessageInput('');

        setTimeout(() => {
            navigate2('/endpage')
        }, 3000)
    }

    return (
        <div className="message-form flex items-center justify-around flex-col gap-5">
            <div className="time-and-date flex flex-row flex-wrap items-center justify-center gap-6">
                <div className="date w-fit h-fit">
                    <DatePicker
                        onChange={handleOnChangeDate}
                        className='w-36 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14'
                    />
                </div>
                <div className="time w-fit h-fit">
                    <TimePicker
                        changeOnScroll
                        needConfirm={false}
                        onChange={handleOnChangeTime}
                        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                        className='w-36 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14'
                        value={time ? dayjs(time, 'HH:mm:ss') : null}
                    />
                </div>
            </div>
            <div className="text-area">
                <textarea
                    className='area-text w-[19.5rem] sm:w-[26rem] lg:w-[29.8rem] h-36 sm:h-48 lg:h-60 text-slate-600 font-bold p-4 rounded-lg shadow-lg hover:shadow-xl active:shadow-none duration-200 placeholder:text-slate-400'
                    name=""
                    id=""
                    placeholder='Message here...'
                    onChange={(e) => setMessageInput(e.target.value)}
                    value={messageInput}
                />
            </div>
            <div className="button-send">
                <button
                    className={`send-button w-fit h-fit ${isButtonDisabled ? 'opacity-30' : ''}`}
                    disabled={isButtonDisabled}
                    onClick={handleSubmitMessage}
                >
                    <div
                        className={`button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 ${isButtonDisabled ? '' : 'hover:scale-110 active:scale-90'} duration-100 mb-8 sm:mb-4 rotate-6`}>
                        {isSent}
                    </div>
                </button>
            </div>
            <Link to="/endpage" className="endpage-link hidden pointer-events-none select-none"></Link>
        </div>
    );
}
