"use strict";

/* ==========================================================
   My Goal
   Utility Functions
   Phase 04 - Compatibility Patch 4.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const Utils = (() => {

    /* ======================================================
       Date & Time
    ====================================================== */

    function today() {

        return new Date();

    }

    function nowISO() {

        return new Date().toISOString();

    }

    function examDate() {

        return new Date(CONFIG.EXAM.DATE_TIME);

    }

    function getTodayKey() {

        return nowISO().slice(0, 10);

    }

    function formatDateKey(date) {

        return new Date(date)
            .toISOString()
            .slice(0, 10);

    }

    function daysRemaining() {

        const now = today();

        const exam = examDate();

        const diff = exam - now;

        return Math.max(0, Math.ceil(diff / 86400000));

    }

    function countdown() {

        const now = today();

        const exam = examDate();

        let diff = exam - now;

        if (diff < 0) {

            diff = 0;

        }

        return {

            days: Math.floor(diff / 86400000),

            hours: Math.floor((diff % 86400000) / 3600000),

            minutes: Math.floor((diff % 3600000) / 60000),

            seconds: Math.floor((diff % 60000) / 1000)

        };

    }

    /* ======================================================
       Score Validation
    ====================================================== */

    function sanitizeScore(value) {

        if (typeof value === "string") {

            value = value.trim();

        }

        if (value === "") {

            return NaN;

        }

        return Number(value);

    }

    function isIntegerScore(value) {

        return Number.isInteger(value);

    }

    function isValidScore(score) {

        return (

            Number.isInteger(score) &&

            score >= 0 &&

            score <= CONFIG.SCORE.MAXIMUM

        );

    }

    function percentage(score) {

        return Number(

            (

                (score / CONFIG.SCORE.MAXIMUM) * 100

            ).toFixed(2)

        );

    }

    /* ======================================================
       Statistics
    ====================================================== */

    function average(scores) {

        if (!scores.length) {

            return 0;

        }

        const total = scores.reduce(

            (sum, value) => sum + value,

            0

        );

        return Number(

            (total / scores.length).toFixed(2)

        );

    }

    function highest(scores) {

        return scores.length

            ? Math.max(...scores)

            : 0;

    }

    function lowest(scores) {

        return scores.length

            ? Math.min(...scores)

            : 0;

    }

    /* ======================================================
       Badge
    ====================================================== */

    function badge(score) {

        let result = null;

        for (const item of CONFIG.BADGES) {

            if (score >= item.MINIMUM_SCORE) {

                result = item;

            }

        }

        return result;

    }

    /* ======================================================
       Export
    ====================================================== */

    return Object.freeze({

        today,

        nowISO,

        examDate,

        getTodayKey,

        formatDateKey,

        daysRemaining,

        countdown,

        sanitizeScore,

        isIntegerScore,

        isValidScore,

        percentage,

        average,

        highest,

        lowest,

        badge

    });

})();