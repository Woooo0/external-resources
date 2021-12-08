const ironKit = formatMessage => ({
    name: formatMessage({
        id: 'KM9028B.name',
        default: 'Software serial',
        description: 'Name of software serial'
    }),
    deviceId: 'KM9028B_arduinoEsp32',
    manufactor: 'KeMeng',
    leanMore: 'https://shop102471337.taobao.com/shop/view_shop.htm?spm=a1z0k.6846577.0.0.51b9477a8XkDaF&shop_id=102471337',
    iconURL: 'asset/KM9028B.png',
    description: formatMessage({
        id: 'KM9028B.description',
        default: 'KeMeng iron KM9028B.',
        description: 'Description for the KeMeng KM9028B device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/KM9028B-illustration.svg',
    connectionSmallIconURL: 'asset/KM9028B-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['km9028b'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = ironKit;