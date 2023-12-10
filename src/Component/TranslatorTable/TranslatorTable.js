import React from 'react';
import "../Table/Table.css";

function TranslatorTable() {
    return (
        <>
            <div className='table'>
                <div className='tableHeading'>
                    <h1>A Top-Tier Translator from QuillBot</h1>
                    <p>Use the latest addition to our array of handy writing tools to translate text into 45 languages.</p>
                </div>
                <div className='tableContainer'>
                    <div className='tablebox'>
                        <div className='tableCard'>
                            <div>
                                <p>AI-powered</p>
                                <p>Translates</p>
                                <p>Multilingual</p>
                                <p>Pricing</p>
                            </div>
                            <div>
                                <p>Translates text quickly & accurately</p>
                                <p>Words, sentences & paragraphs</p>
                                <p>40+ Languages</p>
                                <p>100% free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TranslatorTable;