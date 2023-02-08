window.addEventListener("load", function () {
    // store tabs variable
    var myDeviseShow = document.querySelector("ul.devise-nav-tabs"),
        mySettingsShow = document.querySelector("ul.settings-nav-tabs");



    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    var source_name = document.querySelector('.source-name'),
        source_subtitle = document.querySelector('.source-subtitle');
    var name = ['DCP', 'Sources', 'Lighting', 'Climate', 'Settings']
    var subtitle = ['current source', 'Control', 'Control', 'Control', '']


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
            source_name.innerHTML = name[i];
            source_subtitle.innerHTML = subtitle[i];
            if (i == 0) {
                myDeviseShow.classList.remove('hide');
                mySettingsShow.classList.add('hide')
            }
            else 
            if (i == 4) {
                mySettingsShow.classList.remove('hide')
                myDeviseShow.classList.add('hide');

            }
             else {
                mySettingsShow.classList.add('hide')
                myDeviseShow.classList.add('hide');
            }
        });
    }
});