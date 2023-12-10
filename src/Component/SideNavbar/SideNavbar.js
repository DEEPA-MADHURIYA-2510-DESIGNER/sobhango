import React from 'react';
import "./SideNavbar.css";
import { Link } from 'react-router-dom';
import { TbTextSpellcheck } from "react-icons/tb";
import { RiQuillPenFill } from "react-icons/ri";
import { MdOutlineFindInPage } from "react-icons/md";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { ImQuotesLeft } from "react-icons/im";
import { BsTextareaT } from "react-icons/bs";


function SideNavbar() {
    return (
        <>
            <div className='sidenav'>
                <div className='sidenav_buttons'>
                    <Link className='link' to="#">
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
                    <Link className='link' to="#">
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

export default SideNavbar;