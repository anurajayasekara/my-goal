"use strict";

/* ============================================================
   Scholarship Countdown App
   Business Logic Layer
============================================================ */

const App = (() => {

    /* --------------------------------------------------------
       Private
    -------------------------------------------------------- */

    function data() {
        return Storage.getData();
    }

    function save(data) {
        Storage.setData(data);
    }

    /* --------------------------------------------------------
       Public
    -------------------------------------------------------- */

    function getConfig() {

        return CONFIG;

    }

    function getCountdown() {

        return Utils.countdown();

    }

    function getScores() {

        return data().scores;

    }

    function addScore(score) {

        if (!Utils.isValidScore(score)) {

            throw new Error("Invalid score.");

        }

        const db = data();

        db.scores.push({

            score,

            date: new Date().toISOString()

        });

        save(db);

    }

    function getStatistics() {

        const scores = getScores()

            .map(item => item.score);

        const latest = scores.length
            ? scores[scores.length - 1]
            : 0;

        const highest = Utils.highest(scores);

        const lowest = Utils.lowest(scores);

        const average = Utils.average(scores);

        return {

            latest,

            highest,

            lowest,

            average,

            percentage: Utils.percentage(latest),

            badge: Utils.badge(latest)

        };

    }

    function resetApp() {

        Storage.reset();

    }

    return Object.freeze({

        getConfig,

        getCountdown,

        getScores,

        addScore,

        getStatistics,

        resetApp

    });

})();