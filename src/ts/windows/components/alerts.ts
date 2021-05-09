(() => {
    class Alert {
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
            return !this.el.classList.contains("show")
        }
    }
    window.NativeCSS.Alert = Alert;
})()