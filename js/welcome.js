"use strict";

/* ==========================================================
   My Goal
   Dashboard Header Module
   Phase 04.5 - Build 4.5.2
   Designed & Developed by Anura Jayasekara
========================================================== */

/* ==========================================================
   Dashboard Header
========================================================== */

function initializeWelcomeCard() {

    renderWelcomeCard();

    updateGreeting();

    updateDate();

    startClock();

}


/* ==========================================================
   Render Welcome Card
========================================================== */

function renderWelcomeCard() {

    const container = document.getElementById(
        "dashboard-header-section"
    );

    if (!container) {

        return;

    }

    const studentName = getStudentName() || "Student";

    container.innerHTML = `

        <div class="welcome-card">

            <div class="welcome-header">

                <div class="welcome-avatar">

                    👩‍🎓

                </div>

                <div class="welcome-content">

                    <p
                        id="welcome-greeting"
                        class="welcome-greeting">

                        Loading...

                    </p>

                    <h2 id="student-name">

                        ${studentName}

                    </h2>

                </div>

            </div>

            <div class="welcome-information">

                <div class="welcome-item">

                    <span class="welcome-icon">

                        📅

                    </span>

                    <span id="welcome-date">

                        Loading date...

                    </span>

                </div>

                <div class="welcome-item">

                    <span class="welcome-icon">

                        🕘

                    </span>

                    <span id="welcome-time">

                        Loading time...

                    </span>

                </div>

            </div>

        </div>

    `;

}


/* ==========================================================
   Greeting
========================================================== */

function updateGreeting() {

    const greeting = document.getElementById(
        "welcome-greeting"
    );

    if (!greeting) {

        return;

    }

    greeting.textContent = getGreeting();

}


/* ==========================================================
   Greeting Engine
========================================================== */

function getGreeting() {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {

        return "🌅 සුබ උදෑසනක්";

    }

    if (hour >= 12 && hour < 17) {

        return "☀️ සුබ දහවලක්";

    }

    if (hour >= 17 && hour < 19) {

        return "🌇 සුබ සන්ධ්‍යාවක්";

    }

    return "🌙 සුබ රාත්‍රියක්";

}


/* ==========================================================
   Date
========================================================== */

function updateDate() {

    const element = document.getElementById(
        "welcome-date"
    );

    if (!element) {

        return;

    }

    element.innerHTML = formatDate();

}


/* ==========================================================
   Format Date
========================================================== */

function formatDate() {

    const now = new Date();

    const months = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];

    const days = [

        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"

    ];

    return `

        ${now.getDate()}
        ${months[now.getMonth()]}
        ${now.getFullYear()}

        <br>

        ${days[now.getDay()]}

    `;

}


/* ==========================================================
   Clock
========================================================== */

function startClock() {

    updateClock();

    setInterval(updateClock, 1000);

}


/* ==========================================================
   Update Clock
========================================================== */

function updateClock() {

    const element = document.getElementById(
        "welcome-time"
    );

    if (!element) {

        return;

    }

    element.textContent = formatTime();

}


/* ==========================================================
   Format Time
========================================================== */

function formatTime() {

    const now = new Date();

    return now.toLocaleTimeString(
        "en-US",
        {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: true

        }

    );

}

/* ==========================================================
   Refresh Student Name
========================================================== */

function refreshStudentName() {

    const element = document.getElementById(
        "student-name"
    );

    if (!element) {

        return;

    }

    element.textContent =
        getStudentName() || "Student";

}

