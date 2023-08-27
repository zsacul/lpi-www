export const showHide = (showHideMore) => {

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtnMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      //btnText.innerHTML = "Read more"; 
      btnText.innerHTML = "Więcej..."; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Mniej..."; 
//      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
    
  }
