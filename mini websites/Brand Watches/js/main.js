
const figures = document.querySelectorAll("figure")


figures.forEach(element => {
    
    element.addEventListener("click", ()=> {

        window.open("shop.html", "_parent")
    })
});