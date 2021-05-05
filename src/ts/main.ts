/// <reference path = "main.d.ts" />

window.NativeCSS = (() => {
    class Controller {
        body = document.body;
        get platform() {
            return this.body.getAttribute("data-platform")
        }
        set platform(platform: string) {
            this.body.setAttribute("data-platform", platform)
        }
        supportedPlatforms = ["darwin", "win32", "linux"];
        detectPlatform() {
            switch (navigator.platform) {
                case "MacIntel":
                    return "darwin";
                case "Win32":
                    return "win32";
                case "Linux x86_64":
                    return "linux";
                default:
                    return "win32";
            }
        }
    }
    var controller = new Controller();

    return controller;
})()
