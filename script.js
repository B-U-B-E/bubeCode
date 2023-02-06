let buttonMenuMob = document.querySelector(".btn-menu-mobile");
        let header = document.querySelector("header");

        buttonMenuMob.addEventListener("click", function () {
            header.classList.toggle("open-mobile-nav");
        })