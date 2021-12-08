#ifndef KM_MOTOR_H
#define KM_MOTOR_H

#include "Arduino.h"

class km_motor
{
  private:
      int pin;
      int pwm;
      int dir;
      int passage;

  public:
      km_motor(int pin, int dir,int passage);
      void forward(int pwm);
      void backward(int pwm);
      void stop();
  };
#endif  