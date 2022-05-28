

(function(){
  const buttons = document.querySelectorAll(".btn");
  const storeImages = document.querySelectorAll(".column");
  
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter;

      storeImages.forEach((item) => {
        if (filter === "all"){
          item.style.display = "block"
        } else {
          if (item.classList.contains(filter)){
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        }

      })
    })
  })

})();





const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("full-img");



function openFullImg(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg(){
  fullImgBox.style.display = "none";
}