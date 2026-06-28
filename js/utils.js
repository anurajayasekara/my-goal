"use strict";

/* ============================================================
   Scholarship Countdown App
   Utility Functions
============================================================ */

const Utils = (() => {

    /* --------------------------------------------------------
       Date
    -------------------------------------------------------- */

    function today() {
        return new Date();
    }

    function examDate() {
        return new Date(CONFIG.EXAM_DATE);
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

        if (diff < 0) diff = 0;

        return {

            days: Math.floor(diff / 86400000),

            hours: Math.floor((diff % 86400000) / 3600000),

            minutes: Math.floor((diff % 3600000) / 60000),

            seconds: Math.floor((diff % 60000) / 1000)

        };

    }

    /* --------------------------------------------------------
       Score
    -------------------------------------------------------- */

    function isValidScore(score) {

        return Number.isInteger(score)
            && score >= 0
            && score <= CONFIG.MAX_SCORE;

    }

    function percentage(score) {

        return Number(

            ((score / CONFIG.MAX_SCORE) * 100).toFixed(2)

        );

    }

    /* --------------------------------------------------------
       Statistics
    -------------------------------------------------------- */

    function average(scores) {

        if (!scores.length) return 0;

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

    /* --------------------------------------------------------
       Badge
    -------------------------------------------------------- */

    function badge(score) {

        if (score >= CONFIG.BADGES.PLATINUM.min)
            return CONFIG.BADGES.PLATINUM;

        if (score >= CONFIG.BADGES.GOLD.min)
            return CONFIG.BADGES.GOLD;

        if (score >= CONFIG.BADGES.SILVER.min)
            return CONFIG.BADGES.SILVER;

        if (score >= CONFIG.BADGES.BRONZE.min)
            return CONFIG.BADGES.BRONZE;

        return null;

    }

    /* --------------------------------------------------------
       Export
    -------------------------------------------------------- */

    return Object.freeze({

        today,

        examDate,

        daysRemaining,

        countdown,

        isValidScore,

        percentage,

        average,

        highest,

        lowest,

        badge

    });

})();