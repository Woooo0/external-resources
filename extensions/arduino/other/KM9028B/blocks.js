/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#003f98';
    const secondaryColour = '#FF6347';

    Blockly.Blocks.km_9028b = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_9028B,
                colour: color,
                extensions: ['shape_hat'],
            });
        }
    };

    Blockly.Blocks.km_sg90_angle = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_SG90_ANGLE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'com',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'angle'
                    }
                ],
                colour: "#d16e3c",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km9016_hc_sr04_read_distance = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM9016_HC_SR04_READ_DISTANCE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'com',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['cm', 'CM'],
                            ['inch', 'INC']
                        ]
                    }
                ],
                colour: "#4cacb0",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.button = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON,
                args0: [{
                        type: 'field_dropdown',
                        name: 'button',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'direction',
                        options: [
                            ['上', '0'],
                            ['左', '1'],
                            ['下', '2'],
                            ['右', '3']
                        ]
                    }
                ],
                colour: "#e4b81a",
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.yellow_button = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.YELLOW_BUTTON,
                args0: [{
                    type: 'field_dropdown',
                    name: 'button',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#e4b81a",
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.collide = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.COLLIDE,
                args0: [{
                    type: 'field_dropdown',
                    name: 'collide',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#db002c",
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.km_mi = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_MI,
                args0: [{
                    type: 'field_dropdown',
                    name: 'mi',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }, ],
                colour: "#40a600",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_ray = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RAY,
                args0: [{
                    type: 'field_dropdown',
                    name: 'ray',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#0022d0",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_irrx = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_IRRX,
                args0: [{
                    type: 'field_dropdown',
                    name: 'irrx',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }, ],
                colour: "#e32ba1",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_iravoid = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_IRAVOID,
                args0: [{
                    type: 'field_dropdown',
                    name: 'iravoid',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }, ],
                colour: "#e32ba1",
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.km_irline = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_IRLINE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'irline_com',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'irline_dir',
                        options: [
                            ['左', '1'],
                            ['右', '0']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'irline_status',
                        options: [
                            ['脱线', '0'],
                            ['在线', '1']
                        ]
                    }
                ],
                colour: "#e32ba1",
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.km_color = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_COLOR,
                args0: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ['c', '2627'],
                        ['d', '2504']
                    ]
                }],
                colour: "#2acdba",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_color_read = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_COLOR_READ,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'color',
                        options: [
                            ['红色', 'R'],
                            ['绿色', 'G'],
                            ['蓝色', 'B']
                        ]
                    }
                ],
                colour: "#2acdba",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_rp = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RP,
                args0: [{
                    type: 'field_dropdown',
                    name: 'rp',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#f92a4b",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_motor = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_MOTOR,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor_com',
                        options: [
                            ['a', '32331'],
                            ['b', '18190']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'direction',
                        options: [
                            ['前进', '1'],
                            ['后退', '2'],
                            ['停止', '0']
                        ]
                    }
                ],
                colour: "#3b8bfb",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.dht11 = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.DHT11,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['温度', '1'],
                            ['湿度', '2']
                        ]
                    }
                ],
                colour: "#2daa97",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_top_acc = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_TOP_ACC,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'top_axis',
                        options: [
                            ['X', 'x'],
                            ['Y', 'y'],
                            ['Z', 'z']
                        ]

                    },
                    {
                        type: 'field_dropdown',
                        name: 'top_type',
                        options: [
                            ['加速度', '1'],
                            ['角速度', '2']
                        ]

                    }
                ],
                colour: "#e0b30f",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.km_rgb_init = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RGB_INIT,
                args0: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#fa905c",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_rgb_bright = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RGB_BRIGHT,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'bright'
                    },

                ],
                colour: "#fa905c",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_rgb_setPixelColor = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RGB_SETPIXELCOLOR,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rgb_sel',
                        options: [
                            ['一', '0'],
                            ['二', '1'],
                            ['三', '2'],
                            ['四', '3']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: "#fa905c",
                secondaryColour: '#4400B3',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_rgb_close = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_RGB_CLOSE,
                args0: [{
                    type: 'field_dropdown',
                    name: 'pin',
                    options: [
                        ['c', '26'],
                        ['d', '25']
                    ]
                }],
                colour: "#fa905c",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_buzzer = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_BUZZER,
                args0: [{
                        type: 'field_dropdown',
                        name: 'buzzer_com',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'passage',
                        options: [
                            ['0', '8'],
                            ['1', '9'],
                            ['2', '10'],
                            ['3', '11'],
                            ['4', '12'],
                            ['5', '13']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'buzzer'
                    },
                    {
                        type: 'input_value',
                        name: 'delay'
                    }
                ],
                colour: "#50a256",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_buzzer_close = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_BUZZER_CLOSE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'buzzer_close_com',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'passage',
                        options: [
                            ['0', '8'],
                            ['1', '9'],
                            ['2', '10'],
                            ['3', '11'],
                            ['4', '12'],
                            ['5', '13']
                        ]
                    }
                ],
                colour: "#50a256",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_ClockDisplay_init = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_INIT,
                args0: [{
                    type: 'field_dropdown',
                    name: 'di_com',
                    options: [
                        ['c', '2627'],
                        ['d', '2504']
                    ]
                }, ],
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_setBrightness = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_SETBRIGHTNESS,
                args0: [{
                    type: 'input_value',
                    name: 'BRT'
                }],
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_brightnessNumber = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                args0: [{
                    type: 'field_slider',
                    name: 'NUM',
                    value: '0',
                    precision: 1,
                    min: '0',
                    max: '7'
                }],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: "#31d9d1",
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_displayNumber = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_DISPLAYNUMBER,
                args0: [{
                    type: 'input_value',
                    name: 'DATA'
                }],
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_displayString = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_DISPLAYSTRING,
                args0: [{
                    type: 'input_value',
                    name: 'DATA'
                }],
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_display = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_DISPLAY,
                args0: [{
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    }
                ],
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_setPoint = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_SETPOINT,
                args0: [{
                    type: 'field_dropdown',
                    name: 'STA',
                    options: [
                        [Blockly.Msg.KM_CLOCKDISPLAY_STATE_ON, 'true'],
                        [Blockly.Msg.KM_CLOCKDISPLAY_STATE_OFF, 'false']
                    ]
                }],
                tooltip: Blockly.Msg.KM_CLOCKDISPLAY_SETPOINT_TOOLTIP,
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.km_ClockDisplay_clear = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_CLOCKDISPLAY_CLEAR,
                colour: "#31d9d1",
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.km_rocker = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.KM_ROCKER,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rocker',
                        options: [
                            ['X轴', 'X'],
                            ['Y轴', 'Y']
                        ]
                    }
                ],
                colour: "#71b341",
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.mp3_volum = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MP3_VOLUM,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'volum'
                    }
                ],
                colour: "#aa8b4e",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.mp3_select = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MP3_SELECT,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'select'
                    }
                ],
                colour: "#aa8b4e",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.mp3_control = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MP3_CONTROL,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'control',
                        options: [
                            ['播放', '1'],
                            ['暂停', '2'],
                            ['停止', '3'],
                            ['下一曲', '4'],
                            ['上一曲', '5'],
                            ['音量加', '6'],
                            ['音量减', '7']
                        ]
                    }
                ],
                colour: "#aa8b4e",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.mp3_mode = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MP3_MODE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['全部循环', '1'],
                            ['单曲循环', '2'],
                            ['单曲停止', '3'],
                            ['随机播放', '4'],
                            ['顺序播放', '5']
                        ]
                    }
                ],
                colour: "#aa8b4e",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.mp3_number = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MP3_NUMBER,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'number'
                    }
                ],
                colour: "#aa8b4e",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.led = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.LED,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['打开', '1'],
                            ['关闭', '0']
                        ]
                    }
                ],
                colour: "#3d69b2",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.led_color = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.LED_COLOR,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '26'],
                            ['d', '25']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'green',
                        options: [
                            ['打开', '255'],
                            ['关闭', '0']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'yellow',
                        options: [
                            ['打开', '255'],
                            ['关闭', '0']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'red',
                        options: [
                            ['打开', '255'],
                            ['关闭', '0']
                        ]
                    },

                ],
                colour: "#3d69b2",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.matrix_bright = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MATRIX_BRIGHT,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'bright'
                    },

                ],
                colour: "#d89818",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.matrix_rotation = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MATRIX_ROTATION,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rotation',
                        options: [
                            ['0度', '0'],
                            ['90度', '1'],
                            ['180度', '2'],
                            ['270度', '3']
                        ]
                    },
                ],
                colour: "#d89818",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.matrix_bitmap = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MATRIX_BITMAP,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'bitmap',
                        options: [
                            ['↑', '1']
                        ]
                    },

                ],
                colour: "#d89818",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.matrix_char = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MATRIX_CHAR,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'field_input',
                        name: 'char'
                    },
                ],
                colour: "#d89818",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.matrix_text = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.MATRIX_TEXT,
                args0: [{
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [
                            ['c', '2627'],
                            ['d', '2504']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'text'
                    },
                    {
                        type: 'input_value',
                        name: 'delay'
                    }

                ],
                colour: "#d89818",
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;