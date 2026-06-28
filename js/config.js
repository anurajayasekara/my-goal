"use strict";

/* ============================================================
   Scholarship Countdown App
   Global Configuration
   Version : 1.0.0
============================================================ */

const CONFIG = Object.freeze({

    /* --------------------------------------------------------
       Application
    -------------------------------------------------------- */
    APP_NAME: "Scholarship Countdown",

    APP_VERSION: "1.0.0",

    APP_AUTHOR: "Anura Jayasekara",

    LANGUAGE: "si-LK",

    DATE_FORMAT: "yyyy-MM-dd",


    /* --------------------------------------------------------
       Examination
    -------------------------------------------------------- */
    EXAM_DATE: "2026-10-31",

    MAX_SCORE: 200,

    TARGET_SCORE: 160,


    /* --------------------------------------------------------
       Badge Levels
    -------------------------------------------------------- */
    BADGES: Object.freeze({

        BRONZE: {
            min: 120,
            title: "Bronze"
        },

        SILVER: {
            min: 150,
            title: "Silver"
        },

        GOLD: {
            min: 170,
            title: "Gold"
        },

        PLATINUM: {
            min: 190,
            title: "Platinum"
        }

    }),


    /* --------------------------------------------------------
       Theme
    -------------------------------------------------------- */
    THEME: Object.freeze({

        PRIMARY: "#5B4DFF",

        SUCCESS: "#22C55E",

        WARNING: "#F59E0B",

        DANGER: "#EF4444",

        INFO: "#3B82F6",

        BACKGROUND: "#F7F8FC",

        CARD: "#FFFFFF",

        TEXT: "#1E293B"

    })


});