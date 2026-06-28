"use strict";

/* ============================================================
   Scholarship Countdown App
   Storage Layer
============================================================ */

const Storage = (() => {

    const KEY = "scholarship-countdown-data";

    const DEFAULT_DATA = Object.freeze({

        version: CONFIG.APP_VERSION,

        createdAt: null,

        updatedAt: null,

        scores: [],

        settings: {
            theme: "light"
        }

    });

    function clone(data) {
        return JSON.parse(JSON.stringify(data));
    }

    function load() {

        try {

            const raw = localStorage.getItem(KEY);

            if (!raw) {

                const data = clone(DEFAULT_DATA);

                data.createdAt = new Date().toISOString();
                data.updatedAt = data.createdAt;

                save(data);

                return data;

            }

            return Object.assign(clone(DEFAULT_DATA), JSON.parse(raw));

        }

        catch (error) {

            console.error("Storage Load Error", error);

            const data = clone(DEFAULT_DATA);

            data.createdAt = new Date().toISOString();
            data.updatedAt = data.createdAt;

            save(data);

            return data;

        }

    }

    function save(data) {

        data.updatedAt = new Date().toISOString();

        localStorage.setItem(
            KEY,
            JSON.stringify(data)
        );

    }

    function reset() {

        localStorage.removeItem(KEY);

    }

    function getData() {

        return load();

    }

    function setData(data) {

        save(data);

    }

    return Object.freeze({

        getData,

        setData,

        reset

    });

})();