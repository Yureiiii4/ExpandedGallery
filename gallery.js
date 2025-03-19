
function initializeGallery() {
    let images = document.querySelectorAll(".preview");
    images.forEach(img => {
    img.setAttribute("tabindex", "0");
    img.addEventListener("focus", function() {upDate(this); });
    img.addEventListener("blur", function() { unDo(); });
    });
}

function upDate(previewPic) {
    console.log("Hovered...");
    console.log("Source: ", previewPic.src);
    console.log("Alt text: ", previewPic.alt);
    
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page Loaded - Adding tabindex");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        images[i].addEventListener("focus", function() { upDate(this); });
        images[i].addEventListener("blur", function() { unDo(); });
    }
}

window.onload = addTabFocus;
