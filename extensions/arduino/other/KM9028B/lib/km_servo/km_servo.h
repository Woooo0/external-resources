#ifndef KM_SERVO_H
#define KM_SERVO_H

#include "Arduino.h"

class km_servo
{
  private:
      int pin;
      int pwm;
      int passage;
      int calculatePWM(int degree);

  public:
      km_servo(int pin,int passage);
      void calculate(int degree);
  };
#endif  