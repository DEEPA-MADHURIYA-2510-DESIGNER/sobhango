import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { FaEarthAfrica } from "react-icons/fa6";
import logo from "../../Image/logo-white.png";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { TbTextSpellcheck } from "react-icons/tb";
import { RiQuillPenFill } from "react-icons/ri";
import { MdOutlineFindInPage } from "react-icons/md";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { ImQuotesLeft } from "react-icons/im";
import { BsTextareaT } from "react-icons/bs";

function Navbar() {
  const [slide, SetSlide] = useState(false);

  const handleDisplay = () =>{
    SetSlide(!slide)
    console.log(slide)
  }

  const handlenavSlide = {
    transition: 'transform 0.3s ease-in-out',
    transform: slide ? 'translateX(0)' : 'translateX(-475px)',
  };

  return (
    <>
      <div className='NavbarContainer'>
        <div className='NavbarLeft'>
          <img src={logo} alt="" />
        </div>
        <div className='Navbarcenter'>
          <h1></h1>
        </div>
        <div className='NavbarRight'>
          <FaBarsStaggered className='earth Staggered' onClick={()=>handleDisplay()}/>
          <FaEarthAfrica className='earth' />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQyy_dtZvstOR_-EpfdrKOrcAeMmWVhIHxA&usqp=CAU" sx={{ width: 32, height: 32 }}></Avatar>
        </div>
      </div>
      <div className='sidenav navSlide' style={handlenavSlide}>
                <div className='sidenav_buttons'>
                    <Link className='link' to="/Paraphaser">
                        <button className="sidenav_button">
                            <BsTextareaT />
                            <span>Paraphraser</span>
                        </button>
                    </Link>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <TbTextSpellcheck />
                            <span>Grammar Checker</span>
                        </button>
                    </Link>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <RiQuillPenFill />
                            <span>Co-Writer</span>
                        </button>
                    </Link>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <MdOutlineFindInPage />
                            <span>Plagiarism Checker</span>
                        </button>
                    </Link>
                    <Link className='link' to="/Summarizer">
                        <button className="sidenav_button">
                            <HiMiniBars3BottomLeft />
                            <span>Summarizer</span>
                        </button>
                    </Link>
                    <Link className='link' to="/Translator">
                        <button className="sidenav_button">
                            <LuLanguages />
                            <span>Translator</span>
                        </button>
                    </Link>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <ImQuotesLeft />
                            <span>Citation Generator</span>
                        </button>
                    </Link>
                </div>
            </div>
    </>
  )
}

export default Navbar;