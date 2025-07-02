document.addEventListener("DOMContentLoaded", function() {
  const pics = [
    "/assets/images/profile/1000027231.jpg",
    "/assets/images/profile/DSC_0039_cropped.jpg",
    "/assets/images/profile/PXL_20250425_004018099.PORTRAIT.jpg",
    "/assets/images/profile/portrait (2).jpeg"
  ];
  let idx = 0;
  const img = document.getElementById("profile-pic");
  img.addEventListener("click", function() {
    idx = (idx + 1) % pics.length;
    this.src = pics[idx];
  });
});
