"use strict";

/* ==========================================================
   My Goal
   Countdown Module
   Phase 06 - Countdown Fix 6.0
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
       Format Time
    ====================================================== */

    function formatTime(value) {

        return String(value).padStart(2, "0");

    }


    /* ======================================================
       Get Exam Timestamp
    ====================================================== */

    function getExamTimestamp() {

        const timestamp =
            Date.parse(CONFIG.EXAM.DATE_TIME);

        if (Number.isNaN(timestamp)) {

            console.error(
                "Countdown: Invalid examination date.",
                CONFIG.EXAM.DATE_TIME
            );

            return null;

        }

        return timestamp;

    }


    /* ======================================================
       Update Title
    ====================================================== */

    function updateTitle(data) {

        if (data.total <= 0) {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.COMPLETE;

            return;

        }


        if (data.days >= 31) {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.JOURNEY;

        }

        else if (data.days >= 8) {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.FOCUSED;

        }

        else if (data.days >= 2) {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.REVISION;

        }

        else if (data.days === 1) {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.TOMORROW;

        }

        else {

            ELEMENTS.title.textContent =
                CONFIG.COUNTDOWN.TITLES.EXAM;

        }

    }


    /* ======================================================
       Calculate Countdown
    ====================================================== */

    function calculate() {

        const examTimestamp =
            getExamTimestamp();

        if (examTimestamp === null) {

            return {

                total: 0,

                days: 0,

                hours: 0,

                minutes: 0,

                seconds: 0

            };

        }


        const nowTimestamp = Date.now();

        let difference =
            examTimestamp - nowTimestamp;


        /* --------------------------------------------------
           Examination has already started / finished
        --------------------------------------------------- */

        if (difference <= 0) {

            return {

                total: 0,

                days: 0,

                hours: 0,

                minutes: 0,

                seconds: 0

            };

        }


        /* --------------------------------------------------
           Time Units
        --------------------------------------------------- */

        const SECOND = 1000;

        const MINUTE = SECOND * 60;

        const HOUR = MINUTE * 60;

        const DAY = HOUR * 24;


        const days =
            Math.floor(difference / DAY);

        difference %= DAY;


        const hours =
            Math.floor(difference / HOUR);

        difference %= HOUR;


        const minutes =
            Math.floor(difference / MINUTE);

        difference %= MINUTE;


        const seconds =
            Math.floor(difference / SECOND);


        return {

            total:
                examTimestamp - nowTimestamp,

            days,

            hours,

            minutes,

            seconds

        };

    }


    /* ======================================================
       Render
    ====================================================== */

    function render(data) {

        ELEMENTS.days.textContent =
            data.days;

        ELEMENTS.hours.textContent =
            formatTime(data.hours);

        ELEMENTS.minutes.textContent =
            formatTime(data.minutes);

        ELEMENTS.seconds.textContent =
            formatTime(data.seconds);

        updateTitle(data);

    }


    /* ======================================================
       Stop Timer
    ====================================================== */

    function stop() {

        if (timer !== null) {

            clearInterval(timer);

            timer = null;

        }

    }


    /* ======================================================
       Start Timer
    ====================================================== */

    function start() {

        stop();


        const refresh = () => {

            const data = calculate();

            render(data);


            if (data.total <= 0) {

                stop();

            }

        };


        refresh();

        timer =
            setInterval(
                refresh,
                CONFIG.COUNTDOWN.UPDATE_INTERVAL
            );

    }


    /* ======================================================
       Initialize
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

            console.error(
                "Countdown: Required DOM elements not found."
            );

            return;

        }


        ELEMENTS.examDate.textContent =
            CONFIG.EXAM.DISPLAY_DATE;


        start();

    }


    /* ======================================================
       Public API
    ====================================================== */

    return Object.freeze({

        init

    });

})();