(() => {
    class Doc {
        body = document.body;
        get platform() {
            return this.body.getAttribute("data-platform")
        }
        set platform(platform: string) {
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

        case "Linux x86_64":
            doc.platform = "linux";
            break;

        default:
            doc.platform = "darwin";
            break;
    }
})()
