"use strict";

/* ==========================================================
My Goal
Statistics Module
Phase 05.2 - Build 5.2.1
Designed & Developed by Anura Jayasekara
========================================================== */


/* ==========================================================
Initialize Statistics
========================================================== */

function initializeStatistics() {

    renderStatistics();

    updateStatistics();

    /* ------------------------------------------------------
       Listen for Daily Score Save
       Daily Score → Statistics Refresh
    ------------------------------------------------------ */

    document.addEventListener(
        "dailyScoreSaved",
        updateStatistics
    );

}


/* ==========================================================
Render Statistics Cards
========================================================== */

function renderStatistics() {

    const section = document.getElementById(
        "statistics-section"
    );

    if (!section) {

        return;

    }

    section.innerHTML = `

        <div class="statistics-grid">

            <div class="statistics-card">

                <div class="statistics-icon">🎯</div>

                <div class="statistics-title">

                    Today's Score

                </div>

                <div
                    id="today-score"
                    class="statistics-value">

                    --

                </div>

            </div>


            <div class="statistics-card">

                <div class="statistics-icon">🏆</div>

                <div class="statistics-title">

                    Best Score

                </div>

                <div
                    id="best-score"
                    class="statistics-value">

                    --

                </div>

            </div>


            <div class="statistics-card">

                <div class="statistics-icon">📊</div>

                <div class="statistics-title">

                    Average Score

                </div>

                <div
                    id="average-score"
                    class="statistics-value">

                    --

                </div>

            </div>


            <div class="statistics-card">

                <div class="statistics-icon">📅</div>

                <div class="statistics-title">

                    Practice Days

                </div>

                <div
                    id="practice-days"
                    class="statistics-value">

                    --

                </div>

            </div>


            <div class="statistics-card statistics-card-wide">

                <div class="statistics-icon">🎯</div>

                <div class="statistics-title">

                    Target Progress

                </div>

                <div
                    id="target-progress"
                    class="statistics-value">

                    --

                </div>


                <!-- ======================================
                     Target Progress Bar
                ======================================= -->

                <div class="progress-bar">

                    <div
                        id="target-progress-bar"
                        class="progress-fill">
                    </div>

                </div>

            </div>

        </div>

    `;

}


/* ==========================================================
Update Statistics
========================================================== */

function updateStatistics() {

    updateTodayScore();

    updateBestScore();

    updateAverageScore();

    updatePracticeDays();

    updateTargetProgress();

}


/* ==========================================================
Today's Score
========================================================== */

function updateTodayScore() {

    const element = document.getElementById(
        "today-score"
    );

    if (!element) {

        return;

    }

    const today = App.getTodayScore();

    if (!today) {

        element.textContent = "--";

        return;

    }

    element.textContent = today.score;

}


/* ==========================================================
Best Score
========================================================== */

function updateBestScore() {

    const element = document.getElementById(
        "best-score"
    );

    if (!element) {

        return;

    }

    const statistics = App.getStatistics();

    element.textContent = statistics.highest;

}


/* ==========================================================
Average Score
========================================================== */

function updateAverageScore() {

    const element = document.getElementById(
        "average-score"
    );

    if (!element) {

        return;

    }

    const statistics = App.getStatistics();

    element.textContent = statistics.average;

}


/* ==========================================================
Practice Days
========================================================== */

function updatePracticeDays() {

    const element = document.getElementById(
        "practice-days"
    );

    if (!element) {

        return;

    }

    const statistics = App.getStatistics();

    element.textContent = statistics.practiceDays;

}


/* ==========================================================
Target Progress
========================================================== */

function updateTargetProgress() {

    const valueElement =
        document.getElementById(
            "target-progress"
        );

    const progressBar =
        document.getElementById(
            "target-progress-bar"
        );

    if (!valueElement || !progressBar) {

        return;

    }

    const statistics =
        App.getStatistics();


    /* ------------------------------------------------------
       Display Percentage
    ------------------------------------------------------ */

    valueElement.textContent =
        `${statistics.targetProgress}%`;


    /* ------------------------------------------------------
       Limit Progress Bar Width
       Maximum = 100%
    ------------------------------------------------------ */

    const width =
        Math.min(
            Math.max(
                statistics.targetProgress,
                0
            ),
            100
        );


    /* ------------------------------------------------------
       Update Progress Bar
    ------------------------------------------------------ */

    progressBar.style.width =
        `${width}%`;

}