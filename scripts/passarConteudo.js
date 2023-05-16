var currentIndex = 1;
var totalContent = 4;

var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");

var progressBar = document.querySelector(".progress");
var progressWidth = 100 / totalContent;

var hideContent = function() {
    for (var i = 1; i <= totalContent; i++) {
        document.getElementById("content" + i).style.display = "none";
    }
};

var showContent = function(index) {
    document.getElementById("content" + index).style.display = "block";
};

var updateButtons = function() {
    previousBtn.disabled = currentIndex === 1;
    nextBtn.disabled = currentIndex === totalContent;
};

var updateProgressBar = function() {
    progressBar.style.width = (progressWidth * currentIndex) + "%";
};

var previousContent = function() {
    if (currentIndex > 1) {
        hideContent();
        currentIndex--;
        showContent(currentIndex);
        updateButtons();
        updateProgressBar();
    }
};

var nextContent = function() {
    if (currentIndex < totalContent) {
        hideContent();
        currentIndex++;
        showContent(currentIndex);
        updateButtons();
        updateProgressBar();
    }
};

previousBtn.addEventListener("click", previousContent);
nextBtn.addEventListener("click", nextContent);

// Mostrar o primeiro evento inicialmente
showContent(currentIndex);
updateButtons();
updateProgressBar();