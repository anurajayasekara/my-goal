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

    startDateTime();

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

                    <p
                        id="welcome-datetime"
                        class="welcome-datetime">

                        Loading...

                    </p>

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

    if (hour >= 5 && hour < 9) {

        return "🌅 සුබ උදෑසනක්..!";

    }

    if (hour >= 9 && hour < 12) {

        return "🙏 ආයුබෝවන්..!";

    }

    if (hour >= 12 && hour < 16) {

        return "☀️ සුබ දහවලක්..!";

    }

    if (hour >= 16 && hour < 18) {

        return "🌇 සුබ සන්ධ්‍යාවක්..!";

    }

    if (hour >= 18 && hour < 20) {

        return "🌆 සුබ සැන්දෑවක්..!";

    }

    if (hour >= 20) {

        return "🌙 සුබ රාත්‍රියක්..!";

    }

    return "🙏 ආයුබෝවන්..!";

}

/* ==========================================================
   Date & Time
========================================================== */

function startDateTime() {

    updateDateTime();

    setInterval(updateDateTime, 1000);

}

/* ==========================================================
   Update Date & Time
========================================================== */

function updateDateTime() {

    const element = document.getElementById(
        "welcome-datetime"
    );

    if (!element) {

        return;

    }

    element.innerHTML = formatDateTime();

}

/* ==========================================================
   Format Date & Time
========================================================== */

function formatDateTime() {

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

    const time = now.toLocaleTimeString(
        "en-US",
        {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: true

        }

    );

    return `

        📅 ${now.getDate()}
        ${months[now.getMonth()]}
        ${now.getFullYear()}

        •

        ${days[now.getDay()]}

        •

        🕘 ${time}

    `;

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

