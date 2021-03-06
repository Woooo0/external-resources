/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KM_9028B: 'when 9028B start',
        KM_SG90_CATEGORY: 'KM_SG90',
        KM_SG90_ANGLE: 'SG90 %1 angle %2 angle',
        KM9016_HC_SR04_READ_DISTANCE: 'ultrasonic %1 read distance %2',
        BUTTON: 'button %1 %2 key press?',
        YELLOW_BUTTON: 'yellow button %1 press?',
        COLLIDE: 'collide switch %1 colliding',
        KM_MI: 'sound sensor %1 value',
        KM_RAY: 'ray %1 value',
        KM_IRRX: ' Infrared reception %1 data',
        KM_IRAVOID: 'infrared avoid %1 barrier?',
        KM_IRLINE: 'Follow the trail %1 %2 status %3',
        KM_COLOR: 'init color sensor %1',
        KM_COLOR_READ: 'read color sensor pin %1 color %2',
        KM_RP: 'potentiometer %1 value',
        KM_MOTOR: 'set motor %1 speed(1-10) %2 direction %3',
        DHT11: 'pin %1 read %2',
        KM_TOP_ACC: 'fetch top pin %1 dir %2 axis %3',
        KM_RGB_INIT: 'RGB init pin %1',
        KM_RGB_BRIGHT: 'RGB pin %1 bright(0-255) %2',
        KM_RGB_SETPIXELCOLOR: 'RGB pin %1 the %2 LED color %3',
        KM_RGB_CLOSE: 'RGB pin %1 close',
        KM_BUZZER: 'play %1 passage %2 frequency %3 delay %4 millisecond',
        KM_BUZZER_CLOSE: 'stop %1 passage %2',
        KM_CLOCKDISPLAY_CATEGORY: '4-Digit Clock Display',
        KM_CLOCKDISPLAY_INIT: 'init 4-digit clock display pin %1',
        KM_CLOCKDISPLAY_SETBRIGHTNESS: 'set 4-digit clock display brightness %1',
        KM_CLOCKDISPLAY_DISPLAYNUMBER: '4-digit clock display show number %1',
        KM_CLOCKDISPLAY_DISPLAYSTRING: '4-digit clock display show string %1',
        KM_CLOCKDISPLAY_DISPLAY: '4-digit clock display show %1 at bit %2',
        KM_CLOCKDISPLAY_SETPOINT: '4-digit clock display set point %1',
        KM_CLOCKDISPLAY_STATE_ON: 'on',
        KM_CLOCKDISPLAY_STATE_OFF: 'off',
        KM_CLOCKDISPLAY_SETPOINT_TOOLTIP: 'It will take effect after the next update of the display.',
        KM_CLOCKDISPLAY_CLEAR: 'clear 4-digit clock display',
        KM_ROCKER: 'rocker pin %1 %2 value',
        MP3_VOLUM: 'MP3 pin %1 volum(0-30%) %2',
        MP3_SELECT: 'MP3 pin %1 play track %2',
        MP3_CONTROL: 'MP3 pin %1 play control %2',
        MP3_MODE: 'MP3 pin %1 play mode %2',
        MP3_NUMBER: 'MP3 pin %1 play distance %2 cm',
        LED: 'LED pin %1 state %2',
        LED_COLOR: 'Three-color lights pin %1 green %2 yellow %3 red %4',
        MATRIX_BRIGHT: 'martx pin %1 setbrightness(0-15) %2',
        MATRIX_ROTATION: 'martx pin %1 roattion %2',
        MATRIX_BITMAP: 'martx pin %1 default pattern %2',
        MATRIX_CHAR: 'martx pin %1 display char %2',
        MATRIX_TEXT: 'martx pin %1 display %2 delay %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KM_9028B: '???9028B??????',
        KM_SG90_CATEGORY: '??????',
        KM_SG90_ANGLE: '?????? %1 ?????? %2 ???',
        KM9016_HC_SR04_READ_DISTANCE: '?????????????????? %1 ???????????? %2',
        BUTTON: '?????? %1 %2???????????????',
        YELLOW_BUTTON: '???????????? %1 ??????????',
        COLLIDE: '???????????? %1 ????????????',
        KM_MI: '??????????????? %1 ??????',
        KM_RAY: '??????????????? %1 ??????',
        KM_IRRX: ' ???????????? %1 ??????',
        KM_IRAVOID: '???????????? %1 ????????????????',
        KM_COLOR: '???????????????????????? %1',
        KM_COLOR_READ: '??????????????????????????? %1 ?????? %2',
        KM_RP: '????????? %1 ??????',
        KM_MOTOR: '???????????? %1 ??????(1-10) %2 ?????? %3',
        DHT11: '?????? %1 ?????? %2',
        KM_IRLINE: '???????????? %1 %2 ?????? %3',
        KM_TOP_ACC: '??????????????? ?????? %1 %2 ??? %3',
        KM_RGB_INIT: '?????????RGB ?????? %1',
        KM_RGB_BRIGHT: 'RGB ?????? %1 ???????????????(0-255) %2',
        KM_RGB_SETPIXELCOLOR: 'RGB?????? ?????? %1 ??? %2 ??????????????? %3',
        KM_RGB_CLOSE: 'RGB?????? ?????? %1 ????????????',
        KM_BUZZER: '???????????? %1 ?????? %2 ?????? %3 ?????? %4 ??????',
        KM_BUZZER_CLOSE: '???????????? %1 ?????? %2',
        KM_CLOCKDISPLAY_CATEGORY: '4??????????????????',
        KM_CLOCKDISPLAY_INIT: '?????????4?????????????????? %1',
        KM_CLOCKDISPLAY_SETBRIGHTNESS: '??????4???????????????????????? %1',
        KM_CLOCKDISPLAY_DISPLAYNUMBER: '4?????????????????????????????? %1',
        KM_CLOCKDISPLAY_DISPLAYSTRING: '4?????????????????????????????? %1',
        KM_CLOCKDISPLAY_DISPLAY: '4???????????????????????? %1 ??? %2 ???',
        KM_CLOCKDISPLAY_SETPOINT: '4??????????????????????????? %1',
        KM_CLOCKDISPLAY_STATE_ON: '???',
        KM_CLOCKDISPLAY_STATE_OFF: '???',
        KM_CLOCKDISPLAY_SETPOINT_TOOLTIP: '?????????????????????????????????.',
        KM_CLOCKDISPLAY_CLEAR: '??????4??????????????????',
        KM_ROCKER: '?????? ?????? %1 %2 ???',
        MP3_VOLUM: 'MP3 ?????? %1 ??????(0-30%) %2',
        MP3_SELECT: 'MP3 ?????? %1 ???????????? %2',
        MP3_CONTROL: 'MP3 ?????? %1 ???????????? %2',
        MP3_MODE: 'MP3 ?????? %1 ???????????? %2',
        MP3_NUMBER: 'MP3 ?????? %1 ???????????? %2 cm',
        LED: '????????? ?????? %1 ?????? %2',
        LED_COLOR: '????????? ?????? %1 ?????? %2 ?????? %3 ?????? %4',
        MATRIX_BRIGHT: '????????? ?????? %1 ????????????(0-15) %2',
        MATRIX_ROTATION: '????????? ?????? %1 ?????? %2',
        MATRIX_BITMAP: '????????? ?????? %1 ???????????? %2',
        MATRIX_CHAR: '????????? ?????? %1 ???????????? %2',
        MATRIX_TEXT: '????????? ?????? %1 ??????????????? %2 ?????? %3',
    });
    return Blockly;
}

exports = addMsg;