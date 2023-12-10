import React from 'react';
import "./Premium.css";

function Premium() {
  return (
    <>
      <div className='PremiumContainer'>
        <div className='PremiumHeading'>
            <p>Cut your writing time by more than half using QuillBot Premium</p>
        </div>
        <div className='Premiumbox'>
            <div className='PremiumCard'>
                <span>ACCELERATE</span>
                <img src='https://assets.quillbot.com/images/theme/light/commonImages/newWordsShadow.svg' alt=''/>
                <div className='PremiumInfo'>
                    <h5>Improve your speed</h5>
                    <p>Paraphaser an unlimited number of words in one click, with a faster processing rate to get more done in less time</p>
                </div>
            </div>
            <div className='PremiumCard'>
                <span>CREATE</span>
                <img src='https://assets.quillbot.com/images/theme/light/commonImages/newCreateNew.svg' alt=''/>
                <div className='PremiumInfo'>
                    <h5>Increase changes</h5>
                    <p>Unlock the final Synonyms setting to maximize the changes to your text.</p>
                </div>
            </div>
            <div className='PremiumCard'>
                <span>EXPLORE</span>
                <img src='https://assets.quillbot.com/images/theme/light/commonImages/allModesUpdated.svg' alt=''/>
                <div className='PremiumInfo'>
                    <h5>Define your voice</h5>
                    <p>Get 6 additional modes plus the option to create an unlimited number of Custom modes.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Premium;