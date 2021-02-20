(() => {
    var el = document.querySelectorAll(".dropdown-menu");
    for (let i = 0; i < el.length; i++) {
        var e = el[i];

        var updateHeight = () => {
            var c = e.children;
            var height = c[c.length - 1].getBoundingClientRect().y + c[c.length - 1].getBoundingClientRect().height - c[0].getBoundingClientRect().y;
            (e as HTMLElement).style.setProperty("--height", `${height + 2 * 6}px`);
            (e as HTMLElement).style.setProperty("--0-height", `-${height + 2 * 6}px`);
        }
        updateHeight();
        window.addEventListener("resize", updateHeight)

        e["__proto__"].isOpen = false;

        e["__proto__"].open = (ev: MouseEvent) => {
            (e as HTMLElement).style.setProperty("--clicked-item-height", `${(ev.target as HTMLElement).clientHeight + 4}px`);
            e.classList.add("open");
            e["__proto__"].isOpen = true;
        }

        e["__proto__"].close = () => {
            e.classList.remove("open");
            e["__proto__"].isOpen = false;
        }

        e["__proto__"].toggle = (ev: MouseEvent) => {
            if (e["__proto__"].isOpen) {
                e["__proto__"].close();
            } else {
                e["__proto__"].open(ev);
            }
        }
    }
})()