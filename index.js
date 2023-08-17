const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//modal open function
const openModal= () => {
    //initially modal ka scale 0 h to wo visible ni hoga css mai kiya hai... and jaise hi class active hui to scale 1 kr diya in css
    //same done in overlay phle opacity 0 then 1
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
}

const closeModal= () => {
    console.log("Modal is closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}