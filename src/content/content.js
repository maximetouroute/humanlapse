import React from 'react';


// Zoom in zoom out
import z1 from './../res/book/zoomInZoomOut/CSU6_EDITSINGLE.mp4'
import z2 from './../res/book/zoomInZoomOut/DVI2_EDITSINGLE.mp4'
import z3 from './../res/book/zoomInZoomOut/JSA11_EDITSINGLE.mp4'
import z4 from './../res/book/zoomInZoomOut/SPHA1_EDITSINGLE.mp4'
import z5 from './../res/book/zoomInZoomOut/CRO3_EDITSINGLE.mp4'
import z6 from './../res/book/zoomInZoomOut/DVI6_EDITSINGLE.mp4'
import z7 from './../res/book/zoomInZoomOut/CRO7_EDITSINGLE.mp4'
import z8 from './../res/book/zoomInZoomOut/ADA2.mp4';

// Moving portraits
import m1 from './../res/book/movingPortraits/AAN2_EDITSINGLE.mp4'
import m2 from './../res/book/movingPortraits/AAN4_EDITSINGLE.mp4'
import m3 from './../res/book/movingPortraits/AAN5_EDITSINGLE.mp4'
import m4 from './../res/book/movingPortraits/DVI4_EDITSINGLE.mp4'
import m5 from './../res/book/movingPortraits/EGO1_EDITSINGLE.mp4'
import m6 from './../res/book/movingPortraits/SPHB1_EDITSINGLE.mp4'
import m7 from './../res/book/movingPortraits/SPHB2_EDITSINGLE.mp4'
import m8 from './../res/book/movingPortraits/FFO12_EDITSINGLE.mp4'
import m9 from './../res/book/movingPortraits/ADA5_EDITSINGLE.mp4'
import m10 from './../res/book/movingPortraits/FBO9_EDITSINGLELOW.mp4'

// Time travelers
import t1 from './../res/book/timeTravellers/FFO11_EDITSINGLE.mp4'
import t2 from './../res/book/timeTravellers/EGOM2_EDITSINGLE2.mp4'
import t3 from './../res/book/timeTravellers/CRO5B_EDITSINGLE2.mp4'
import t4 from './../res/book/timeTravellers/LNE7_EDITSINGLE.mp4'


// Stop motion
import s1 from './../res/book/stopMotion/EGO5_EDITSINGLE.mp4'
import s2 from './../res/book/stopMotion/CRO5_EDITSINGLE2.mp4'
import s3 from './../res/book/stopMotion/SPHA2_EDITSINGLE.mp4'
import s4 from './../res/book/stopMotion/FFO9_EDITSINGLE.mp4'
import s5 from './../res/book/stopMotion/AAN7_EDITSINGLE.mp4'
import s6 from './../res/book/stopMotion/EGO3_EDITSINGLE.mp4'
import s7 from './../res/book/stopMotion/ADA6.mp4'
import s8 from './../res/book/stopMotion/FBO10.mp4'

import ReactPlayer from "react-player";

import videoProfile from './../res/profile.mp4'


export const ContentTypes = Object.freeze({
    VIDEO:   Symbol("video"),
    JSX:  Symbol("jsx"),
});

function humanlapseCreate(url, credits='') {
    return {
        type: ContentTypes.VIDEO,
        data:url,
        credits:credits
    };
}

const zoomInZoomOutContent = [
    humanlapseCreate(z1, 'Chloé'),
    humanlapseCreate(z2, 'Delphine'),
    humanlapseCreate(z6, 'Delphine'),
    humanlapseCreate(z3, 'Joséphine'),
    humanlapseCreate(z4, 'Salomé'),
    humanlapseCreate(z5, 'Charlotte'),
    humanlapseCreate(z8, 'Ada'),
    humanlapseCreate(z7, 'Charlotte')
];

const motionPortraitsContent = [
    humanlapseCreate(m9, 'Ada'),
    humanlapseCreate(m10, 'Florent'),
    humanlapseCreate(m5, 'Eva'),
    humanlapseCreate(m6, 'Salomé'),
    humanlapseCreate(m7, 'Salomé'),
    humanlapseCreate(m8, 'Florent'),
    humanlapseCreate(m1, 'Sarah et Anddy'),
    humanlapseCreate(m2, 'Sarah et Anddy'),
    humanlapseCreate(m3, 'Sarah et Anddy'),

];

const timetravelersContent = [
    humanlapseCreate(t1, 'Florent'),
    humanlapseCreate(t3, 'Charlotte'),
    humanlapseCreate(t4, 'Laure'),
    humanlapseCreate(t2, 'Eva')
];

const experimentContent = [
    humanlapseCreate(s1, 'Eva'),
    humanlapseCreate(s8, 'Florent'),
    humanlapseCreate(s2, 'Charlotte'),
    humanlapseCreate(s3, 'Salomé'),
    humanlapseCreate(s7, 'Ada'),
    humanlapseCreate(s4, 'Florent'),
    humanlapseCreate(s6, 'Eva'),
    humanlapseCreate(s5, 'Sarah et Anddy')
];

export const homepageContent = {
    title: <>The <strong>Human</strong>lapse project</>,
    subtitle: `Timelapses of Humans.`
};

const aboutPage = (<div style={{
    display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>

        <h3 style={{fontSize: '2rem'}}>Hi, I'm Maxime</h3>
        <ReactPlayer url={videoProfile} loop={true} width={'80%'} height={'80%'} playing style={{
            marginTop: '1rem',
            marginBottom: '2rem'
        }}/>

        <div style={{fontSize:'1.2rem', textAlign:'center'}}>
            I've created this project in 2018 with the goal of bringing portrait timelapses closer to mainstream.
            <br/>
            <br/>

            <h3>Interested in the project ?</h3>
            You can reach me at maxime.touroute@gmail.com for exhibition & collaboration inquiries.
            <br/>
            <br/>
            <a href="https://maximetouroute.github.io/humanlapseProject/">Exhibitions and Scenography material</a>
            <br/>
            <br/>
            <br/>
            <h3>Besides that...</h3>
            I work on many other projects ! You can check it out on my <a href="https://maximetouroute.github.io">Portfolio website</a>
        </div>
    </div>
);

export const contentPages = {

    WhatIsIt: {
        contentType: ContentTypes.VIDEO,
        name: "What's a Humanlapse ?",
        description: <>The <strong>timelapse</strong> is a famous photography technique used
            to create video based on a burst of pictures.
            It is widely used in landscape photography, architecture and cityscape photography.
            However, this technique is rarely used to shoot human subjects. This
            project is about filling this gap by making timelapses of <strong>humans</strong>.<br/><br/> We call them <strong>humanlapses</strong>.
        </>,
        mediaGallery: [
            {
                data: 'https://vimeo.com/292003342/',
                credits: 'The Humanlapse Teaser'
            }
        ]
    },

    ZoomInZoomOut: {
        contentType: ContentTypes.VIDEO,
        name: "Zoom in Zoom out",
        description: <>A collection of humanlapses exploring the movement of <strong>zoom</strong> between a human and a land or cityscape.</>,
        mediaGallery: zoomInZoomOutContent
    },

    MotionPortraits: {
        contentType: ContentTypes.VIDEO,
        name: "Motion portraits",
        description: "Motions portraits is a collection of humanlapses exploring the possibilities of camera and subject movement on traditional portrait shots.",
        mediaGallery: motionPortraitsContent
    },

    TimeTravelers: {
        contentType: ContentTypes.VIDEO,
        name: "Time Travelers",
        description: "The time travelers series is about questioning our perception of time by layering multiple time speeds in a same shot.",
        mediaGallery: timetravelersContent
    },
    Experiments: {
        contentType: ContentTypes.VIDEO,
        name: "Experiments",
        description: "An experimental series on exploring the creative possibilities of the humanlapse technique",
        mediaGallery: experimentContent
    },

    AboutMe: {
        contentType: ContentTypes.JSX,
        name:"About this project",
        jsx:aboutPage
    }
};
