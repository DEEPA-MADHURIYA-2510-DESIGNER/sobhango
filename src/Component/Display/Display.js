import React from 'react';
import "./Display.css";
import ToggleSideBar from '../toggleSideBar/toggleSideBar';
import Paraphaser from '../Paraphaser/Paraphaser';

function Display() {
    return (
        <>
            <div className='DisplayContainer'>
                <div className='div1'>
                <ToggleSideBar/>
                </div>
                <div className='div2'>
                <Paraphaser/>
                </div>
            </div>
        </>
    )
}

export default Display;