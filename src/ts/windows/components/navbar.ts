(NativeCSS.platform == "win32" ? () => {
    var el = document.querySelectorAll(".navbar-nav[data-nc-nav-highlight=auto]");
    for (let i = 0; i < el.length; i++) {
        var e = el[i];
        var items = e.querySelectorAll(".nav-item");

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.addEventListener("click", (ev) => {
                if ((ev.target as HTMLElement).classList.contains("navbar-expand-btn")) {
                    (ev.target as HTMLElement).parentElement.parentElement.classList.toggle("expanded");
                } else {
                    e.querySelector(".nav-item.active").classList.remove("active");
                    (ev.target as HTMLElement).classList.add("active");
                }
            })
        }
    }
} : () => { })()