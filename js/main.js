"use strict";

/* ============================================================
   Scholarship Countdown App
   Main Controller
============================================================ */

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {

    console.log(
        `${CONFIG.APP_NAME} v${CONFIG.APP_VERSION} Loaded`
    );

    renderDashboard();

}

function renderDashboard() {

    const countdown = App.getCountdown();

    const stats = App.getStatistics();

    console.table({

        "Days Left": countdown.days,

        "Hours": countdown.hours,

        "Minutes": countdown.minutes,

        "Seconds": countdown.seconds,

        "Latest Score": stats.latest,

        "Highest Score": stats.highest,

        "Lowest Score": stats.lowest,

        "Average Score": stats.average,

        "Percentage": stats.percentage + "%",

        "Badge": stats.badge
            ? stats.badge.title
            : "None"

    });

}

function saveScore(score) {

    try {

        App.addScore(score);

        renderDashboard();

        console.log("Score saved.");

    }

    catch (error) {

        console.error(error.message);

    }

}

function resetApplication() {

    if (confirm("Reset all data?")) {

        App.resetApp();

        renderDashboard();

    }

}