"use strict";

/* ==========================================================
   My Goal
   Main Controller
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApp);

/* ==========================================================
   Application Bootstrap
========================================================== */

function initializeApp() {

    renderSidebar();

    renderHeader();

}

/* ==========================================================
   Sidebar Layout
========================================================== */

function renderSidebar() {

    const sidebar = document.getElementById("sidebar");

    if (!sidebar) return;

    sidebar.innerHTML = `

        <div id="sidebar-header"></div>

        <div id="sidebar-profile"></div>

        <nav id="sidebar-navigation"></nav>

        <div id="sidebar-target"></div>

        <div id="sidebar-footer"></div>

    `;

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

                ${CONFIG.APP_NAME}

            </h2>

            <p>

                ${CONFIG.APP_TAGLINE}

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

            <span class="menu-icon">${item.icon}</span>

            <span class="menu-title">${item.title}</span>

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

        <h1>

            ${CONFIG.APP_NAME}

        </h1>

        <h2>

            ${CONFIG.APP_TAGLINE}

        </h2>

        <p>

            ${CONFIG.APP_DESCRIPTION}

        </p>

        <small>

            Designed &amp; Developed by
            <strong>${CONFIG.AUTHOR}</strong>

        </small>

    `;

}