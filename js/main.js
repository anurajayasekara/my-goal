"use strict";

/* ============================================================
   My Goal
   Main Controller
============================================================ */

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {

    renderHeader();

}

function renderHeader() {

    const header = document.getElementById("top-header");

    header.innerHTML = `

        <h1>${CONFIG.APP_NAME}</h1>

        <h2>${CONFIG.APP_TAGLINE}</h2>

        <p>${CONFIG.APP_DESCRIPTION}</p>

        <small>
            Designed & Developed by
            ${CONFIG.AUTHOR}
        </small>

    `;

}