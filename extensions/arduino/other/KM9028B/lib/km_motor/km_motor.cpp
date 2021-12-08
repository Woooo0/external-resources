#include "km_motor.h"
#include "Arduino.h"

km_motor::km_motor(int pin,int dir,int passage){
   ledcSetup(passage,2000,8);
   ledcAttachPin(dir, passage);  // 将通道与对应的引脚连接
   pinMode(pin,OUTPUT);
   this->pin = pin;
   this->dir = dir;
   this->pwm = pwm;
   this->passage = passage;
}

void km_motor::forward(int pwm){
   int value = map(pwm,0,10,45,255);
   digitalWrite(pin,LOW);
   ledcWrite(passage, value);  // 输出PWM
}
void km_motor::backward(int pwm){
   int value = map(pwm,0,10,235,0);
   digitalWrite(pin,HIGH);
   ledcWrite(passage, value);  // 输出PWM
}
void km_motor::stop(){
   digitalWrite(pin,LOW);
   ledcWrite(passage, 0);  // 输出PWM
}