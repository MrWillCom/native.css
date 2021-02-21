(NativeCSS.platform == "win32" ? () => {
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
        window.addEventListener("resize", updateHeight);
    }
} : () => { })()