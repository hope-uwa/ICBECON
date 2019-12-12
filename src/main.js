export const parallax = () => {
    const parallax = document.getElementsByClassName("slider")

    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset
        
        for(let i = 0; i < parallax.length; i++) {
            parallax[i].style.backgroundPositionY = `${offset * 0.6}px`
        }
        
    })
}