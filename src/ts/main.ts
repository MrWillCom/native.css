var NativeCSS = (() => {
    class Controller {
        body = document.body;
        get platform() {
            return this.body.getAttribute("data-platform")
        }
        set platform(platform: string) {
            this.body.setAttribute("data-platform", platform)
        }
    }
    var controller = new Controller();

    // Platform detector
    switch (navigator.platform) {
        case "MacIntel":
            controller.platform = "darwin";
            break;

        case "Win32":
            controller.platform = "win32";
            break;

        case "Linux x86_64":
            controller.platform = "linux";
            break;

        default:
            controller.platform = "win32";
            break;
    }

    return controller;
})()
