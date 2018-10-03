import React from 'react';


import videoLow from './../res/humanlow.mp4'

export const homepageContent = {
    title: <>The <strong>Human</strong>lapse project</>,
    subtitle: `Timelapses of Humans.`
};

export const humanlapseGallery = {

    WhatIsThis: {
        name: "Humanlapse?",
        description: `The timelapse is a famous photography technique used to create video based on a burst of pictures.
        It is widely used in landscape photography, architecture and cityscape photography.
        However, this technique is rarely used to shoot human subjects. The humanlapse project is about filling this gap by making timelapses of humans.
        `,
        content: [
            {
                data: 'https://vimeo.com/292003342/',
                credits: 'Some credits for the video'
            }
        ]
    },

    Low: {
        name: "Low",
        description: "Zoom in on a human subject, zoom out on a wide cityscape.",
        content: [
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            }
        ]
    },
    ZoomInZoomOut: {
        name: "Zoom in Zoom out",
        description: "Zoom in on a human subject, zoom out on a wide cityscape.",
        content: [
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            },
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            },
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            }
        ]
    },

    MovingPortraits: {
        name: "Moving portraits",
        description: "Moving portraits are the simplest form of humanlapse. They're also the most interesting in terms of facial expressions",
        content: [
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            },
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            },
            {
                data: videoLow,
                credits: 'Some credits - taken in some city - model: name'
            }
        ]
    },

};

