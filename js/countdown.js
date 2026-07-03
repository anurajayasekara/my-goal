"use strict";

/* ==========================================================
   My Goal
   Countdown Module
   Phase 03 - Build 3.4
   Version : 1.2.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const Countdown = (() => {

    /* ======================================================
       DOM Cache
    ====================================================== */

    const ELEMENTS = Object.freeze({

        days: document.getElementById("days"),

        hours: document.getElementById("hours"),

        minutes: document.getElementById("minutes"),

        seconds: document.getElementById("seconds"),

        examDate: document.getElementById("exam-date"),

        message: document.getElementById("countdown-message")

    });


    /* ======================================================
       Configuration
    ====================================================== */

    const EXAM_DATE = new Date(CONFIG.EXAM.DATE_TIME);


    /* ======================================================
       Helper Functions
    ====================================================== */

    function pad(value, digits = 2) {

        return CONFIG.COUNTDOWN.SHOW_LEADING_ZERO
            ? String(value).padStart(digits, "0")
            : String(value);

    }


    function updateExamDate() {

        if (!ELEMENTS.examDate) return;

        ELEMENTS.examDate.textContent =
            `${CONFIG.EXAM.DISPLAY_DATE} • ${CONFIG.EXAM.DISPLAY_TIME}`;

    }


    /* ======================================================
       Message Resolver
    ====================================================== */

    function getMessage(daysRemaining) {

        for (const rule of CONFIG.COUNTDOWN.MESSAGES) {

            if (daysRemaining >= rule.MINIMUM_DAYS) {

                return rule.TEXT.replace(
                    "{days}",
                    daysRemaining
                );

            }

        }

        return "";

    }


    function updateMessage(daysRemaining) {

        if (!ELEMENTS.message) return;

        ELEMENTS.message.textContent =
            getMessage(daysRemaining);

    }


    /* ======================================================
       Render Countdown
    ====================================================== */

    function render(days, hours, minutes, seconds) {

        if (ELEMENTS.days) {

            ELEMENTS.days.textContent = pad(days, 3);

        }

        if (ELEMENTS.hours) {

            ELEMENTS.hours.textContent = pad(hours);

        }

        if (ELEMENTS.minutes) {

            ELEMENTS.minutes.textContent = pad(minutes);

        }

        if (ELEMENTS.seconds) {

            ELEMENTS.seconds.textContent = pad(seconds);

        }

    }


    /* ======================================================
       Countdown Finished
    ====================================================== */

    function renderFinished() {

        render(0, 0, 0, 0);

        updateMessage(-1);

    }


    /* ======================================================
       Calculate Remaining Time
    ====================================================== */

    function calculateRemainingTime() {

        let difference =
            EXAM_DATE.getTime() - Date.now();

        if (difference <= 0) {

            return null;

        }

        const days = Math.floor(
            difference / 86400000
        );

        difference %= 86400000;

        const hours = Math.floor(
            difference / 3600000
        );

        difference %= 3600000;

        const minutes = Math.floor(
            difference / 60000
        );

        difference %= 60000;

        const seconds = Math.floor(
            difference / 1000
        );

        return {

            days,

            hours,

            minutes,

            seconds

        };

    }


    /* ======================================================
       Update Countdown
    ====================================================== */

    function update() {

        const remaining =
            calculateRemainingTime();

        if (!remaining) {

            renderFinished();

            return;

        }

        render(

            remaining.days,

            remaining.hours,

            remaining.minutes,

            remaining.seconds

        );

        updateMessage(

            remaining.days

        );

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