document.addEventListener("DOMContentLoaded", function() {
   // grab the <img> the theme put in .site-logo
  const logoImg = document.querySelector(".site-logo img");
  if (!logoImg) return;               // if something’s changed, bail out
  
  // our cycle of pics
  const pics = [
    "{{ '/assets/images/profile/1000027231.jpg' | relative_url }}",
    "{{ '/assets/images/profile/DSC_0039_cropped.jpg' | relative_url }}",
    "{{ '/assets/images/profile/PXL_20250425_004018099.PORTRAIT.jpg' | relative_url }}",
    "{{ '/assets/images/profile/portrait (2).jpeg' | relative_url }}"
  ];
  let idx = 0;
  
  // make it obvious it’s clickable
  logoImg.style.cursor = "pointer";
  
  logoImg.addEventListener("click", function() {
    idx = (idx + 1) % pics.length;
    this.src = pics[idx];
  });
});
