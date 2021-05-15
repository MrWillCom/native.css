interface Window {
    NativeCSS: {
        platform: string,
        detectPlatform: () => string,
        Alert?: Function,
        Dropdown?: Function,
        Navbar?: Function,
    };
}