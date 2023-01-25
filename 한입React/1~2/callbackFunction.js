function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}
function cry() {
  console.log("action::cry");
}
function sing() {
  console.log("action::sing");
}
checkMood("sad", sing, cry);
