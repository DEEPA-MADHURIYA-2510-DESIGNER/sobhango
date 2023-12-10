import React from 'react';
import "../Display/Display.css";
import ToggleSideBar from '../toggleSideBar/toggleSideBar';
import Summarizer from '../Summarzier/Summarizer';

function DisplaySummarizer() {
    return (
        <>
            <div className='DisplayContainer'>
                <div className='div1'>
                <ToggleSideBar/>
                </div>
                <div className='div2'>
                <Summarizer/>
                </div>
            </div>
        </>
    )
}

export default DisplaySummarizer;