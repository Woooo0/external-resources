#ifndef KM_SR04_H
#define KM_SR04_H

#include "Arduino.h"

class km_sr04
{
  private:
      int trig;
      int echo;

  public:
      km_sr04(int trig,int echo);
      unsigned int distance();
  };
#endif  
