(() => {
    var el = document.querySelectorAll(".alert-close[data-nc-onclick=auto]");
    for (let i = 0; i < el.length; i++) {
        const e = el[i];
        var foundAlertRootEl = false;
        var currentEl = e;
        while (!foundAlertRootEl) {
            if (currentEl.parentElement.classList.contains("alert")) {
                foundAlertRootEl = true;
            }
            currentEl = currentEl.parentElement;
        }
        e.addEventListener("click", () => {
            if (window.NativeCSS.platform == "win32") {
                currentEl.classList.add("close");
            }
        })
    }
})()