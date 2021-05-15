// (() => {
//     var el = document.querySelectorAll(".navbar-nav[data-nc-nav-highlight=auto]");
//     for (let i = 0; i < el.length; i++) {
//         var e = el[i];
//         var items = e.querySelectorAll(".nav-item");

//         for (let i = 0; i < items.length; i++) {
//             const item = items[i];
//             item.addEventListener("click", (ev) => {
//                 if (window.NativeCSS.platform == "win32") {
//                     if ((ev.target as HTMLElement).classList.contains("navbar-expand-btn")) {
//                         (ev.target as HTMLElement).parentElement.parentElement.classList.toggle("expanded");
//                     } else {
//                         e.querySelector(".nav-item.active").classList.remove("active");
//                         (ev.target as HTMLElement).classList.add("active");
//                     }
//                 }
//             })
//         }
//     }
// })();
// (() => {
//     var el = document.querySelectorAll(".navbar.navbar-left");
//     for (let i = 0; i < el.length; i++) {
//         var e = el[i];
//         e.parentElement.style.setProperty("--container-margin-left", `${e.clientWidth}px`);
//     }

//     var el = document.querySelectorAll(".navbar.navbar-top");
//     for (let i = 0; i < el.length; i++) {
//         var e = el[i];
//         e.parentElement.style.setProperty("--container-margin-top", `${e.clientHeight}px`);
//     }
// })();
(() => {
    class Navbar {
        constructor(el: HTMLElement) {
            this.el = el;
        }
        el: HTMLElement
        show() {
            this.el.classList.add("show")
        }
        hide() {
            this.el.classList.remove("show")
        }
        toggle() {
            this.el.classList.toggle("show")
        }
        isShown() {
            return this.el.classList.contains("show")
        }
        isHidden() {
            return !this.isShown()
        }
        getNavbarExpandBtn() {
            return this.el.getElementsByClassName("navbar-expand-btn")[0]
        }
        possibleDisplayMode = ["navbar-left", "navbar-top"];
        get displayMode() {
            return this.el.classList.contains("navbar-left") ? "left" : (this.el.classList.contains("navbar-top") ? "top" : undefined)
        }
        set displayMode(mode) {
            this.possibleDisplayMode.forEach((val) => {
                this.el.classList.remove(val)
            })
            this.el.classList.add(`navbar-${mode}`)
            this.clearContainerMargin()
            this.setContainerMargin()
        }
        clearContainerMargin() {
            this.el.parentElement.style.removeProperty("--container-margin-left");
            this.el.parentElement.style.removeProperty("--container-margin-top");
        }
        setContainerMargin() {
            switch (this.displayMode) {
                case "left":
                    this.el.parentElement.style.setProperty("--container-margin-left", `${this.el.clientWidth}px`);
                    break;

                case "top":
                    this.el.parentElement.style.setProperty("--container-margin-top", `${this.el.clientHeight}px`);

                default:
                    break;
            }
        }
    }
    window.NativeCSS.Navbar = Navbar;
})()