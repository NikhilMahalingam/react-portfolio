import React from 'react'
import './Nav.css'
import {useState} from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {

  const[navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
        <div className="nav-container">
            <div className="navbar">
                <div className="logo" style={{
                color: navOpen ? "white": "black",
                transitionDelay: "0.1s"
            }}>NM.</div>
                <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}

                        style={{
                            background: navOpen ? "white": "black",
                            transitionDelay: "0.1s"
                        }}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}

                        style={{
                            background: navOpen ? "white": "black",
                            transitionDelay: "0.1s"
                        }}></span>
                    </div>
                </div>
            </div>
            <div className='nav-overlay' style={{
                top: navOpen ? "0": "-100%",
                transitionDelay: navOpen ? "0s" : "0s",

            }}>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" onClick={() => setNavOpen(!navOpen)}
                        style={{
                            top: navOpen ? "0": "120px",
                            transitionDelay: navOpen ? "0.8s": "0s"
                        }}
                        >Home</Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={() => setNavOpen(!navOpen)}
                        style={{
                            top: navOpen ? "0": "120px",
                            transitionDelay: navOpen ? "0.9s": "0s"
                        }}
                        >About</Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={() => setNavOpen(!navOpen)}
                        style={{
                            top: navOpen ? "0": "120px",
                            transitionDelay: navOpen ? "1s": "0s"
                        }}
                        >Projects</Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                </ul>

                <div className="nav-footer">
                    <div className="location"
                    style={{
                        bottom: navOpen ? "0": "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.2s": "0",
                    }}
                    >
                        <span>Livingston, NJ</span>
                    </div>

                    <div className='nav-social-media'>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/nikhilmahalingam/" target="_blank"
                                    style={{
                                        bottom: navOpen ? "0": "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.2s": "0",
                                    }}
                                >LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/NikhilMahalingam" target="_blank"
                                    style={{
                                        bottom: navOpen ? "0": "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.2s": "0",
                                    }}
                                >GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Nav