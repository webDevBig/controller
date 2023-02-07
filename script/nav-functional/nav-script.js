window.addEventListener("load", function () {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
 

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");


        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }

    //animation for tab line

    function _class(name) {
        return document.getElementsByClassName(name);
    }

    for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", function () {
            _class("tab-indicator")[0].style.top = `calc(12px + ${i*68}px)`;
        });
    }
});







// markerMenu.style.top = '12px';
// markerMenu.style.display = 'block';










// let tabPanesH = document.querySelectorAll(".chooseTabH");

// for (let i = 0; i < tabPanesH.length; i++) {
//     tabPanesH[i].addEventListener("click", function () {
//         _class("tab-indicatorH")[0].style.top = `calc(8px + ${i*54}px)`;
//     });
// }