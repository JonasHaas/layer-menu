window.onload = function() {

    // Burger Menu => Function for opening and closing the menu
    const menuToggle = document.getElementById("mtoggle");
    if(menuToggle) {
        menuToggle.addEventListener("click", function() {
            document.getElementById("mnavigation").classList.toggle("open");
            document.querySelectorAll(".show").forEach(function(shownLayer) {
                shownLayer.classList.remove("show");
            });
        });
    }

    // Sublink => Function for opening sidemenu layer
    const subLink = document.querySelectorAll(".sub-item");
    if(subLink) {
        subLink.forEach(function(link) {
            link.addEventListener("click", function() {
                document.querySelector(this.dataset.target).classList.add("show");
            });
        });
    }
    
    // Sidemenu layer => Function for closing shown layer
    const closeLayer = document.querySelectorAll(".layerClose");
    if(closeLayer) {
        closeLayer.forEach(function(layer) {
            layer.addEventListener("click", function(e) {
                e.target.parentElement.classList.remove("show");
            });
        });
    }
};