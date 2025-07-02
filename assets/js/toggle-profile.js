document.addEventListener("DOMContentLoaded", function() {
   // grab the <img> the theme put in .site-logo
  const logoImg = document.querySelector('img[alt="Logo"]');
  if (!logoImg) return;               // if something’s changed, bail out
  
  // our cycle of pics
  const pics = [
    "/assets/images/profile/1000027231.jpg",
    "/assets/images/profile/DSC_0039.jpg",
    "/assets/images/profile/PXL_20250425_004018099_PORTRAIT.jpg",
    "/assets/images/profile/portrait_2.jpeg"
  ];
  let idx = 0;
  
  // make it obvious it’s clickable
  logoImg.style.cursor = "pointer";
  
  logoImg.addEventListener("click", function() {
    idx = (idx + 1) % pics.length;
    this.src = pics[idx];
  });
});
