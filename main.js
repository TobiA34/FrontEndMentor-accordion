function myFunction(id,imgId) {
  var x = document.getElementById(id);
  var img = document.getElementById(imgId);
  ;

   if (x.style.display === "none") {
    x.style.display = "block";
    img.src = "./assets/images/icon-minus.svg";
    // img1.src = "";
    // img2.src = "./assets/images/icon-minus.svg";
    // img3.src = "./assets/images/icon-minus.svg";
   } else {
    x.style.display = "none";
    img.src = "./assets/images/icon-plus.svg";

    // img1.src = "./assets/images/icon-plus.svg";
    // img2.src = "./assets/images/icon-plus.svg";
    // img3.src = "./assets/images/icon-plus.svg";
   }
}
 