(() => {
    class Doc {
        body = document.body;
        get platform() {
            this.body.getAttribute("data-platform")
        }
        set platform(platform) {
            this.body.setAttribute("data-platform", platform)
        }
    }
    var doc = new Doc();

    // Platform detector
    switch (navigator.platform) {
        case "MacIntel":
            doc.platform = "darwin";
            break;

        case "Win32":
            doc.platform = "win32";
            break;

        default:
            doc.platform = "unknown";
            break;
    }
})()
