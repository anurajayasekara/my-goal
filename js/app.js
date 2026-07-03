"use strict";

/* ==========================================================
   My Goal
   Business Logic Layer
   Phase 04 - Compatibility Patch 4.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const App = (() => {

    /* ======================================================
       Private
    ====================================================== */

    function data() {

        return Storage.getData();

    }

    function save(db) {

        Storage.setData(db);

    }

    /* ======================================================
       Configuration
    ====================================================== */

    function getConfig() {

        return CONFIG;

    }

    /* ======================================================
       Countdown
    ====================================================== */

    function getCountdown() {

        return Utils.countdown();

    }

    /* ======================================================
       Daily Score
    ====================================================== */

    function validateDailyScore(score) {

        const value = Utils.sanitizeScore(score);

        if (Number.isNaN(value)) {

            return {

                valid: false,

                message: "Please enter today's score."

            };

        }

        if (!Utils.isIntegerScore(value)) {

            return {

                valid: false,

                message: "Score must be a whole number."

            };

        }

        if (value < 0) {

            return {

                valid: false,

                message: "Score cannot be negative."

            };

        }

        if (value > CONFIG.SCORE.MAXIMUM) {

            return {

                valid: false,

                message:
                    `Maximum score is ${CONFIG.SCORE.MAXIMUM}.`

            };

        }

        return {

            valid: true,

            score: value,

            message: ""

        };

    }

    function canSubmitToday() {

        const todayKey = Utils.getTodayKey();

        return !Storage.hasDailyScore(todayKey);

    }

    function submitDailyScore(score) {

        const validation = validateDailyScore(score);

        if (!validation.valid) {

            throw new Error(validation.message);

        }

        const todayKey = Utils.getTodayKey();

        if (Storage.hasDailyScore(todayKey)) {

            throw new Error(

                "Today's score has already been saved."

            );

        }

        return Storage.saveDailyScore(

            todayKey,

            validation.score

        );

    }

    function updateDailyScore(score) {

        const validation = validateDailyScore(score);

        if (!validation.valid) {

            throw new Error(validation.message);

        }

        const todayKey = Utils.getTodayKey();

        return Storage.saveDailyScore(

            todayKey,

            validation.score

        );

    }

    function getTodayScore() {

        return Storage.getDailyScore(

            Utils.getTodayKey()

        );

    }

    function getDailyScores() {

        return Storage.getDailyScores();

    }

    function getScoreList() {

        return Object.values(

            Storage.getDailyScores()

        ).map(item => item.score);

    }

    /* ======================================================
       Statistics
    ====================================================== */

    function getStatistics() {

        const scores = getScoreList();

        const latest = scores.length

            ? scores[scores.length - 1]

            : 0;

        return {

            latest,

            highest: Utils.highest(scores),

            lowest: Utils.lowest(scores),

            average: Utils.average(scores),

            percentage: Utils.percentage(latest),

            badge: Utils.badge(latest)

        };

    }

    /* ======================================================
       Reset
    ====================================================== */

    function resetApp() {

        Storage.reset();

    }

    /* ======================================================
       Export
    ====================================================== */

    return Object.freeze({

        getConfig,

        getCountdown,

        validateDailyScore,

        canSubmitToday,

        submitDailyScore,

        updateDailyScore,

        getTodayScore,

        getDailyScores,

        getStatistics,

        resetApp

    });

})();