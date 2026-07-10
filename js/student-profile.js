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