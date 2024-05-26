function toggleTab(tabId) {
    let educationTab = document.getElementById("education");
    let achievementsTab = document.getElementById("achievements");

    if (tabId == "education") {
        educationTab.style.display = "block";
        achievementsTab.style.display = "none";
    } else if (tabId == "achievements") {
        educationTab.style.display = "none";
        achievementsTab.style.display = "block";
    }
}
 
