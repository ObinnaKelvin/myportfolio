import React, { Component } from 'react';

import videoSource from "./video/typingdark.mp4";
import downArrow from "./utils/svg/thin-arrowheads-pointing-down.svg"
import "../css/Hero.css";
import Typical from 'react-typical';
// import { Spring } from 'react-spring';
import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';

class Hero extends Component {

    render() {

        // "../components/video/typingdark.mp4";
        // "https://www.sample-videos.com/abc/video545/mp4/720/big_buck_bunny_720p_1mb.mp4";
        // "typing_dark.mov";
        
        // "https://www.videvo.net/videvo_files/converted/2015_10/preview/Typing_dark_03_Videvo.mov33486.webm"
        
        // "typingdark.mp4";
        // "https://www.w3schools.com/tags/movie.mp4"
        // "../externals/typingdark.mp4";
        // "https://www.videvo.net/video/typing-in-the-dark-03/4478/"
        
        return (

        <div className="v-header container">
            <div className = "fullscreen-video-wrap">
                <video autoPlay="autoplay" loop="loop" muted poster="../externals/poster.jpg">
                    <source type="video/mp4" src={videoSource} />
                </video>
            </div>
            <div className="header-overlay">

            </div>
            <div className="header-content" style={{animation: animations.fadeIn}}>
                <h1><span style={{color: "white"}}>Hello,</span> <span style={{color: "#f57c00"}}>I'm Obinna Okere</span>.</h1>
                <h2><span style={{color: "white"}}>I'm a full-stack Web Developer</span></h2>
                        <Typical
                            // steps={['Web Developer 💻 ', 2000, ' Techie 👱🏻 ', 2000, ' Pencil Artist ✏️', 2000 ]}
                            steps={[ ' I can turn your ideas into a Reality ', 2000, 'I Create Websites, Applications, or anything that lives on the Web', 1000,' Explore my Portfolio', 2000 ]}
                            // loop={Infinity}
                            wrapper="p"
                        />
                {/* <p>Web Developer | Techie | Artist</p> */}
                <div className="downArrow bounce">
                    <img 
                        style ={{height:"20px", width:"20px", margin:"auto"}}
                        src={downArrow}
                    />
                </div>
                {/* <button href="#" className="btn">
                    <strong>Read More</strong>
                    <i class="fa fa-angle-down fa-5x" aria-hidden="true"></i>
                </button> */}
            </div>
        </div>
    )

}

    }

export default Hero;
