"use strict";

/* ==========================================================
   My Goal
   Global Configuration
   Designed & Developed by Anura Jayasekara
========================================================== */

const CONFIG = Object.freeze({

    /* ======================================================
       Application
    ====================================================== */

    APP_NAME: "My Goal",

    APP_TAGLINE: "Your Daily Journey to Success",

    APP_DESCRIPTION:
        "A Progressive Web App designed to help Grade 5 Scholarship students track their daily progress, stay motivated, and achieve their goals.",

    AUTHOR: "Anura Jayasekara",

    VERSION: "0.1.0",

    /* ======================================================
       Examination
    ====================================================== */

    EXAM_DATE: "2026-08-09",

    MAXIMUM_SCORE: 200,

    TARGET_SCORE: 160,

    /* ======================================================
       Sidebar
    ====================================================== */

    SIDEBAR: {

        ICON: "🎯",

        BRAND_NAME: "My Goal",

        BRAND_TAGLINE: "Your Daily Journey to Success",

        MENU: [

            {
                id: "dashboard",
                icon: "🏠",
                title: "Dashboard",
                active: true
            },

            {
                id: "history",
                icon: "📅",
                title: "History",
                active: false
            },

            {
                id: "progress",
                icon: "📈",
                title: "Progress Chart",
                active: false
            },

            {
                id: "motivation",
                icon: "⭐",
                title: "Motivation",
                active: false
            },

            {
                id: "settings",
                icon: "⚙",
                title: "Settings",
                active: false
            },

            {
                id: "about",
                icon: "ℹ",
                title: "About",
                active: false
            }

        ]

    },

    /* ======================================================
       Badge Levels
    ====================================================== */

    BADGES: [

        {
            name: "Bronze",
            minimumScore: 120
        },

        {
            name: "Silver",
            minimumScore: 140
        },

        {
            name: "Gold",
            minimumScore: 160
        },

        {
            name: "Platinum",
            minimumScore: 180
        }

    ],

    /* ======================================================
       Theme
    ====================================================== */

    THEME: {

        PRIMARY: "#5B5CEB",

        SECONDARY: "#7B61FF",

        SUCCESS: "#22C55E",

        WARNING: "#F59E0B",

        DANGER: "#EF4444",

        INFO: "#3B82F6"

    }

});