/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `<category name="科盟9028B" id="KM_SG90_CATEGORY" colour="#003f98" secondaryColour="#01275d" iconURI="">
             <block type="km_9028b" id="9028b">
       
             </block>

             <label text="▶ 超声波"></label>
             <block type="km9016_hc_sr04_read_distance" id="km9016_hc_sr04_read_distance">
       
             </block>
             <label text="▶ 舵机"></label>
             <block type="km_sg90_angle" id="km_sg90_angle">
                 <value name="angle">
                    <shadow type="math_number">
                       <field name="NUM">0</field>
                    </shadow>
                 </value>
             </block>
             <label text="▶ 按键"></label>
             <block type="button" id="button">
                   
             </block>
             <block type="yellow_button" id="yellow_button">
                   
             </block>

             <label text="▶ 碰撞开关"></label>
             <block type="collide" id="collide">
                   
             </block>

             <label text="▶ 声音传感器"></label>
             <block type="km_mi" id="km_mi">
                   
             </block>
             <label text="▶ 光线传感器"></label>
             <block type="km_ray" id="km_ray">
                   
             </block>
             <label text="▶ 红外传感器"></label>
             <block type="km_irrx" id="km_irrx">
             
             </block>
             <block type="km_iravoid" id="km_avoid">
       
             </block>
             <block type="km_irline" id="km_irline">
             <value name="irline_status">
                <shadow type="math_number">
                   <field name="NUM">0</field>
                </shadow>
             </value>
         </block>
             <label text="▶ 颜色传感器"></label>
             <block type="km_color" id="km_color">
       
             </block>
             <block type="km_color_read" id="km_color_read">
       
             </block>
             <label text="▶ 电位器"></label>
             <block type="km_rp" id="km_rp">
       
             </block>
             <label text="▶ 直流电机"></label>
             <block type="km_motor" id="km_motor">
                 <value name="speed">
                    <shadow type="math_number">
                       <field name="NUM">0</field>
                    </shadow>
                 </value>
             </block>

             <label text="▶ 温湿度传感器"></label>
             <block type="dht11" id="dht11">
             </block>
         
         <label text="▶ 陀螺仪"></label>
         <block type="km_top_acc" id="km_top_acc">
   
         </block>

         <label text="▶ RGB彩灯"></label>
         <block type="km_rgb_init" id="km_rgb_init">
      
         </block>
         
         <block type="km_rgb_bright" id="km_rgb_bright">
         <value name="bright">
         <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
         </block>

         <block type="km_rgb_setPixelColor" id="km_rgb_setPixelColor">
         <value name="COLOR">
             <shadow type="colour_picker"/>
         </value>
         </block>

         <block type="km_rgb_close" id="km_rgb_close">
      
         </block>

         <label text="▶ 蜂鸣器"></label>
         <block type="km_buzzer" id="km_buzzer">
           <value name="buzzer">
             <shadow type="math_number">
               <field name="NUM">0</field>
             </shadow>
           </value>
           
           <value name="delay">
             <shadow type="math_number">
               <field name="NUM">1000</field>
             </shadow>
           </value>
         </block>
             
         <block type="km_buzzer_close" id="km_buzzer_close">
       
         </block>

         <label text="▶ 摇杆"></label>
             <block type="km_rocker" id="km_rocker">
             
             </block>
         <label text="▶ 四位数码管"></label>
         <block type="km_ClockDisplay_init" id="km_ClockDisplay_init">
     </block>
     <block type="km_ClockDisplay_displayNumber" id="km_ClockDisplay_displayNumber">
         <value name="DATA">
             <shadow type="math_integer">
                 <field name="NUM">1024</field>
             </shadow>
         </value>
     </block>
     <block type="km_ClockDisplay_displayString" id="km_ClockDisplay_displayString">
         <value name="DATA">
             <shadow type="text">
                 <field name="TEXT">Open</field>
             </shadow>
         </value>
     </block>
     <block type="km_ClockDisplay_display" id="km_ClockDisplay_display">
         <value name="DATA">
             <shadow type="math_integer">
                 <field name="NUM">0</field>
             </shadow>
         </value>
     </block>
     <block type="km_ClockDisplay_clear" id="km_ClockDisplay_clear">
     </block>
     <block type="km_ClockDisplay_setBrightness" id="km_ClockDisplay_setBrightness">
         <value name="BRT">
             <shadow type="km_ClockDisplay_brightnessNumber">
                 <field name="NUM">2</field>
             </shadow>
         </value>
     </block>
     <block type="km_ClockDisplay_setPoint" id="km_ClockDisplay_setPoint">
     </block>
             <label text="▶ MP3"></label>
             <block type="mp3_volum" id="mp3_volum">
             <value name="volum">
             <shadow type="math_number">
               <field name="NUM">20</field>
             </shadow>
             </value>
             </block>
             <block type="mp3_select" id="mp3_select">
             <value name="select">
             <shadow type="math_number">
               <field name="NUM">1</field>
             </shadow>
             </value>
             </block>

             <block type="mp3_control" id="mp3_comtrol">
      
             </block>

             <block type="mp3_mode" id="mp3_mode">
      
             </block>

             <block type="mp3_number" id="mp3_number">
             <value name="number">
             <shadow type="math_number">
               <field name="NUM">100</field>
             </shadow>
             </value>
             </block>

             <label text="▶ LED灯"></label>
             <block type="led" id="led">
           
             </block>

             <block type="led_color" id="led_color">
             
             </block>

             <label text="▶ 点阵屏"></label>
             <block type="matrix_bright" id="matrix_bright">
             <value name="bright">
             <shadow type="math_number">
               <field name="NUM">10</field>
             </shadow>
             </value>
             </block>

             <block type="matrix_rotation" id="matrix_rotation">
          
             </block>

             <block type="matrix_bitmap" id="bitmap">
          
             </block>

             <block type="matrix_text" id="matrix_text">
             <value name="text">
             <shadow type="text">
               <field name="TEXT">KmEducation</field>
             </shadow>
             </value>

             <value name="delay">
             <shadow type="math_number">
               <field name="NUM">100</field>
             </shadow>
             </value>
             </block>
            
        </category>
        `;


}
exports = addToolbox;