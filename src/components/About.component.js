import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import "../css/About.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import obinna from "./utils/image/obinna.jpg";
import fast from "./utils/image/fast.png";
import dynamic from "./utils/image/dynamic.png";
import intuitive from "./utils/image/intuitive.png";
import responsive from "./utils/image/responsive.png";
import ProgressBar from 'react-animated-progress-bar';
import reactImg from "./utils/image/react.png";
import github from "./utils/image/github.png";
import firebase from "./utils/image/firebase.png";
import node from "./utils/image/node.png";
import CSS from "./utils/image/CSS3.png";
import HTML from "./utils/image/html5.png";
import JS from "./utils/image/javascript.png";
import mongo from "./utils/image/mongo.png";
import front from "./utils/image/front.png";
import back from "./utils/image/back.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Projects from './Projects.component.js';

const { Meta } = Card;
const myRef = document.querySelector('.scrollable-div')

const About = () => {

    return (
        <div >
            <div className="holder1">
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <h1 className="centeredText"><span style={{color: "orange"}}>Who is this Guy?</span></h1>
                        <div className="container">
                            <ScrollAnimation animateIn="zoomIn">
                                <div className="avatar">
                                <img 
                                    src = {obinna}

                                />
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className="description">
                                    <p>
                                    I'm a Front-End freelance Developer in Lagos, Nigeria. 
                                    I have strong passion for UI effects, 
                                    animations and creating intuitive dynamic user experiences. 
                                    I would like to make something special for you 👱🏻
                                    </p>
                                </div>
                            </ScrollAnimation>

                        </div>
                        {/* <Card
                            style={{ width: '50%', margin: 'auto', textAlign: 'center'}}
                            cover={
                            <img
                                alt="example"
                                src={fast}
                                style ={{height: '220px'}}
                            />
                            }
                        >
                            <Meta
                            title="Who is this guy?"
                            description="I'm a Front-End freelance Developer in Lagos, Nigeria. I have strong passion for UI effects, animations and creating intuitive dynamic user experiences. I would like to make something special for you 👱🏻"
                            />
                        </Card> */}
                    </Col>
                    {/* <Col xs={24} sm={24} md={24}> 
                        <div style={{display:"flex"}}>
                            <ProgressBar 
                                width = "100"
                                height = "100"
                                fontColor = "white"
                                percentage = "40"
                                trackPathColor = "#bf360c"
                                trackWidth = "13"
                                scrollArea = {myRef}
                            />
                        </div>
                        <div style={{display:"flex"}}>
                        <ProgressBar 
                                width = "100"
                                height = "100"
                                fontColor = "white"
                                percentage = "40"
                                trackPathColor = "grey"
                                trackWidth = "13"
                                defColor = {{
                                    fair: 'orangered',
                                    good: 'orangered',
                                    excellent: 'orangered',
                                    poor: 'orangered'
                                }}
                                scrollArea = {myRef}
                            />
                        </div>
                    </Col> */}
                </Row>
                    <div className="divider"></div>
                {/* <h1 className="centeredText"><span style={{color: "orange"}}>My Tools</span></h1> */}
                <Row gutter={[0, 40]}>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                        <ProgressBar 
                                    width = "150"
                                    height = "150"
                                    fontColor = "white"
                                    percentage = "90"
                                    trackPathColor = "grey"
                                    trackWidth = "13"
                                    defColor = {{
                                        fair: 'orangered',
                                        good: 'orangered',
                                        excellent: 'orangered',
                                        poor: 'orangered'
                                    }}
                                    scrollArea = {myRef}
                                />
                        </div>

                         <div className="container">
                         <img 
                                    src = {HTML}

                                />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                            <ProgressBar 
                                        width = "150"
                                        height = "150"
                                        fontColor = "white"
                                        percentage = "60"
                                        trackPathColor = "grey"
                                        trackWidth = "13"
                                        defColor = {{
                                            fair: 'orangered',
                                            good: 'orangered',
                                            excellent: 'orangered',
                                            poor: 'orangered'
                                        }}
                                        scrollArea = {myRef}
                                    />
                        </div>   
                         <div className="container">
                            <img 
                                    src = {CSS}

                                />
                        </div>                    
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                            <div className="centeredDiv">
                                <ProgressBar 
                                            width = "150"
                                            height = "150"
                                            fontColor = "white"
                                            percentage = "80"
                                            trackPathColor = "grey"
                                            trackWidth = "13"
                                            defColor = {{
                                                fair: 'orangered',
                                                good: 'orangered',
                                                excellent: 'orangered',
                                                poor: 'orangered'
                                            }}
                                            scrollArea = {myRef}
                                        />
                            </div>
                            <div className="container">
                            <img 
                                    src = {JS}

                                />
                            </div>                        
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                            <ProgressBar 
                                        width = "150"
                                        height = "150"
                                        fontColor = "white"
                                        percentage = "70"
                                        trackPathColor = "grey"
                                        trackWidth = "13"
                                        defColor = {{
                                            fair: 'orangered',
                                            good: 'orangered',
                                            excellent: 'orangered',
                                            poor: 'orangered'
                                        }}
                                        scrollArea = {myRef}
                                    />
                        </div>
                         <div className="container">
                         <img 
                                src = {reactImg}

                            />
                        </div>                      
                    </Col>
                    </Row>
                <Row gutter={[0,40]}>
                <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                            <ProgressBar 
                                        width = "150"
                                        height = "150"
                                        fontColor = "white"
                                        percentage = "60"
                                        trackPathColor = "grey"
                                        trackWidth = "13"
                                        defColor = {{
                                            fair: 'orangered',
                                            good: 'orangered',
                                            excellent: 'orangered',
                                            poor: 'orangered'
                                        }}
                                        scrollArea = {myRef}
                                    />
                        </div>
                         <div className="container">
                            <img 
                                src = {node}
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                                <ProgressBar 
                                            width = "150"
                                            height = "150"
                                            fontColor = "white"
                                            percentage = "75"
                                            trackPathColor = "grey"
                                            trackWidth = "13"
                                            defColor = {{
                                                fair: 'orangered',
                                                good: 'orangered',
                                                excellent: 'orangered',
                                                poor: 'orangered'
                                            }}
                                            scrollArea = {myRef}
                                        />
                        </div>    
                         <div className="container">
                         <img 
                                src = {mongo}
                            />
                        </div>                    
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                            <ProgressBar 
                                        width = "150"
                                        height = "150"
                                        fontColor = "white"
                                        percentage = "50"
                                        trackPathColor = "grey"
                                        trackWidth = "13"
                                        defColor = {{
                                            fair: 'orangered',
                                            good: 'orangered',
                                            excellent: 'orangered',
                                            poor: 'orangered'
                                        }}
                                        scrollArea = {myRef}
                                    />
                        </div>
                        <div className="container">
                            <img 
                                src = {github}

                            />     
                        </div>
                      
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="centeredDiv">
                            <ProgressBar 
                                        width = "150"
                                        height = "150"
                                        fontColor = "white"
                                        percentage = "60"
                                        trackPathColor = "grey"
                                        trackWidth = "13"
                                        defColor = {{
                                            fair: 'orangered',
                                            good: 'orangered',
                                            excellent: 'orangered',
                                            poor: 'orangered'
                                        }}
                                        scrollArea = {myRef}
                                    />
                        </div> 
                         <div className="container">
                         <img 
                                src = {firebase}

                            /> 
                        </div>                      
                    </Col>
                </Row>
            </div>

            <div className="holder2">
            {/* <div className="divider"></div> */}
            <h1 style={{textAlign: "center", marginBottom: "50px"}}>What I Do</h1>
                <Row>
                    <Col xs={24} sm={12} md={8}>
                    <Card
                        style={{ width: 300, margin: 'auto', textAlign: 'center'}}
                        cover={
                        <img
                            alt="example"
                            src={front}
                            style ={{height: '220px'}}
                        />
                        }
                    >
                        <Meta
                        title="Front-End Development"
                        description="Create responsive pages for apps and websites."
                        />
                    </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                    <Card
                        style={{ width: 300, margin: 'auto', textAlign: 'center'}}
                        cover={
                        <img
                            alt="example"
                            src={back}
                            style ={{height: '220px'}}
                        />
                        }
                    >
                        <Meta
                        title="Back-End Development"
                        description="Build APIs and backend solutions to interact with servers and databases."
                        />
                    </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                    <Card
                        style={{ width: 300, margin: 'auto', textAlign: 'center'}}
                        cover={
                        <img
                            alt="example"
                            src={back}
                            style ={{height: '220px'}}
                        />
                        }
                    >
                        <Meta
                        title="Mobile App Developement"
                        description="An Aspiring Mobile App Developer"
                        />
                    </Card>
                    </Col>
                </Row>
            </div>
            <div className="holder3">
                <h1 style={{textAlign: "center", marginBottom: "50px"}}>Projects</h1>
                <Projects />
            </div>
            <div className="holder4">
            <h1 style={{textAlign: "center", marginBottom: "50px"}}>Priority</h1>
            <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
                <Card
                    style={{ width: 300, margin: 'auto'}}
                    cover={
                    <img
                        alt="example"
                        src={fast}
                        style ={{height: '220px'}}
                    />
                    }
                >
                    <Meta
                    title="Fast"
                    description="Fast load times and lag fee interaction, my priority"
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card
                        style={{ width: 300, margin: 'auto' }}
                        cover={
                        <img
                            alt="example"
                            src={intuitive}
                            style ={{height: '220px'}}
                        />
                        }
                >
                    <Meta
                    title="Intuitive"
                    description="Strong preference for easy to use, intuitive UX/UI"
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card
                        style={{ width: 300, margin: 'auto' }}
                        cover={
                        <img
                            alt="example"
                            src={responsive}
                            style ={{height: '220px'}}
                        />
                        }
                    >
                    <Meta
                    title="Responsive"
                    description="My layouts will work on any device, big or small."
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card
                        style={{ width: 300, margin: 'auto' }}
                        cover={
                        <img
                            alt="example"
                            src={dynamic}
                            style ={{height: '220px'}}
                        />
                        }
                    >
                    <Meta
                    title="Dynamic"
                    description="Websites don't have to be static. I love making pages come to life."
                    />
                </Card>
            </Col>
            </Row>                
            </div>

        </div>
    )
}

export default About;
