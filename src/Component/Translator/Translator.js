import React from 'react';
import Footer from '../Footer/Footer';
import TranslatorTable from '../TranslatorTable/TranslatorTable';
import FAQ from "../FAQ/FAQ";
import TextareaTranslator from '../Textarea/TextareaTranslator';

function Translator() {
  return (
    <>
     <div className='SummarizerContainer'>
                <div className='HEADING'>
                    <h1>Translator</h1>
                </div>
                <div className='Paraphaser-textarea'>
                    <TextareaTranslator/>
                    <TranslatorTable/>
                    <FAQ/>
                </div>
                <div className='Paraphaser-footer'>
                    <Footer/>
                </div>
            </div> 
    </>
  )
}

export default Translator;