"use strict";

/* ==========================================================
   My Goal
   Global Configuration
   Phase 03 - Countdown Module
   Version : 1.1.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const CONFIG = Object.freeze({

    /* ======================================================
       Application
    ====================================================== */

    APP: Object.freeze({

        NAME: "My Goal",

        TAGLINE: "Your Daily Journey to Success",

        DESCRIPTION:
            "A Progressive Web App designed to help Grade 5 Scholarship students track their daily progress, stay motivated, and achieve their goals.",

        AUTHOR: "Anura Jayasekara",

        VERSION: "1.1.0"

    }),

    /* ======================================================
       Scholarship Examination
    ====================================================== */

    EXAM: Object.freeze({

        TITLE: "Grade 5 Scholarship Examination",

        DATE_TIME: "2026-08-09T09:30:00+05:30",

        TIMEZONE: "Asia/Colombo",

        DISPLAY_DATE: "09 August 2026",

        DISPLAY_TIME: "09:30 AM"

    }),

    /* ======================================================
       Countdown
    ====================================================== */

    COUNTDOWN: Object.freeze({

        /* --------------------------------------------------
           Timer Settings
        --------------------------------------------------- */

        UPDATE_INTERVAL: 1000,

        SHOW_LEADING_ZERO: true,

        /* --------------------------------------------------
           Countdown Messages
        --------------------------------------------------- */

        MESSAGES: Object.freeze([

            Object.freeze({

                MINIMUM_DAYS: 100,

                TEXT:
                    "Your journey starts today."

            }),

            Object.freeze({

                MINIMUM_DAYS: 60,

                TEXT:
                    "Stay focused. Success begins with today's effort."

            }),

            Object.freeze({

                MINIMUM_DAYS: 31,

                TEXT:
                    "Stay focused. Every day counts."

            }),

            Object.freeze({

                MINIMUM_DAYS: 8,

                TEXT:
                    "{days} days remaining. Keep going!"

            }),

            Object.freeze({

                MINIMUM_DAYS: 2,

                TEXT:
                    "{days} days left. Give your best effort!"

            }),

            Object.freeze({

                MINIMUM_DAYS: 1,

                TEXT:
                    "Tomorrow is your examination. Good luck!"

            }),

            Object.freeze({

                MINIMUM_DAYS: 0,

                TEXT:
                    "Today is your examination."

            }),

            Object.freeze({

                MINIMUM_DAYS: -1,

                TEXT:
                    "The examination has started."

            })

        ])

    }),

    /* ======================================================
       Student Score
    ====================================================== */

    SCORE: Object.freeze({

        MAXIMUM: 200,

        TARGET: 160

    }),

    /* ======================================================
       Sidebar
    ====================================================== */

    SIDEBAR: Object.freeze({

        ICON: "🎯",

        BRAND_NAME: "My Goal",

        BRAND_TAGLINE: "Your Daily Journey to Success",

        MENU: Object.freeze([

            Object.freeze({

                id: "dashboard",

                icon: "🏠",

                title: "Dashboard",

                active: true

            }),

            Object.freeze({

                id: "history",

                icon: "📅",

                title: "History",

                active: false

            }),

            Object.freeze({

                id: "progress",

                icon: "📈",

                title: "Progress Chart",

                active: false

            }),

            Object.freeze({

                id: "motivation",

                icon: "⭐",

                title: "Motivation",

                active: false

            }),

            Object.freeze({

                id: "settings",

                icon: "⚙",

                title: "Settings",

                active: false

            }),

            Object.freeze({

                id: "about",

                icon: "ℹ",

                title: "About",

                active: false

            })

        ])

    }),

    /* ======================================================
       Badge Levels
    ====================================================== */

    BADGES: Object.freeze([

        Object.freeze({

            NAME: "Bronze",

            MINIMUM_SCORE: 120

        }),

        Object.freeze({

            NAME: "Silver",

            MINIMUM_SCORE: 140

        }),

        Object.freeze({

            NAME: "Gold",

            MINIMUM_SCORE: 160

        }),

        Object.freeze({

            NAME: "Platinum",

            MINIMUM_SCORE: 180

        })

    ]),

    /* ======================================================
        Storage
    ====================================================== */

    STORAGE: Object.freeze({

        KEY: "my-goal-data"

}),
    
    /* ======================================================
       Theme
    ====================================================== */

    THEME: Object.freeze({

        PRIMARY: "#5B5CEB",

        SECONDARY: "#7B61FF",

        SUCCESS: "#22C55E",

        WARNING: "#F59E0B",

        DANGER: "#EF4444",

        INFO: "#3B82F6"

    })

});