// Cseréld ki a saját, deployolt Google Apps Script Web App URL-re
// (Apps Script szerkesztőben: Telepítés -> Új telepítés -> Webalkalmazás -> URL másolása)
var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbYNwMv00wzl9J-O2tCQsjG_V-KH9J7TNcFMfyibZuG0FcpsTOoy9n4k9f6VGSjcU8NA/exec';

// Cseréld ki a saját Google OAuth Client ID-re
// (Google Cloud Console -> APIs & Services -> Credentials -> OAuth 2.0 Client ID -> Web application)
var GOOGLE_CLIENT_ID = '299880504760-3665hhiu4r8anq3jco9a015b7vtuj1at.apps.googleusercontent.com';

var TOTAL_TESZT = 40;      // 40 teszt
var TESZT_PER_HET = 2;     // 2 teszt = 1 hét (24 feladat/hét)
var TOTAL_HET = Math.ceil(TOTAL_TESZT / TESZT_PER_HET);
