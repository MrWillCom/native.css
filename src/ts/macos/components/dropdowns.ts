(NativeCSS.platform == "darwin" ? () => {
    var el = document.querySelectorAll(".dropdown-menu");
    for (let i = 0; i < el.length; i++) {
        var e = el[i];

        e["__proto__"].isOpen = e.classList.contains("open");

        e["__proto__"].open = (ev) => {
            e.classList.add("open");
            e["__proto__"].isOpen = true;
        }

        e["__proto__"].close = () => {
            e.classList.remove("open");
            e["__proto__"].isOpen = false;
        }

        e["__proto__"].toggle = (ev) => {
            if (e["__proto__"].isOpen) {
                e["__proto__"].close();
            } else {
                e["__proto__"].open(ev);
            }
        }
    }
} : () => { })()