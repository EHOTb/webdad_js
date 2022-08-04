function sliderJs() {
    let slider = document.querySelector(".slider");
    let btnL = document.querySelector(".arrow__l");
    let arrL = document.querySelector(".slider__arrow-l");
    let btnR = document.querySelector(".arrow__r");
    let arrR = document.querySelector(".slider__arrow-r");
    let position = 0;
    let container = document.querySelector(".slider__items");
    let item = document.querySelectorAll(".slider__item");
    let track = document.querySelector(".slider__visible");
    let butConfirm = document.querySelector("#butt1");
    let itemsCount = item.length;
    let slidesToShow = document.querySelector("#slides_to_show");
    let slidesToScroll = document.querySelector("#slides_to_scroll");
    let butReset = document.querySelector("#butt2");
    let demo = document.querySelector(".demo");
    let sliderItem = document.querySelectorAll(".slider__item");

    for (let el of sliderItem) {
        el.classList.add("demo__width");
    }

    butConfirm.addEventListener("click", () => {
        for (let el of sliderItem) {
            el.classList.remove("demo__width");
        }
        demo.style.display = "none";

        slidesToShow = slidesToShow.value;
        slidesToScroll = slidesToScroll.value;

        const itemWidth = container.clientWidth / slidesToShow;
        let movePosition = slidesToScroll * itemWidth;
        console.log(itemWidth);
        item.forEach((el) => {
            el.style.minWidth = `${itemWidth}px`;
            console.log(itemWidth);
        });

        btnR.addEventListener("click", () => {
            const itemsLeft =
                itemsCount -
                (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

            position -=
                itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
            SetPosition();
            checkBtns();
        });

        btnL.addEventListener("click", () => {
            const itemsLeft = Math.abs(position) / itemWidth;

            position +=
                itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
            SetPosition();
            checkBtns();
        });

        const SetPosition = () =>
            (track.style.transform = `translateX(${position}px)`);

        const checkBtns = () => {
            // btnL.disabled = position == 0;
            if (btnL.position == 0) {}
            btnR.disabled =
                position == position <= -(itemsCount - slidesToShow) * itemWidth;

            if (position === 0) {
                arrL.classList.add("hidden");
            } else {
                arrL.classList.remove("hidden");
            }
            if (position <= -(itemsCount - slidesToShow) * itemWidth) {
                arrR.classList.add("hidden");
            } else {
                arrR.classList.remove("hidden");
            }
        };
        butConfirm.classList.add("hidden");
        butConfirm.style.cursor = "default";

        checkBtns();
    });

    butReset.addEventListener("click", () => {
        location.reload();
    });
}

sliderJs();