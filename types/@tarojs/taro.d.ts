export class Component {
    constructor(props: any);
    state: any;
    props: any;
}
export const ENV_TYPE: {
    ALIPAY: string;
    RN: string;
    SWAN: string;
    TT: string;
    WEAPP: string;
    WEB: string;
};
export class Events {
    static eventSplitter: RegExp;
    constructor(opts: any);
    callbacks: any;
    off(events: any, callback: any, context: any): any;
    on(events: any, callback: any, context: any): any;
    once(events: any, callback: any, context: any): any;
    trigger(events: any, ...args: any[]): any;
}
export class Link {
    constructor(interceptor: any);
    taroInterceptor: any;
    chain: any;
    addInterceptor(interceptor: any): void;
    request(requestParams: any): any;
}
export default _default;
// Circular reference from index
export const _default: any;
export const eventCenter: {
    callbacks: {};
    off: Function;
    on: Function;
    once: Function;
    trigger: Function;
};
export function getEnv(): any;
export class initPxTransform {
    constructor(config: any);
    config: any;
}
export namespace interceptors {
    function logInterceptor(chain: any): any;
    function timeoutInterceptor(chain: any): any;
}
export function internal_get_original(item: any): any;
export function internal_inline_style(obj: any): any;
export function internal_safe_get(object: any, path: any, defaultValue: any): any;
export function internal_safe_set(object: any, path: any, value: any): any;
export const noPromiseApis: {
    arrayBufferToBase64: boolean;
    base64ToArrayBuffer: boolean;
    canIUse: boolean;
    createAnimation: boolean;
    createAudioContext: boolean;
    createCameraContext: boolean;
    createCanvasContext: boolean;
    createContext: boolean;
    createInnerAudioContext: boolean;
    createIntersectionObserver: boolean;
    createLivePlayerContext: boolean;
    createLivePusherContext: boolean;
    createMapContext: boolean;
    createSelectorQuery: boolean;
    createVideoContext: boolean;
    createWorker: boolean;
    drawCanvas: boolean;
    getAccountInfoSync: boolean;
    getBackgroundAudioManager: boolean;
    getRecorderManager: boolean;
    getUpdateManager: boolean;
    hideKeyboard: boolean;
    hideLoading: boolean;
    hideNavigationBarLoading: boolean;
    hideToast: boolean;
    offWindowResize: boolean;
    onWindowResize: boolean;
    pauseBackgroundAudio: boolean;
    pauseVoice: boolean;
    showNavigationBarLoading: boolean;
    startAccelerometer: boolean;
    startCompass: boolean;
    stopAccelerometer: boolean;
    stopBackgroundAudio: boolean;
    stopCompass: boolean;
    stopPullDownRefresh: boolean;
    stopRecord: boolean;
    stopVoice: boolean;
};
export const onAndSyncApis: {
    clearStorageSync: boolean;
    getExtConfigSync: boolean;
    getFileSystemManager: boolean;
    getLaunchOptionsSync: boolean;
    getLogManager: boolean;
    getStorageInfoSync: boolean;
    getStorageSync: boolean;
    getSystemInfoSync: boolean;
    navigateToSmartGameProgram: boolean;
    offAppHide: boolean;
    offAppShow: boolean;
    offError: boolean;
    offPageNotFound: boolean;
    onAccelerometerChange: boolean;
    onAppHide: boolean;
    onAppShow: boolean;
    onBLECharacteristicValueChange: boolean;
    onBLEConnectionStateChange: boolean;
    onBackgroundAudioPause: boolean;
    onBackgroundAudioPlay: boolean;
    onBackgroundAudioStop: boolean;
    onBeaconServiceChange: boolean;
    onBeaconUpdate: boolean;
    onBluetoothAdapterStateChange: boolean;
    onBluetoothDeviceFound: boolean;
    onCompassChange: boolean;
    onError: boolean;
    onGetWifiList: boolean;
    onHCEMessage: boolean;
    onMemoryWarning: boolean;
    onNetworkStatusChange: boolean;
    onPageNotFound: boolean;
    onSocketClose: boolean;
    onSocketError: boolean;
    onSocketMessage: boolean;
    onSocketOpen: boolean;
    onUserCaptureScreen: boolean;
    onWifiConnected: boolean;
    removeStorageSync: boolean;
    reportAnalytics: boolean;
    setStorageSync: boolean;
};
export const otherApis: {
    addCard: boolean;
    addPhoneContact: boolean;
    advancedGeneralIdentify: boolean;
    animalClassify: boolean;
    authorize: boolean;
    canvasGetImageData: boolean;
    canvasPutImageData: boolean;
    canvasToTempFilePath: boolean;
    carClassify: boolean;
    checkIsSoterEnrolledInDevice: boolean;
    checkIsSupportFacialRecognition: boolean;
    checkIsSupportSoterAuthentication: boolean;
    checkSession: boolean;
    chooseAddress: boolean;
    chooseImage: boolean;
    chooseInvoice: boolean;
    chooseInvoiceTitle: boolean;
    chooseLocation: boolean;
    chooseMessageFile: boolean;
    chooseVideo: boolean;
    clearStorage: boolean;
    closeBLEConnection: boolean;
    closeBluetoothAdapter: boolean;
    closeSocket: boolean;
    compressImage: boolean;
    connectSocket: boolean;
    connectWifi: boolean;
    createBLEConnection: boolean;
    dishClassify: boolean;
    downloadFile: boolean;
    faceVerifyForPay: boolean;
    getAvailableAudioSources: boolean;
    getBLEDeviceCharacteristics: boolean;
    getBLEDeviceServices: boolean;
    getBackgroundAudioPlayerState: boolean;
    getBeacons: boolean;
    getBluetoothAdapterState: boolean;
    getBluetoothDevices: boolean;
    getClipboardData: boolean;
    getConnectedBluetoothDevices: boolean;
    getConnectedWifi: boolean;
    getExtConfig: boolean;
    getFileInfo: boolean;
    getHCEState: boolean;
    getImageInfo: boolean;
    getLocation: boolean;
    getMenuButtonBoundingClientRect: boolean;
    getNetworkType: boolean;
    getSavedFileInfo: boolean;
    getSavedFileList: boolean;
    getScreenBrightness: boolean;
    getSetting: boolean;
    getShareInfo: boolean;
    getStorage: boolean;
    getStorageInfo: boolean;
    getSwanId: boolean;
    getSystemInfo: boolean;
    getUserInfo: boolean;
    getWeRunData: boolean;
    getWifiList: boolean;
    hideShareMenu: boolean;
    hideTabBar: boolean;
    hideTabBarRedDot: boolean;
    imageAudit: boolean;
    loadFontFace: boolean;
    login: boolean;
    logoClassify: boolean;
    makePhoneCall: boolean;
    navigateBack: boolean;
    navigateBackMiniProgram: boolean;
    navigateBackSmartProgram: boolean;
    navigateTo: boolean;
    navigateToMiniProgram: boolean;
    navigateToSmartProgram: boolean;
    notifyBLECharacteristicValueChange: boolean;
    objectDetectIdentify: boolean;
    ocrBankCard: boolean;
    ocrDrivingLicense: boolean;
    ocrIdCard: boolean;
    ocrVehicleLicense: boolean;
    openBluetoothAdapter: boolean;
    openCard: boolean;
    openDocument: boolean;
    openLocation: boolean;
    openSetting: boolean;
    pageScrollTo: boolean;
    plantClassify: boolean;
    playBackgroundAudio: boolean;
    playVoice: boolean;
    preloadSubPackage: boolean;
    previewImage: boolean;
    reLaunch: boolean;
    readBLECharacteristicValue: boolean;
    redirectTo: boolean;
    removeSavedFile: boolean;
    removeStorage: boolean;
    removeTabBarBadge: boolean;
    requestPayment: boolean;
    requestPolymerPayment: boolean;
    saveFile: boolean;
    saveImageToPhotosAlbum: boolean;
    saveVideoToPhotosAlbum: boolean;
    scanCode: boolean;
    seekBackgroundAudio: boolean;
    sendHCEMessage: boolean;
    sendSocketMessage: boolean;
    setBackgroundColor: boolean;
    setBackgroundTextStyle: boolean;
    setClipboardData: boolean;
    setEnableDebug: boolean;
    setInnerAudioOption: boolean;
    setKeepScreenOn: boolean;
    setNavigationBarColor: boolean;
    setNavigationBarTitle: boolean;
    setScreenBrightness: boolean;
    setStorage: boolean;
    setTabBarBadge: boolean;
    setTabBarItem: boolean;
    setTabBarStyle: boolean;
    setTopBarText: boolean;
    setWifiList: boolean;
    showActionSheet: boolean;
    showLoading: boolean;
    showModal: boolean;
    showShareMenu: boolean;
    showTabBar: boolean;
    showTabBarRedDot: boolean;
    showToast: boolean;
    startBeaconDiscovery: boolean;
    startBluetoothDevicesDiscovery: boolean;
    startFacialRecognitionVerify: boolean;
    startFacialRecognitionVerifyAndUploadVideo: boolean;
    startHCE: boolean;
    startPullDownRefresh: boolean;
    startRecord: boolean;
    startSoterAuthentication: boolean;
    startWifi: boolean;
    stopBeaconDiscovery: boolean;
    stopBluetoothDevicesDiscovery: boolean;
    stopHCE: boolean;
    stopWifi: boolean;
    switchTab: boolean;
    textReview: boolean;
    textToAudio: boolean;
    updateShareMenu: boolean;
    uploadFile: boolean;
    vibrateLong: boolean;
    vibrateShort: boolean;
    writeBLECharacteristicValue: boolean;
};
export function render(): void;