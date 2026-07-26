"use strict";

/* ==========================================================
   My Goal
   Countdown Module
   Phase 03 - Build 3.5 Stable
   Designed & Developed by Anura Jayasekara
========================================================== */

const Countdown = (() => {

    /* ======================================================
       DOM Cache
    ====================================================== */

    const ELEMENTS = Object.freeze({

        title: document.getElementById("countdown-title"),

        examDate: document.getElementById("exam-date"),

        days: document.getElementById("countdown-days"),

        hours: document.getElementById("countdown-hours"),

        minutes: document.getElementById("countdown-minutes"),

        seconds: document.getElementById("countdown-seconds")

    });


    /* ======================================================
       Private State
    ====================================================== */

    let timer = null;


    /* ======================================================
       Private Helpers
    ====================================================== */

    function formatTime(value) {

        return String(value).padStart(2, "0");

    }


    function updateTitle(data) {

        if (data.days >= 31) {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.JOURNEY;

        } else if (data.days >= 8) {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.FOCUSED;

        } else if (data.days >= 2) {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.REVISION;

        } else if (data.days === 1) {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.TOMORROW;

        } else if (data.days === 0 && data.total > 0) {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.EXAM;

        } else {

            ELEMENTS.title.textContent = CONFIG.COUNTDOWN.TITLES.COMPLETE;

        }

    }


    /* ======================================================
       Private Methods
    ====================================================== */

    function update() {

        const now = new Date();

        const examDate = new Date(CONFIG.EXAM.DATE_TIME);

        const difference = examDate.getTime() - now.getTime();

        if (difference <= 0) {

            return {

                total: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0

            };

        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) /
            1000
        );

        return {

            total: difference,
            days,
            hours,
            minutes,
            seconds

        };

    }


    function render(data) {

        ELEMENTS.days.textContent = data.days;

        ELEMENTS.hours.textContent = formatTime(data.hours);

        ELEMENTS.minutes.textContent = formatTime(data.minutes);

        ELEMENTS.seconds.textContent = formatTime(data.seconds);

        updateTitle(data);

    }


    function stop() {

        if (timer !== null) {

            clearInterval(timer);

            timer = null;

        }

    }


    function start() {

        stop();

        const refresh = () => {

            const data = update();

            render(data);

            if (data.total <= 0) {

                stop();

            }

        };

        refresh();

        timer = setInterval(refresh, 1000);

    }


    /* ======================================================
       Public API
    ====================================================== */

    function init() {

        if (
            !ELEMENTS.title ||
            !ELEMENTS.examDate ||
            !ELEMENTS.days ||
            !ELEMENTS.hours ||
            !ELEMENTS.minutes ||
            !ELEMENTS.seconds
        ) {

            console.error("Countdown: Required DOM elements not found.");

            return;

        }

        ELEMENTS.examDate.textContent = CONFIG.EXAM.DISPLAY_DATE;

        start();

    }


    return Object.freeze({

        init

    });

})();