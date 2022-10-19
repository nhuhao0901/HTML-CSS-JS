const containerEl= document.querySelector(".container");

const btnel= document.querySelector(".btn");
const popupContainerEl= document.querySelector(".popup-container");
const closeIconEl= document.querySelector(".close-icon");

btnel.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

