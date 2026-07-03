"use strict";

/* ==========================================================
   My Goal
   Countdown Module
   Phase 03 - Build 3.2
   Version : 1.0.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const Countdown = (() => {

    /* ======================================================
       DOM Elements
    ====================================================== */

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const examDateElement = document.getElementById("exam-date");
    const messageElement = document.getElementById("countdown-message");

    /* ======================================================
       Helper Functions
    ====================================================== */

    function getExamDate() {

        return new Date(CONFIG.EXAM.DATE_TIME);

    }

    function pad(number, digits = 2) {

        return String(number).padStart(digits, "0");

    }

    function updateExamDate() {

        if (!examDateElement) return;

        examDateElement.textContent =
            `${CONFIG.EXAM.DISPLAY_DATE} • ${CONFIG.EXAM.DISPLAY_TIME}`;

    }

    function updateMessage(days) {

        if (!messageElement) return;

        if (days > 30) {

            messageElement.textContent =
                "Stay focused. Every day counts.";

        }

        else if (days > 7) {

            messageElement.textContent =
                `${days} days remaining. Keep going!`;

        }

        else if (days > 1) {

            messageElement.textContent =
                `${days} days left. Give your best effort!`;

        }

        else if (days === 1) {

            messageElement.textContent =
                "Tomorrow is your examination. Good luck!";

        }

        else {

            messageElement.textContent =
                "Today is your examination.";

        }

    }

    /* ======================================================
       Countdown Update
    ====================================================== */

    function update() {

        const now = new Date();

        const target = getExamDate();

        let difference = target.getTime() - now.getTime();

        if (difference <= 0) {

            if (daysElement) daysElement.textContent = "000";
            if (hoursElement) hoursElement.textContent = "00";
            if (minutesElement) minutesElement.textContent = "00";
            if (secondsElement) secondsElement.textContent = "00";

            if (messageElement) {

                messageElement.textContent =
                    "The examination has started.";

            }

            return;

        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        difference %= (1000 * 60 * 60 * 24);

        const hours = Math.floor(
            difference / (1000 * 60 * 60)
        );

        difference %= (1000 * 60 * 60);

        const minutes = Math.floor(
            difference / (1000 * 60)
        );

        difference %= (1000 * 60);

        const seconds = Math.floor(
            difference / 1000
        );

        if (daysElement) {

            daysElement.textContent = pad(days, 3);

        }

        if (hoursElement) {

            hoursElement.textContent = pad(hours);

        }

        if (minutesElement) {

            minutesElement.textContent = pad(minutes);

        }

        if (secondsElement) {

            secondsElement.textContent = pad(seconds);

        }

        updateMessage(days);

    }

    /* ======================================================
       Public
    ====================================================== */

    function start() {

        updateExamDate();

        update();

        setInterval(

            update,

            CONFIG.COUNTDOWN.UPDATE_INTERVAL

        );

    }

    return Object.freeze({

        start

    });

})();