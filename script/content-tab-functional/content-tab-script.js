window.addEventListener("load", function () {
    // store tabs variable

    // devise tabs

    var myTabs = document.querySelectorAll("ul.devise-nav-tabs > li");
    var myContentPanes = document.querySelectorAll(".content-tab-pane");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
            document.querySelector('.device-main-content').classList.remove('active')
            document.querySelector('.marker-devise').classList.remove('hide')
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        
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
    var logo_item = document.querySelector('.logo');
    logo_item.addEventListener("click", logo_itemClick, false);

    function logo_itemClick() {
       
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        document.querySelector('.marker-devise').classList.add('hide');
        document.querySelector('.device-main-content').classList.add('active')
        
    }

    //animation for tab line

    function _class(name) {
        return document.getElementsByClassName(name);
    }

    for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", function () {
            let coords = this.getBoundingClientRect();
            let parentPos = document.querySelector('.devise-nav-tabs').getBoundingClientRect();

            _class("marker-devise")[0].style.left = `calc(${coords.left}px - ${parentPos.left}px)`;


        });
    }
});


window.addEventListener("load", function () {
    // store tabs variable

    var myTabs = document.querySelectorAll("ul.settings-nav-tabs > li"),
        source_subtitle = document.querySelector('.source-subtitle');
    var subtitleSettings = ['Seating Controls', 'Power Resets', 'Control', 'Health Monitor', 'Control', 'Themes']



    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".settings-tab-pane");
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

            let coords = this.getBoundingClientRect();
            let parentPos = document.querySelector('.settings-nav-tabs').getBoundingClientRect();

            _class("marker-settings")[0].style.left = `calc(${coords.left}px - ${parentPos.left}px)`;

            source_subtitle.innerHTML = subtitleSettings[i];


        });
    }
});