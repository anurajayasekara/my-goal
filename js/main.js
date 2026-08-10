"use strict";

/* ==========================================================
   My Goal
   Main Controller
   Phase 05 - Daily Score & Statistics Integration
   Designed & Developed by Anura Jayasekara
========================================================== */


/* ==========================================================
   Application Bootstrap
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);


/* ==========================================================
   Initialize Application
========================================================== */

function initializeApp() {

    renderSidebar();

    renderHeader();

    initializeStudentProfile();

    initializeWelcomeCard();

    initializeDailyScore();

    initializeStatistics();


    /* ------------------------------------------------------
       Countdown
    ------------------------------------------------------ */

    if (typeof Countdown !== "undefined") {

        Countdown.init();

    }

}


/* ==========================================================
   Daily Score Module
========================================================== */

function initializeDailyScore() {

    const input =
        document.getElementById(
            "daily-score-input"
        );

    const button =
        document.getElementById(
            "daily-score-save-button"
        );

    const message =
        document.getElementById(
            "daily-score-message"
        );


    /* ------------------------------------------------------
       Required Elements Check
    ------------------------------------------------------ */

    if (
        !input ||
        !button ||
        !message
    ) {

        return;

    }


    /* ------------------------------------------------------
       Score Information
    ------------------------------------------------------ */

    const maximum =
        document.getElementById(
            "score-maximum"
        );

    const target =
        document.getElementById(
            "score-target"
        );


    if (maximum) {

        maximum.textContent =
            CONFIG.SCORE.MAXIMUM;

    }


    if (target) {

        target.textContent =
            CONFIG.SCORE.TARGET;

    }


    /* ------------------------------------------------------
       Check Today's Existing Score
    ------------------------------------------------------ */

    const today =
        App.getTodayScore();


    if (today) {

        input.value =
            today.score;

        input.disabled =
            true;

        button.disabled =
            true;

        message.textContent =
            "Today's score has already been saved.";

        message.style.color =
            CONFIG.THEME.INFO;

    }


    /* ======================================================
       Save Score
    ====================================================== */

    function saveScore() {

        /* --------------------------------------------------
           Prevent Duplicate Save
        -------------------------------------------------- */

        if (input.disabled) {

            return;

        }


        /* --------------------------------------------------
           Clear Previous Message
        -------------------------------------------------- */

        message.textContent = "";


        try {

            /* ----------------------------------------------
               Save Today's Score
            ---------------------------------------------- */

            App.submitDailyScore(
                input.value
            );


            /* ----------------------------------------------
               Lock Input After Successful Save
            ---------------------------------------------- */

            input.disabled =
                true;

            button.disabled =
                true;


            /* ----------------------------------------------
               Success Message
            ---------------------------------------------- */

            message.textContent =
                "Today's score saved successfully.";

            message.style.color =
                CONFIG.THEME.SUCCESS;


            /* ----------------------------------------------
               Notify Other Modules
               Daily Score → Statistics
            ---------------------------------------------- */

            document.dispatchEvent(

                new CustomEvent(
                    "dailyScoreSaved"
                )

            );

        }

        catch (error) {

            /* ----------------------------------------------
               Error Message
            ---------------------------------------------- */

            message.textContent =
                error.message;

            message.style.color =
                CONFIG.THEME.DANGER;

        }

    }


    /* ======================================================
       Save Button
    ====================================================== */

    button.addEventListener(
        "click",
        saveScore
    );


    /* ======================================================
       Enter Key
    ====================================================== */

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                saveScore();

            }

        }
    );

}


/* ==========================================================
   Sidebar
========================================================== */

function renderSidebar() {

    renderSidebarBrand();

    renderSidebarNavigation();

}


/* ==========================================================
   Sidebar Brand
========================================================== */

function renderSidebarBrand() {

    const header =
        document.getElementById(
            "sidebar-header"
        );


    if (!header) {

        return;

    }


    header.innerHTML = `

        <div class="sidebar-brand">

            <div class="brand-icon">

                ${CONFIG.SIDEBAR.ICON}

            </div>

            <h2>

                ${CONFIG.APP.NAME}

            </h2>

            <p>

                ${CONFIG.APP.TAGLINE}

            </p>

        </div>

    `;

}


/* ==========================================================
   Sidebar Navigation
========================================================== */

function renderSidebarNavigation() {

    const nav =
        document.getElementById(
            "sidebar-navigation"
        );


    if (!nav) {

        return;

    }


    nav.innerHTML =
        CONFIG.SIDEBAR.MENU
            .map(item => `

                <button
                    class="sidebar-menu-item ${
                        item.active
                            ? "active"
                            : ""
                    }"
                    data-page="${item.id}">

                    <span class="menu-icon">

                        ${item.icon}

                    </span>

                    <span class="menu-title">

                        ${item.title}

                    </span>

                </button>

            `)
            .join("");

}


/* ==========================================================
   Top Header
========================================================== */

function renderHeader() {

    const header =
        document.getElementById(
            "top-header"
        );


    if (!header) {

        return;

    }


    header.innerHTML = `

        <div class="header-content">

            <div class="header-icon">

                🎯

            </div>

            <div class="header-text">

                <h1>

                    ${CONFIG.APP.NAME}

                </h1>

                <h2>

                    ${CONFIG.APP.TAGLINE}

                </h2>

                <p>

                    ${CONFIG.APP.DESCRIPTION}

                </p>

                <div class="header-author">

                    <span>

                        Designed &amp; Developed by

                    </span>

                    <strong>

                        ${CONFIG.APP.AUTHOR}

                    </strong>

                </div>

            </div>

        </div>

    `;

}