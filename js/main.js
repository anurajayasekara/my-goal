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

    if (typeof Countdown !== "undefined") {

        Countdown.start();

    }

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