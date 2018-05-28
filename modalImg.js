function openImg01(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg-01");
  // Get the image text
  var imgText = document.getElementById("imgtext-01");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function openImg02(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg-02");
  // Get the image text
  var imgText = document.getElementById("imgtext-02");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
