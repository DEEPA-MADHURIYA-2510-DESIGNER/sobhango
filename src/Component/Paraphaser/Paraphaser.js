import React from 'react';
import "./Paraphaser.css";
import Premium from '../Premium/Premium';
import Footer from '../Footer/Footer';
import TextareaPara from '../Textarea/TextareaPara';

function Paraphaser() {
    return (
        <>
            <div className='Paraphaser-Container'>
                <div className='HEADING'>
                    <h1>Paraphaser</h1>
                </div>
                <div className='Paraphaser-textarea'>
                <TextareaPara/>
                </div>
                <div className='Paraphaser-permium'>
                    <Premium/>
                </div>
                <div className='Paraphaser-footer'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Paraphaser;