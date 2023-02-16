let app = (() => {
    function updateSlider(element) {
        if (element) {
            let parent = element.parentElement,
                lastValue = parent.getAttribute("data-slider-value");

            if (lastValue === element.value) {
                return; // No value change, no need to update then
            }

            parent.setAttribute("data-slider-value", element.value);
            let $thumb = parent.querySelector(".range-slider__thumb"),
                $bar = parent.querySelector(".range-slider__bar"),
                pct =
                element.value *
                ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight);

                if (element.value == 0)
                {
                    $thumb.classList.add('empty')
                }
                else{
                    $thumb.classList.remove('empty')
                }
               
            $thumb.style.bottom = `calc(${element.value}% - 9px)`;

            $thumb.style.bottom = `${pct}%`;
            $bar.style.height = `${element.value}%`;
            element.parentElement.parentElement.parentElement.parentElement.querySelector('.lightings-perc').innerHTML = `${element.value}%`;

        }
    }
    return {
        updateSlider: updateSlider
    };
})();

(function initAndSetupTheSliders() {
    const inputs = [].slice.call(
        document.querySelectorAll(".range-slider input")
    );
    // inputs.forEach((input) => input.setAttribute("value", "50"));
    inputs.forEach((input) => app.updateSlider(input));
    // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
    inputs.forEach((input) =>
        input.addEventListener("input", (element) => app.updateSlider(input))
    );
    inputs.forEach((input) =>
        input.addEventListener("change", (element) => app.updateSlider(input))
    );
})();