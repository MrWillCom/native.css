(() => {
    class Dropdown {
        constructor(el: HTMLElement) {
            this.el = el;
            this.updateHeight();
            this.registerUpdateHeightEvent();
        }
        el: HTMLElement
        updateHeight() {
            var c = this.el.children;
            var height = c[c.length - 1].getBoundingClientRect().y + c[c.length - 1].getBoundingClientRect().height - c[0].getBoundingClientRect().y;
            this.el.style.setProperty("--height", `${height + 2 * 6}px`);
            this.el.style.setProperty("--0-height", `-${height + 2 * 6}px`);
        }
        registerUpdateHeightEvent() {
            window.addEventListener("resize", this.updateHeight);
        }
        show(clickedEl) {
            this.el.classList.add("show")
            this.el.style.setProperty("--clicked-item-height", clickedEl.clientHeight);
        }
        hide() {
            this.el.classList.remove("show")
        }
        toggle(clickedEl) {
            this.el.classList.toggle("show")
            this.el.style.setProperty("--clicked-item-height", clickedEl.clientHeight);
        }
        isShown() {
            return this.el.classList.contains("show")
        }
        isHidden() {
            return !this.el.classList.contains("show")
        }
    }
    window.NativeCSS.Dropdown = Dropdown;
})()
