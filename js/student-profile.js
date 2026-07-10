"use strict";

/* ==========================================================
   My Goal
   Student Profile Engine
   Phase 04.5 - Build 4.5.3A
   Designed & Developed by Anura Jayasekara
========================================================== */

/* ==========================================================
   Constants
========================================================== */

const STUDENT_PROFILE_KEY = "studentProfile";

/* ==========================================================
   Initialize
========================================================== */

function initializeStudentProfile() {

    let profile = loadStudentProfile();

    if (!profile) {

        profile = createDefaultStudentProfile();

        saveStudentProfile(profile);

    }

    createStudentProfileModal();

    if (!profile.name) {

    showStudentProfileModal();

}

    return profile;

}

/* ==========================================================
   Create Default Profile
========================================================== */

function createDefaultStudentProfile() {

    return {

        name: "",

        photo: "",

        grade: 5,

        school: "",

        createdAt: new Date().toISOString()

    };

}

/* ==========================================================
   Load Profile
========================================================== */

function loadStudentProfile() {

    const data = localStorage.getItem(

        STUDENT_PROFILE_KEY

    );

    if (!data) {

        return null;

    }

    try {

        return JSON.parse(data);

    }

    catch {

        return null;

    }

}

/* ==========================================================
   Save Profile
========================================================== */

function saveStudentProfile(profile) {

    if (!validateStudentProfile(profile)) {

        return false;

    }

    localStorage.setItem(

        STUDENT_PROFILE_KEY,

        JSON.stringify(profile)

    );

    return true;

}

/* ==========================================================
   Validate
========================================================== */

function validateStudentProfile(profile) {

    if (!profile) {

        return false;

    }

    if (typeof profile !== "object") {

        return false;

    }

    if (!("name" in profile)) {

        return false;

    }

    if (!("photo" in profile)) {

        return false;

    }

    if (!("grade" in profile)) {

        return false;

    }

    if (!("school" in profile)) {

        return false;

    }

    return true;

}

/* ==========================================================
   Get Student Name
========================================================== */

function getStudentName() {

    const profile = loadStudentProfile();

    if (!profile) {

        return "";

    }

    return profile.name;

}

/* ==========================================================
   Update Student Name
========================================================== */

function updateStudentName(name) {

    const profile = loadStudentProfile();

    if (!profile) {

        return false;

    }

    profile.name = name.trim();

    return saveStudentProfile(profile);

}

/* ==========================================================
   Create Student Profile Modal
========================================================== */

function createStudentProfileModal() {

    if (document.getElementById("student-profile-modal")) {

        return;

    }

    const modal = document.createElement("div");

    modal.id = "student-profile-modal";

    modal.className = "profile-modal-overlay";

    

    modal.innerHTML = `

        <div class="profile-modal">

            <div class="profile-modal-header">

                <div class="profile-avatar">

                    👩‍🎓

                </div>

                <h2>

                    Student Profile

                </h2>

                <p>

                    Enter your name to personalize your dashboard.

                </p>

            </div>

            <div class="profile-modal-body">

                <label for="profile-name-input">

                    Student Name

                </label>

                <input
                    id="profile-name-input"
                    class="profile-input"
                    type="text"
                    maxlength="30"
                    placeholder="Enter your name"
                    autocomplete="off">

            </div>

            <div class="profile-modal-footer">

                <button
                    id="profile-cancel-button"
                    class="profile-button secondary-button"
                    type="button">

                    Cancel

                </button>

                <button
                    id="profile-save-button"
                    class="profile-button primary-button"
                    type="button">

                    Save

                </button>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    const saveButton = document.getElementById(
    "profile-save-button"
);

saveButton.addEventListener(
    "click",
    saveStudentProfileFromModal
);

}





/* ==========================================================
   Show Student Profile Modal
========================================================== */

function showStudentProfileModal() {

    const modal = document.getElementById(
        "student-profile-modal"
    );

    if (!modal) {

        return;

    }

    modal.classList.add("show");

}


/* ==========================================================
   Hide Student Profile Modal
========================================================== */

function hideStudentProfileModal() {

    const modal = document.getElementById(
        "student-profile-modal"
    );

    if (!modal) {

        return;

    }

    modal.classList.remove("show");

}

/* ==========================================================
   Save Student Profile From Modal
========================================================== */

function saveStudentProfileFromModal() {

    const input = document.getElementById(
        "profile-name-input"
    );

    if (!input) {

        return;

    }

    const name = input.value.trim();

    if (!name) {

        input.focus();

        return;

    }

    updateStudentName(name);

    hideStudentProfileModal();

    refreshStudentName();

}