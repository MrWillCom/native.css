interface Window {
    NativeCSS: {
        platform: string,
        detectPlatform: () => string,
        Alert?: Function,
    };
}