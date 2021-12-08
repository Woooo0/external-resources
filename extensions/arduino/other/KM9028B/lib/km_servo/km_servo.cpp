#include "km_servo.h"
#include "Arduino.h"

km_servo::km_servo(int pin,int passage){
   ledcSetup(passage,50,8);
   ledcAttachPin(pin, passage);  // 将通道与对应的引脚连接
   pinMode(pin,OUTPUT);
   this->pin = pin;
   this->pwm = pwm;
   this->passage = passage;
}

int km_servo::calculatePWM(int degree)
{
  const float deadZone = 6.4;//对应0.5ms（0.5ms/(20ms/256）)
  const float max = 32;//对应2.5ms
  if (degree < 0)
    degree = 0;
  if (degree > 180)
    degree = 180;
  return (int)(((max - deadZone) / 180) * degree + deadZone);
}

void km_servo::calculate(int degree){
   ledcWrite(passage, calculatePWM(degree));  // 输出PWM
}