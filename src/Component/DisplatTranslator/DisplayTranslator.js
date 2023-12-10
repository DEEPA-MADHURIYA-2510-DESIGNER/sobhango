import React from 'react';
import "../Display/Display.css";
import ToggleSideBar from '../toggleSideBar/toggleSideBar';
import Translator from '../Translator/Translator';

function DisplayTranslator() {
    return (
        <>
            <div className='DisplayContainer'>
                <div className='div1'>
                    <ToggleSideBar/>
                </div>
                <div className='div2'>
                    <Translator/>
                </div>
            </div>
        </>
    )
}

export default DisplayTranslator;