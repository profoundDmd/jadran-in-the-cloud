document.addEventListener("DOMContentLoaded", function() {
    console.log("rdy");

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    //init the aos (fade in) library
    AOS.init();


    //add events on scroll
    var parallax = document.querySelector(".parallax");
    window.addEventListener('scroll', runOnScroll);

    function runOnScroll () {

        /* landing page parallax effect */
        let scrolled = window.pageYOffset;
        let coords = (scrolled * 0.5) + 'px'
        parallax.style.top = coords;

        /* sliding titles as we scroll*/
        let viewportHeight = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
        let topService = document.querySelector("#servicesContent").getBoundingClientRect().top;
        let topProjects = document.querySelector("#projects").getBoundingClientRect().top;
        let topBib = document.querySelector("#bibImage").getBoundingClientRect().top;
        let topUzb = document.querySelector("#uzbImage").getBoundingClientRect().top;
        let topOa = document.querySelector("#oaImage").getBoundingClientRect().top;
        let topIntroName = document.getElementById("introName").getBoundingClientRect().top;

        if((viewportHeight - topService) > 200){
            document.documentElement.style.setProperty('--bgWidthService', 100 + '%');
        }

        if((viewportHeight - topService) < 200){
            document.documentElement.style.setProperty('--bgWidthService', 0 + '%');
        }

        if((viewportHeight - topProjects) > 50){
            document.documentElement.style.setProperty('--bgWidthProjects', 100 + '%');
        }

        if((viewportHeight - topProjects) < 50){
            document.documentElement.style.setProperty('--bgWidthProjects', 0 + '%');
        }

        if((viewportHeight - topBib) > 150){
            document.documentElement.style.setProperty('--bgWidthBib', 0 + '%');
        }

        if((viewportHeight - topBib) < 150){
            document.documentElement.style.setProperty('--bgWidthBib', 100 + '%');
        }

        if((viewportHeight - topUzb) > 150){
            document.documentElement.style.setProperty('--bgWidthUzb', 0 + '%');
        }

        if((viewportHeight - topUzb) < 150){
            document.documentElement.style.setProperty('--bgWidthUzb', 100 + '%');
        }

        if((viewportHeight - topOa) > 150){
            document.documentElement.style.setProperty('--bgWidthSic', 0 + '%');
        }

        if((viewportHeight - topOa) < 150){
            document.documentElement.style.setProperty('--bgWidthSic', 100 + '%');
        }

        if((viewportHeight - topIntroName) > 350){
            document.documentElement.style.setProperty('--underlineNameWidth', 100 + '%');
        }
    }

    /* remove loading */
    const loadingScreen = document.getElementById("loading");
    loadingScreen.onanimationend = () => {
        loadingScreen.classList.add("hide"); //add display none
        document.documentElement.style.setProperty('--positionFixedContainer', 0);
        document.documentElement.style.setProperty('--jitcOpacity', 1);
        document.documentElement.style.setProperty('--jitcTopPos', 10 + "%");

    }



});

