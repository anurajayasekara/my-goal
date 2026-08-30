"use strict";

/* ==========================================================
   My Goal
   Utility Functions
   Build 4.1 - Statistics Support
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

        return new Date(
            CONFIG.EXAM.DATE_TIME
        );

    }

    /* ======================================================
       Local Calendar Date Key

       One Daily Score = One Local Calendar Day

       Example:
       23:59 → previous calendar day
       00:00 → new calendar day
    ====================================================== */

    function getTodayKey() {

        const now = new Date();

        const year =
            now.getFullYear();

        const month =
            String(
                now.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                now.getDate()
            ).padStart(2, "0");

        return `${year}-${month}-${day}`;

    }

    function formatDateKey(date) {

        const value =
            new Date(date);

        const year =
            value.getFullYear();

        const month =
            String(
                value.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                value.getDate()
            ).padStart(2, "0");

        return `${year}-${month}-${day}`;

    }

    function daysRemaining() {

        const now =
            today();

        const exam =
            examDate();

        const diff =
            exam - now;

        return Math.max(
            0,
            Math.ceil(
                diff / 86400000
            )
        );

    }

    function countdown() {

        const now =
            today();

        const exam =
            examDate();

        let diff =
            exam - now;

        if (diff < 0) {

            diff = 0;

        }

        return {

            days:
                Math.floor(
                    diff / 86400000
                ),

            hours:
                Math.floor(
                    (diff % 86400000) /
                    3600000
                ),

            minutes:
                Math.floor(
                    (diff % 3600000) /
                    60000
                ),

            seconds:
                Math.floor(
                    (diff % 60000) /
                    1000
                )

        };

    }

    /* ======================================================
       Score Validation
    ====================================================== */

    function sanitizeScore(value) {

        if (
            typeof value ===
            "string"
        ) {

            value =
                value.trim();

        }

        if (value === "") {

            return NaN;

        }

        return Number(value);

    }

    function isIntegerScore(value) {

        return Number.isInteger(
            value
        );

    }

    function isValidScore(score) {

        return (

            Number.isInteger(
                score
            ) &&

            score >= 0 &&

            score <=
                CONFIG.SCORE.MAXIMUM

        );

    }

    /* ======================================================
       Percentage

       Percentage is always calculated
       against the maximum score.

       Example:
       150 / 200 = 75%
    ====================================================== */

    function percentage(score) {

        return Number(

            (
                (
                    score /
                    CONFIG.SCORE.MAXIMUM
                ) * 100
            ).toFixed(2)

        );

    }

    /* ======================================================
       Statistics
    ====================================================== */

    function average(scores) {

        if (
            !scores.length
        ) {

            return 0;

        }

        const total =
            scores.reduce(

                (
                    sum,
                    value
                ) => sum + value,

                0

            );

        return Number(

            (
                total /
                scores.length
            ).toFixed(2)

        );

    }

    function highest(scores) {

        return scores.length

            ? Math.max(
                ...scores
            )

            : 0;

    }

    function lowest(scores) {

        return scores.length

            ? Math.min(
                ...scores
            )

            : 0;

    }

    /* ======================================================
       Target Progress

       Progress is calculated against
       the configured target score.

       Example:
       Target = 160
       Score  = 188

       188 / 160 × 100
       = 117.5%

       The value is NOT capped here.
       UI progress bars may cap visual width
       at 100%.
    ====================================================== */

    function targetProgress(score) {

        return Number(

            (
                (
                    score /
                    CONFIG.SCORE.TARGET
                ) * 100
            ).toFixed(2)

        );

    }

    /* ======================================================
       Remaining To Target

       Never returns a negative value.

       Example:
       Score  = 120
       Target = 160
       Result = 40

       Score  = 180
       Target = 160
       Result = 0
    ====================================================== */

    function remainingToTarget(score) {

        return Math.max(

            0,

            CONFIG.SCORE.TARGET -
            score

        );

    }

    /* ======================================================
       Practice Days

       Number of saved daily scores.
    ====================================================== */

    function practiceDays(scores) {

        return scores.length;

    }

    /* ======================================================
       Target Status
    ====================================================== */

    function hasReachedTarget(score) {

        return (
            score >=
            CONFIG.SCORE.TARGET
        );

    }

    /* ======================================================
       Achievement Badge
    ====================================================== */

    function badge(score) {

        let result =
            null;

        for (
            const item of CONFIG.BADGES
        ) {

            if (
                score >=
                item.MINIMUM_SCORE
            ) {

                result =
                    item;

            }

        }

        return result;

    }

    /* ======================================================
       Public API
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

        targetProgress,

        remainingToTarget,

        practiceDays,

        hasReachedTarget,

        badge

    });

})();
