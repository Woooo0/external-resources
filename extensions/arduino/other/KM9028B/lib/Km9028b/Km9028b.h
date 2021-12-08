#ifndef KM9028B_H
#define KM9028B_H

#include "Arduino.h"

class Km9028b
{
private:
  static void ctrl(void * parameter );
  static void run(void * parameter );
  static void coulomb(void * parameter );
  static void falling();

public:
  Km9028b();
  void clog();
};
#endif