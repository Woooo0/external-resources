/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Arduino.km_9028b = function(block) {
        Blockly.Arduino.includes_.include_km_9028b = `#include <Km9028b.h>`;
        Blockly.Arduino.definitions_[`Km9028b initiate`] = `Km9028b initiate;`;
        Blockly.Arduino.setups_[`initiate.clog()`] = `initiate.clog();`;
        var code = '';
        return code;

    };
    Blockly.Arduino.km_sg90_angle = function(block) {

        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const com = block.getFieldValue('com').slice(0, 2);
        const passage = block.getFieldValue('com').slice(-1);


        Blockly.Arduino.includes_.include_km_servo = `#include <km_servo.h>`;
        Blockly.Arduino.definitions_[`km_servo servo${com}(${com},${passage})`] = `km_servo servo${com}(${com},${passage});`;

        return `servo${com}.calculate(${angle});\n`;
    };
    Blockly.Arduino.km9016_hc_sr04_read_distance = function(block) {

        const com = block.getFieldValue('com');
        const echo = com.slice(0, 2);
        const trig = com.slice(-2);

        Blockly.Arduino.includes_.include_km_sr04 = `#include <km_sr04.h>`;
        Blockly.Arduino.definitions_[`km_sr04${trig}${echo}`] =
            `km_sr04 ultrasonic${trig}(${trig}, ${echo});`;

        return [`ultrasonic${trig}.distance()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.button = function(block) {
        const button = block.getFieldValue('button');
        const direction = block.getFieldValue("direction");

        Blockly.Arduino.includes_.include_button = `#include <button.h>`;
        Blockly.Arduino.definitions_[`BUTTON dir${button}`] = `BUTTON dir${button};`;

        return [`dir${button}.direction(${button},${direction})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.yellow_button = function(block) {
        const button = block.getFieldValue('button');


        Blockly.Arduino.setups_[`pinMode(${button},INPUT)`] = `pinMode(${button},INPUT);`;

        return [`digitalRead(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.collide = function(block) {
        const collide = block.getFieldValue('collide');


        Blockly.Arduino.setups_[`pinMode(${collide},INPUT)`] = `pinMode(${collide},INPUT);`;

        return [`digitalRead(${collide})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_mi = function(block) {
        const mi = block.getFieldValue('mi');

        return [`analogRead(${mi})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_ray = function(block) {
        const ray = block.getFieldValue('ray');

        return [`analogRead(${ray})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_irrx = function(block) {
        const irrx = block.getFieldValue('irrx');

        Blockly.Arduino.includes_.include_irrecv = `#include <IRrecv.h>`;
        Blockly.Arduino.includes_.include_irutils = `#include <IRutils.h>`;
        Blockly.Arduino.definitions_[`IRrecv irrecv${irrx}(${irrx})`] = `IRrecv irrecv${irrx}(${irrx});`;
        Blockly.Arduino.definitions_[`decode_results results${irrx}`] = `decode_results results${irrx};`;
        Blockly.Arduino.definitions_[`String ir${irrx}`] = `String ir${irrx};`;
        Blockly.Arduino.setups_[`irrecv${irrx}.enableIRIn()`] = `irrecv${irrx}.enableIRIn();`;
        Blockly.Arduino.loops_[`if(irrecv${irrx}.decode(&results${irrx})){ir${irrx} = int64String(results${irrx}.value,HEX);irrecv${irrx}.resume();}else{ir${irrx} = "";}`] = `if(irrecv${irrx}.decode(&results${irrx})){\n    ir${irrx} = int64String(results${irrx}.value,HEX);\n    irrecv${irrx}.resume();\n}else{ir${irrx} = "";}`;

        return [`ir${irrx}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_iravoid = function(block) {
        const iravoid = block.getFieldValue('iravoid');

        Blockly.Arduino.setups_[`pinMode(${iravoid},INPUT)`] = `pinMode(${iravoid},INPUT);`;

        return [`digitalRead(${iravoid})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_irline = function(block) {
        const irline_com = block.getFieldValue('irline_com');
        const irline_dir = block.getFieldValue('irline_dir');
        const irline_status = block.getFieldValue('irline_status');
        const irline_dir_left = irline_com.slice(0, 2);
        const irline_dir_right = irline_com.slice(-2);
        let irline_dir_if;

        Blockly.Arduino.setups_[`pinMode(${irline_dir_left},INPUT)`] = `pinMode(${irline_dir_left},INPUT);`;
        Blockly.Arduino.setups_[`pinMode(${irline_dir_right},INPUT)`] = `pinMode(${irline_dir_right},INPUT);`;

        if (irline_dir == 1) {
            irline_dir_if = irline_dir_left;
        } else if (irline_dir == 0) {
            irline_dir_if = irline_dir_right;
        }

        return [`digitalRead(${irline_dir_if}) == ${irline_status}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.km_color = function(block) {
        const pin = block.getFieldValue('pin');
        const SDA = pin.slice(0, 2);
        const SCL = pin.slice(-2);

        Blockly.Arduino.includes_.km_color = `#include <DFRobot_TCS34725.h>`;
        Blockly.Arduino.definitions_[`DFRobot_TCS34725 tcs34725${SDA}`] = `DFRobot_TCS34725 tcs34725${SDA};`;
        Blockly.Arduino.setups_[`tcs34725${SDA}.begin()`] = `tcs34725${SDA}.begin();`;
        Blockly.Arduino.setups_[`Wire.begin(${SDA},${SCL})`] = `Wire.begin(${SDA},${SCL});`;

        return "";
    };
    Blockly.Arduino.km_color_read = function(block) {
        const pin = block.getFieldValue('pin');
        const SDA = pin.slice(0, 2);
        const color = block.getFieldValue('color');
        switch (color) {
            case "R":
                return [`tcs34725${SDA}.getRedToGamma()`, Blockly.Arduino.ORDER_ATOMIC];
                break;

            case "G":
                return [`tcs34725${SDA}.getGreenToGamma()`, Blockly.Arduino.ORDER_ATOMIC];
                break;

            case "B":
                return [`tcs34725${SDA}.getBlueToGamma()`, Blockly.Arduino.ORDER_ATOMIC];
                break;
        }
    };
    Blockly.Arduino.km_rp = function(block) {
        const rp = block.getFieldValue('rp');

        return [`analogRead(${rp})`, Blockly.Arduino.ORDER_ATOMIC];

    };
    Blockly.Arduino.km_motor = function(block) {

        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        const pwm = block.getFieldValue('motor_com').slice(0, 2);
        const pin = block.getFieldValue('motor_com').slice(2, 4);
        const passage = block.getFieldValue('motor_com').slice(-1);
        const direction = block.getFieldValue('direction');

        Blockly.Arduino.includes_.km_motor = `#include <km_motor.h>`;
        Blockly.Arduino.definitions_[`km_motor motor${pin}`] = `km_motor motor${pin}(${pin},${pwm},${passage});`;
        Blockly.Arduino.setups_[`pinMode(21, OUTPUT)`] = `pinMode(21, OUTPUT);`;
        Blockly.Arduino.setups_[`digitalWrite(21, HIGH)`] = `digitalWrite(21, HIGH);`;
        if (direction == 1) {
            return `motor${pin}.forward(${speed});\n`;
        } else if (direction == 2) {
            return `motor${pin}.backward(${speed});\n`;
        } else {
            return `motor${pin}.stop();\n`;
        }

    };
    Blockly.Arduino.dht11 = function(block) {
        const pin = this.getFieldValue('pin');
        const mode = this.getFieldValue('mode');

        Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`DHT dht${pin}`] = `DHT dht${pin}(${pin}, 11);`;
        Blockly.Arduino.setups_[`dht${pin}.begin()`] = `dht${pin}.begin();`;

        if (mode == 1) {
            return [`dht${pin}.readTemperature()`, Blockly.Arduino.ORDER_ATOMIC];
        } else {
            return [`dht${pin}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
        }
    };
    Blockly.Arduino.km_top_acc = function(block) {
        const top_axis = block.getFieldValue('top_axis');
        const top_type = block.getFieldValue('top_type');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);

        Blockly.Arduino.includes_.km_top_wire = `#include <Wire.h>`;
        Blockly.Arduino.definitions_[`int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;`] = `int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;`;
        Blockly.Arduino.setups_[`Wire.begin(21,22);`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`Wire.beginTransmission(0x68);`] = `Wire.beginTransmission(0x68);`;
        Blockly.Arduino.setups_[`Wire.write(0x6B);`] = `Wire.write(0x6B);`;
        Blockly.Arduino.setups_[`WWire.write(0);`] = `Wire.write(0);`;
        Blockly.Arduino.setups_[`Wire.endTransmission(true);`] = `Wire.endTransmission(true);`;
        Blockly.Arduino.loops_[`Wire.beginTransmission(0x68);`] = `Wire.beginTransmission(0x68);`;
        Blockly.Arduino.loops_[`Wire.write(0x3B);`] = `Wire.write(0x3B);`;
        Blockly.Arduino.loops_[`Wire.endTransmission(false);`] = `Wire.endTransmission(false);`;
        Blockly.Arduino.loops_[`Wire.requestFrom(0x68,14,true);`] = `Wire.requestFrom(0x68,14,true);`;
        Blockly.Arduino.loops_[`AcX=Wire.read()<<8|Wire.read();`] = `AcX=Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`AcY=Wire.read()<<8|Wire.read();`] = `AcY=Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`AcZ=Wire.read()<<8|Wire.read();`] = `AcZ=Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`Wire.read()<<8|Wire.read();`] = `Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`GyX=Wire.read()<<8|Wire.read();`] = `GyX=Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`GyY=Wire.read()<<8|Wire.read();`] = `GyY=Wire.read()<<8|Wire.read();`;
        Blockly.Arduino.loops_[`GyZ=Wire.read()<<8|Wire.read();`] = `GyZ=Wire.read()<<8|Wire.read();`;

        if (top_type == 1) {
            switch (top_axis) {
                case "x":
                    return [`AcX`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
                case "y":
                    return [`AcY`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
                case "z":
                    return [`AcZ`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
            }
        } else {
            switch (top_axis) {
                case "x":
                    return [`GyX`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
                case "y":
                    return [`GyY`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
                case "z":
                    return [`GyZ`, Blockly.Arduino.ORDER_ATOMIC];
                    break;
            }
        }
    };
    Blockly.Arduino.km_rgb_init = function(block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.include_rgb = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`Adafruit_NeoPixel pixels${pin}(4, ${pin}, NEO_GRB + NEO_KHZ800)`] = `Adafruit_NeoPixel pixels${pin}(4, ${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`pixels${pin}.begin()`] = `pixels${pin}.begin();`;

        return "";
    };
    Blockly.Arduino.km_rgb_bright = function(block) {
        const bright = Blockly.Arduino.valueToCode(block, 'bright', Blockly.Arduino.ORDER_ATOMIC);
        const pin = this.getFieldValue('pin');
        return `pixels${pin}.setBrightness(${bright});\n`;
    };
    Blockly.Arduino.km_rgb_setPixelColor = function(block) {
        const pin = block.getFieldValue('pin');
        const rgb_sel = block.getFieldValue('rgb_sel');
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        return `pixels${pin}.setPixelColor(${rgb_sel}, ${colour});\n pixels${pin}.show();\n`;
    };
    Blockly.Arduino.km_rgb_close = function(block) {
        const pin = this.getFieldValue('pin');
        return `pixels${pin}.clear();\n`;
    };
    Blockly.Arduino.km_buzzer = function(block) {
        const buzzer = Blockly.Arduino.valueToCode(block, 'buzzer', Blockly.Arduino.ORDER_ATOMIC);
        const delay = Blockly.Arduino.valueToCode(block, 'delay', Blockly.Arduino.ORDER_ATOMIC);
        const buzzer_com = this.getFieldValue('buzzer_com');
        const passage = this.getFieldValue('passage');

        Blockly.Arduino.includes_.include_ESP32Tone = `#include <ESP32Tone.h>`;

        return `tone(${buzzer_com},${buzzer},${delay},${passage});\n`;
    };
    Blockly.Arduino.km_buzzer_close = function(block) {
        const buzzer_close_com = this.getFieldValue('buzzer_close_com');
        const passage = this.getFieldValue('passage');

        return `noTone(${buzzer_close_com},${passage});\n`;
    };
    Blockly.Arduino.km_ClockDisplay_init = function(block) {
        const di_com = block.getFieldValue('di_com');
        const clk = di_com.slice(0, 2);
        const dio = di_com.slice(-2);

        Blockly.Arduino.includes_.fourDigitClockDisplay_init = `#include <TM1637.h>`;
        Blockly.Arduino.definitions_.fourDigitClockDisplay_init = `TM1637 fourDigitClockDisplay(${clk}, ${dio});`;

        return `fourDigitClockDisplay.init();\nfourDigitClockDisplay.set(2);\n`;
    };

    Blockly.Arduino.km_ClockDisplay_setBrightness = function(block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.set(${brt});\n`;
    };

    Blockly.Arduino.km_ClockDisplay_brightnessNumber = function(block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.km_ClockDisplay_displayNumber = function(block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayNum(${data});\n`;
    };

    Blockly.Arduino.km_ClockDisplay_displayString = function(block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayStr(${data});\n`;
    };

    Blockly.Arduino.km_ClockDisplay_display = function(block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const pos = block.getFieldValue('POS');

        return `fourDigitClockDisplay.display(${pos}, ${data});\n`;
    };

    Blockly.Arduino.km_ClockDisplay_setPoint = function(block) {
        const sta = block.getFieldValue('STA');

        return `fourDigitClockDisplay.point(${sta});\n`;
    };

    Blockly.Arduino.km_ClockDisplay_clear = function() {
        return `fourDigitClockDisplay.clearDisplay();\n`;
    };
    Blockly.Arduino.km_rocker = function(block) {
        const x = block.getFieldValue('pin').slice(0, 2);
        const y = block.getFieldValue('pin').slice(-2);
        const rocker = block.getFieldValue('rocker');
        if (rocker == "X") {
            return [`analogRead(${x})`, Blockly.Arduino.ORDER_ATOMIC];
        } else if (rocker == "Y") {
            return [`analogRead(${y})`, Blockly.Arduino.ORDER_ATOMIC];
        }
    };
    Blockly.Arduino.mp3_volum = function(block) {
        const pin = block.getFieldValue('pin');
        const volum = Blockly.Arduino.valueToCode(block, 'volum', Blockly.Arduino.ORDER_ATOMIC);
        const rx_pin = pin.slice(-2);
        const tx_pin = pin.slice(0, 2);

        Blockly.Arduino.includes_.include_km_mp3 = `#include <km_mp3.h>`;
        Blockly.Arduino.definitions_[`km_mp3 mp3${pin}(${rx_pin},${tx_pin});`] = `km_mp3 mp3${pin}(${rx_pin},${tx_pin});`;
        Blockly.Arduino.setups_[`mp3${pin}.begin(9600);`] = `mp3${pin}.begin(9600);`;



        return `mp3${pin}.mp3_volume(${volum});\n`;
    };
    Blockly.Arduino.mp3_select = function(block) {
        const pin = block.getFieldValue('pin');
        const select = Blockly.Arduino.valueToCode(block, 'select', Blockly.Arduino.ORDER_ATOMIC);
        const rx_pin = pin.slice(-2);
        const tx_pin = pin.slice(0, 2);

        Blockly.Arduino.includes_.include_km_mp3 = `#include <km_mp3.h>`;
        Blockly.Arduino.definitions_[`km_mp3 mp3${pin}(${rx_pin},${tx_pin});`] = `km_mp3 mp3${pin}(${rx_pin},${tx_pin});`;
        Blockly.Arduino.setups_[`mp3${pin}.begin(9600);`] = `mp3${pin}.begin(9600);`;

        return `mp3${pin}.mp3_play_chapter(${select});\n`;
    };
    Blockly.Arduino.mp3_control = function(block) {
        const pin = block.getFieldValue('pin');
        const control = block.getFieldValue('control');
        const rx_pin = pin.slice(-2);
        const tx_pin = pin.slice(0, 2);

        Blockly.Arduino.includes_.include_km_mp3 = `#include <km_mp3.h>`;
        Blockly.Arduino.definitions_[`km_mp3 mp3${pin}(${rx_pin},${tx_pin});`] = `km_mp3 mp3${pin}(${rx_pin},${tx_pin});`;
        Blockly.Arduino.setups_[`mp3${pin}.begin(9600);`] = `mp3${pin}.begin(9600);`;

        switch (control) {
            case "1":
                return `mp3${pin}.mp3_play();\n`;
                break;
            case "2":
                return `mp3${pin}.mp3_pause();\n`;
                break;
            case "3":
                return `mp3${pin}.mp3_stop();\n`;
                break;
            case "4":
                return `mp3${pin}.mp3_next_song();\n`;
                break;
            case "5":
                return `mp3${pin}.mp3_last_song();\n`;
                break;
            case "6":
                return `mp3${pin}.mp3_vol_up();\n`;
                break;
            case "7":
                return `mp3${pin}.mp3_vol_dn();\n`;
                break;
        }
    };
    Blockly.Arduino.mp3_mode = function(block) {
        const pin = block.getFieldValue('pin');
        const mode = block.getFieldValue('mode');
        const rx_pin = pin.slice(-2);
        const tx_pin = pin.slice(0, 2);

        Blockly.Arduino.includes_.include_km_mp3 = `#include <km_mp3.h>`;
        Blockly.Arduino.definitions_[`km_mp3 mp3${pin}(${rx_pin},${tx_pin});`] = `km_mp3 mp3${pin}(${rx_pin},${tx_pin});`;
        Blockly.Arduino.setups_[`mp3${pin}.begin(9600);`] = `mp3${pin}.begin(9600);`;

        switch (mode) {
            case "1":
                return `mp3${pin}.mp3_loop_play();\n`;
                break;
            case "2":
                return `mp3${pin}.mp3_loop_single_play();\n`;
                break;
            case "3":
                return `mp3${pin}.mp3_single_stop();\n`;
                break;
            case "4":
                return `mp3${pin}.mp3_random_play();\n`;
                break;
            case "5":
                return `mp3${pin}.mp3_order_play();\n`;
                break;
        }
    };
    Blockly.Arduino.mp3_number = function(block) {
        const pin = block.getFieldValue('pin');
        const number = Blockly.Arduino.valueToCode(block, 'number', Blockly.Arduino.ORDER_ATOMIC);
        const rx_pin = pin.slice(-2);
        const tx_pin = pin.slice(0, 2);

        Blockly.Arduino.includes_.include_km_mp3 = `#include <km_mp3.h>`;
        Blockly.Arduino.definitions_[`km_mp3 mp3${pin}(${rx_pin},${tx_pin});`] = `km_mp3 mp3${pin}(${rx_pin},${tx_pin});`;
        Blockly.Arduino.setups_[`mp3${pin}.begin(9600);`] = `mp3${pin}.begin(9600);`;

        return `mp3${pin}.mp3_playDistance(${number});\n`;
    };
    Blockly.Arduino.led = function(block) {
        const pin = block.getFieldValue('pin');
        const mode = block.getFieldValue('mode');

        Blockly.Arduino.setups_[`pinMode(${pin},OUTPUT);`] = `pinMode(${pin},OUTPUT);`;

        switch (mode) {
            case "1":
                return `digitalWrite(${pin},HIGH);\n`;
                break;
            case "0":
                return `digitalWrite(${pin},LOW);\n`;
                break;
        }
    };
    Blockly.Arduino.led_color = function(block) {
        const pin = block.getFieldValue('pin');
        const red = block.getFieldValue('red');
        const green = block.getFieldValue('green');
        const yellow = block.getFieldValue('yellow');

        Blockly.Arduino.includes_.include_rgb = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`Adafruit_NeoPixel pixels${pin}(1, ${pin}, NEO_GRB + NEO_KHZ800)`] = `Adafruit_NeoPixel pixels${pin}(1, ${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`pixels${pin}.begin()`] = `pixels${pin}.begin();`;

        return `pixels${pin}.setPixelColor(0, pixels${pin}.Color(${yellow}, ${red}, ${green}));\n pixels${pin}.show();\n`;
    };
    Blockly.Arduino.matrix_bright = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const bright = Blockly.Arduino.valueToCode(block, 'bright', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;

        return `matrix${pin}.setBrightness(${bright});\n`;
    };
    Blockly.Arduino.matrix_bright = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const bright = Blockly.Arduino.valueToCode(block, 'bright', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;

        return `matrix${pin}.setBrightness(${bright});\n`;
    };
    Blockly.Arduino.matrix_rotation = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const rotation = block.getFieldValue('rotation');

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;

        return `matrix${pin}.setRotation(${rotation});\n`;
    };
    Blockly.Arduino.matrix_bitmap = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const bitmap = block.getFieldValue('bitmap');

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.definitions_[`static const uint8_t PROGMEM neutral_bmp[] =
        { B00010000,
          B00111000,
          B01010100,
          B00010000,
          B00010000,
          B00010000,
          B00010000,
          B00010000}`] = `static const uint8_t PROGMEM neutral_bmp[] =
          { B00010000,
            B00111000,
            B01010100,
            B00010000,
            B00010000,
            B00010000,
            B00010000,
            B00010000};`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;

        return `  matrix${pin}.clear();
        matrix${pin}.drawBitmap(0, 0, neutral_bmp, 8, 8, LED_GREEN);
        matrix${pin}.writeDisplay();\n`;
    };
    Blockly.Arduino.matrix_char = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const char = block.getFieldValue('char');

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;

        return `matrix${pin}.clear();\n  matrix${pin}.setCursor(1,0);\n  matrix${pin}.print("${char}");\n  matrix${pin}.writeDisplay();\n`;
    };
    Blockly.Arduino.matrix_text = function(block) {
        const pin = block.getFieldValue('pin');
        const sda = block.getFieldValue('pin').slice(0, 2);
        const scl = block.getFieldValue('pin').slice(2, 4);
        const text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
        const delay = Blockly.Arduino.valueToCode(block, 'delay', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_Adafruit_LEDBackpack = `#include <Adafruit_LEDBackpack.h>`;
        Blockly.Arduino.definitions_[`Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix()`] = `Adafruit_BicolorMatrix matrix${pin} = Adafruit_BicolorMatrix();`;
        Blockly.Arduino.setups_[`Wire.begin(${sda},${scl})`] = `Wire.begin(${sda},${scl});`;
        Blockly.Arduino.setups_[`matrix${pin}.begin(0x70)`] = `matrix${pin}.begin(0x70);`;
        Blockly.Arduino.setups_[` matrix${pin}.setTextColor(LED_GREEN)`] = ` matrix${pin}.setTextColor(LED_GREEN);`;

        return `matrix${pin}.setTextWrap(false);\n
            matrix${pin}.clear();
            static int x = 7;
            x--;
            matrix${pin}.setCursor(x,0);
            matrix${pin}.print(${text});
            matrix${pin}.writeDisplay();
            delay(${delay});
            if(x <= -100){x = 7;}\n`;
    };

    return Blockly;
}

exports = addGenerator;