"use strict";

/*
====================================================
 My Goal - Global Configuration
 Designed & Developed by Anura Jayasekara
====================================================
*/

const CONFIG = Object.freeze({

    /* ==========================================
       APPLICATION
    ========================================== */

    APP_NAME: "My Goal",

    APP_TAGLINE: "Your Daily Journey to Success",

    APP_DESCRIPTION:
        "A Progressive Web App designed to help Grade 5 Scholarship students track their daily progress, stay motivated, and achieve their goals.",

    APP_VERSION: "1.0.0",

    AUTHOR: "Anura Jayasekara",


    /* ==========================================
       EXAM
    ========================================== */

    EXAM_DATE: "2026-08-09",

    MAX_SCORE: 200,

    TARGET_SCORE: 160,


    /* ==========================================
       BADGE LEVELS
    ========================================== */

    BADGE_LEVELS: Object.freeze([
        { min: 190, badge: "🏆", title: "Legend" },
        { min: 180, badge: "🥇", title: "Excellent" },
        { min: 170, badge: "⭐", title: "Great" },
        { min: 160, badge: "👍", title: "Target Achieved" },
        { min: 140, badge: "📘", title: "Keep Going" },
        { min: 0,   badge: "🌱", title: "Beginner" }
    ]),


    /* ==========================================
       THEME
    ========================================== */

    THEME: Object.freeze({

        PRIMARY: "#5B5CEB",

        SECONDARY: "#7B61FF",

        SUCCESS: "#22C55E",

        WARNING: "#F59E0B",

        DANGER: "#EF4444",

        INFO: "#3B82F6",

        LIGHT: "#F8FAFC",

        DARK: "#1E293B"

    })

});


Object.freeze(CONFIG);