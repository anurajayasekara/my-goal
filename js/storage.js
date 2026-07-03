"use strict";

/* ==========================================================
   My Goal
   Storage Layer
   Phase 04 - Compatibility Patch 4.0
   Designed & Developed by Anura Jayasekara
========================================================== */

const Storage = (() => {

    /* ======================================================
       Constants
    ====================================================== */

    const KEY = CONFIG.STORAGE.KEY;

    const STORAGE_VERSION = CONFIG.APP.VERSION;

    const DEFAULT_DATA = Object.freeze({

        version: STORAGE_VERSION,

        createdAt: null,

        updatedAt: null,

        dailyScores: {},

        settings: {

            theme: "light"

        }

    });

    /* ======================================================
       Helpers
    ====================================================== */

    function clone(data) {

          if (typeof structuredClone === "function") {

        return structuredClone(data);

    }

        return JSON.parse(JSON.stringify(data));

    }

    function createDefaultData() {

        const data = clone(DEFAULT_DATA);

        const now = new Date().toISOString();

        data.createdAt = now;
        data.updatedAt = now;

        return data;

    }

    function migrateLegacyData(data) {

        if (!data || typeof data !== "object") {

            return createDefaultData();

        }

        /* ----------------------------------------------
           Legacy scores[]  → dailyScores{}
        ---------------------------------------------- */

        if (Array.isArray(data.scores) && !data.dailyScores) {

            data.dailyScores = {};

            data.scores.forEach(item => {

                if (
                    !item ||
                    typeof item.score !== "number" ||
                    !item.date
                ) {

                    return;

                }

                const dateKey =
                    new Date(item.date)
                        .toISOString()
                        .slice(0, 10);

                data.dailyScores[dateKey] = {

                    score: item.score,

                    createdAt: item.date,

                    updatedAt: item.date

                };

            });

            delete data.scores;

        }

        if (!data.dailyScores) {

            data.dailyScores = {};

        }

        if (!data.settings) {

            data.settings = {

                theme: "light"

            };

        }

        if (!data.version) {

            data.version = STORAGE_VERSION;

        }

        if (!data.createdAt) {

            data.createdAt = new Date().toISOString();

        }

        if (!data.updatedAt) {

            data.updatedAt = data.createdAt;

        }

        return Object.assign(

            clone(DEFAULT_DATA),

            data

        );

    }

    /* ======================================================
       Save
    ====================================================== */

    function save(data) {

        data.updatedAt = new Date().toISOString();

        localStorage.setItem(

            KEY,

            JSON.stringify(data)

        );

    }

        /* ======================================================
       Load
    ====================================================== */

    function load() {

        try {

            const raw = localStorage.getItem(KEY);

            if (!raw) {

                const data = createDefaultData();

                save(data);

                return data;

            }

            const parsed = JSON.parse(raw);

            const migrated = migrateLegacyData(parsed);

            save(migrated);

            return migrated;

        }

        catch (error) {

            console.error("Storage Load Error", error);

            const data = createDefaultData();

            save(data);

            return data;

        }

    }

    /* ======================================================
       Public Data API
    ====================================================== */

    function getData() {

        return load();

    }

    function setData(data) {

        save(data);

    }

    function reset() {

        localStorage.removeItem(KEY);

    }

    /* ======================================================
       Daily Score API
    ====================================================== */

    function getDailyScores() {

        return load().dailyScores;

    }

    function getDailyScore(dateKey) {

        const scores = getDailyScores();

        return scores[dateKey] ?? null;

    }

    function hasDailyScore(dateKey) {

        return getDailyScore(dateKey) !== null;

    }

    function saveDailyScore(dateKey, score) {

        const db = load();

        const now = new Date().toISOString();

        const existing = db.dailyScores[dateKey];

        db.dailyScores[dateKey] = {

            score,

            createdAt: existing?.createdAt ?? now,

            updatedAt: now

        };

        save(db);

        return db.dailyScores[dateKey];

    }

    function removeDailyScore(dateKey) {

        const db = load();

        if (db.dailyScores[dateKey]) {

            delete db.dailyScores[dateKey];

            save(db);

        }

    }

    /* ======================================================
       Export
    ====================================================== */

    return Object.freeze({

        getData,

        setData,

        reset,

        getDailyScores,

        getDailyScore,

        hasDailyScore,

        saveDailyScore,

        removeDailyScore

    });

})();