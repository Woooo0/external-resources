const km9016 = formatMessage => ({
    name: formatMessage({
        id: 'km9028b.name',
        default: 'Software serial',
        description: 'Name of software serial'
    }),
    extensionId: 'km9028b',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['KM9028B_arduinoEsp32'],
    author: 'KeMeng',
    iconURL: `asset/KM9028B.png`,
    description: formatMessage({
        id: 'km9028b.description',
        default: 'KM9028B distance measurement module.',
        description: 'Description of KM9028B'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = km9016;