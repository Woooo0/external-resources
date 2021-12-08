#include "km_sr04.h"
#include "Arduino.h"

km_sr04::km_sr04(int trig,int echo)
{
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  this->echo = echo;
  this->trig = trig;
  }
unsigned int km_sr04::distance()
{
  //给Trig发送一个低高低的短时间脉冲,触发测距
  digitalWrite(trig, LOW); //给Trig发送一个低电平
  delayMicroseconds(2);    //等待 2微妙
  digitalWrite(trig,HIGH); //给Trig发送一个高电平
  delayMicroseconds(10);    //等待 10微妙
  digitalWrite(trig, LOW); //给Trig发送一个低电平
  
  int temp = int(pulseIn(echo, HIGH)); //存储回波等待时间,

  return (temp * 17 )/1000;;
  }  
