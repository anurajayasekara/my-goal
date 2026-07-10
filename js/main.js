"use strict";

/* ==========================================================
   My Goal
   Main Controller
   Phase 03 - Build 3.2A
   Designed & Developed by Anura Jayasekara
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApp);

/* ==========================================================
   Application Bootstrap
========================================================== */

function initializeApp() {

    renderSidebar();

    renderHeader();

    initializeStudentProfile();

    initializeWelcomeCard();

    initializeDailyScore();

    initializeStatistics();

}  

/* ==========================================================
   Daily Score Module
========================================================== */

function initializeDailyScore() {

    const input = document.getElementById("daily-score-input");
    const button = document.getElementById("daily-score-save-button");
    const message = document.getElementById("daily-score-message");

    if (!input || !button || !message) {

        return;

    }

    document.getElementById("score-maximum").textContent =
        CONFIG.SCORE.MAXIMUM;

    document.getElementById("score-target").textContent =
        CONFIG.SCORE.TARGET;

    const today = App.getTodayScore();

    if (today) {

        input.value = today.score;

        input.disabled = true;

        button.disabled = true;

        message.textContent =
            "Today's score has already been saved.";

        message.style.color = CONFIG.THEME.INFO;

    }

    button.addEventListener("click", () => {

        message.textContent = "";

        try {

            App.submitDailyScore(input.value);

            input.disabled = true;

            button.disabled = true;

            message.textContent =
                "Today's score saved successfully.";

            message.style.color = CONFIG.THEME.SUCCESS;

        }

        catch (error) {

            message.textContent = error.message;

            message.style.color = CONFIG.THEME.DANGER;

        }

    });

}

/* ==========================================================
   Sidebar
========================================================== */

function renderSidebar() {

    renderSidebarBrand();

    renderSidebarNavigation();

}

/* ==========================================================
   Sidebar Brand
========================================================== */

function renderSidebarBrand() {

    const header = document.getElementById("sidebar-header");

    if (!header) return;

    header.innerHTML = `

        <div class="sidebar-brand">

            <div class="brand-icon">

                ${CONFIG.SIDEBAR.ICON}

            </div>

            <h2>

                ${CONFIG.APP.NAME}

            </h2>

            <p>

                ${CONFIG.APP.TAGLINE}

            </p>

        </div>

    `;

}

/* ==========================================================
   Sidebar Navigation
========================================================== */

function renderSidebarNavigation() {

    const nav = document.getElementById("sidebar-navigation");

    if (!nav) return;

    nav.innerHTML = CONFIG.SIDEBAR.MENU.map(item => `

        <button
            class="sidebar-menu-item ${item.active ? "active" : ""}"
            data-page="${item.id}">

            <span class="menu-icon">

                ${item.icon}

            </span>

            <span class="menu-title">

                ${item.title}

            </span>

        </button>

    `).join("");

}

/* ==========================================================
   Top Header
========================================================== */

function renderHeader() {

    const header = document.getElementById("top-header");

    if (!header) return;

    header.innerHTML = `

        <div class="header-content">

            <div class="header-icon">

                🎯

            </div>

            <div class="header-text">

                <h1>

                    ${CONFIG.APP.NAME}

                </h1>

                <h2>

                    ${CONFIG.APP.TAGLINE}

                </h2>

                <p>

                    ${CONFIG.APP.DESCRIPTION}

                </p>

                <div class="header-author">

                    <span>

                        Designed &amp; Developed by

                    </span>

                    <strong>

                        ${CONFIG.APP.AUTHOR}

                    </strong>

                </div>

            </div>

        </div>

    `;

}