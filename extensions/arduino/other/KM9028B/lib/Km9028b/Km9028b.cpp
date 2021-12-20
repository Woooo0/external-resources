#include "km9028b.h"

const int powerD = 2;
const int powerHold = 12;
const int restartFlag = 14;
const int powerSw = 15;
const int powerC = 16;
const int motorSleep = 21;
const int yellowLed = 22;
const int greenLed = 23;
const int coulombInput = 36;
const int chargeInput = 39;
static bool clogFlag;
unsigned long triggertime = 0;
unsigned long delta = 200;
TaskHandle_t dis_run_handler = NULL, dis_coulomb_handler = NULL;

Km9028b::Km9028b()
{
  pinMode(powerD, OUTPUT);
  pinMode(powerHold, OUTPUT);
  pinMode(restartFlag, OUTPUT);
  pinMode(powerSw, INPUT_PULLUP);
  pinMode(yellowLed, OUTPUT);
  pinMode(motorSleep, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(powerC, OUTPUT);
  pinMode(coulombInput, INPUT);
  pinMode(chargeInput, INPUT_PULLUP);
  digitalWrite(powerD, HIGH);
  digitalWrite(powerC, HIGH);
  xTaskCreate(ctrl, "ctrl", 2048, NULL, 5, NULL);
  attachInterrupt(digitalPinToInterrupt(powerSw), falling, RISING);
}

void Km9028b::coulomb(void *parameter)
{
  while (1)
  {
    digitalWrite(yellowLed, HIGH);
    vTaskDelay(250 / portTICK_PERIOD_MS);
    digitalWrite(yellowLed, LOW);
    vTaskDelay(250 / portTICK_PERIOD_MS);
  }
}

void Km9028b::run(void *parameter)
{
  while (1)
  {
    digitalWrite(greenLed, HIGH);
    vTaskDelay(450 / portTICK_PERIOD_MS);
    digitalWrite(greenLed, LOW);
    vTaskDelay(450 / portTICK_PERIOD_MS);
  }
}

void Km9028b::ctrl(void *parameter)
{
  static bool powerFlag;
  static int closeFlag;          //值为3时关机
  static bool chargeFlag; //插入充电器标志
  static int coulomCount;
  while (1)
  {
    //重复检测10次，如果条件满足为低电
    if (analogRead(coulombInput) < 2500 && coulomCount != 10)
    {
      coulomCount++;
    }
    else if (coulomCount != 10)
    {
      coulomCount = 0;
    }
    //低电指示任务
    if (digitalRead(chargeInput) && dis_coulomb_handler == NULL && powerFlag && coulomCount == 10)
    {
      if (dis_run_handler != NULL)
      {
        vTaskSuspend(dis_run_handler);
      }
      digitalWrite(greenLed, LOW);
      xTaskCreate(coulomb, "coulomb", 1024, NULL, 3, &dis_coulomb_handler);
    }
    //插入充电器
    else if (!digitalRead(chargeInput))
    {
      if (dis_coulomb_handler != NULL)
      {
        vTaskSuspend(dis_coulomb_handler);
        coulomCount = 0;
      }
      digitalWrite(yellowLed, LOW);
      chargeFlag = 1;
    }
    //充满
    else if (!powerFlag && chargeFlag && digitalRead(chargeInput) && analogRead(coulombInput) > 3100)
    {
      digitalWrite(greenLed, HIGH);
      chargeFlag = 0;
    }

    if (digitalRead(powerHold) && digitalRead(powerSw))
    {
      powerFlag = 1;
      closeFlag = 0;
    }
    //开机
    if (!digitalRead(powerSw))
    {
      vTaskDelay(1500 / portTICK_PERIOD_MS);
      if (!digitalRead(powerSw) && !powerFlag)
      {
        digitalWrite(powerHold, HIGH);
        digitalWrite(greenLed, HIGH);
      }
      //关机
      while (!digitalRead(powerSw) && powerFlag)
      {
        vTaskDelay(200 / portTICK_PERIOD_MS);
        closeFlag++;
        if (closeFlag == 3)
        {
          if (dis_run_handler != NULL)
          {
            vTaskSuspend(dis_run_handler);
          }
          if (dis_coulomb_handler != NULL)
          {
            vTaskSuspend(dis_coulomb_handler);
          }
          digitalWrite(powerHold, LOW);
          digitalWrite(yellowLed, LOW);
          digitalWrite(greenLed, LOW);
          digitalWrite(motorSleep, LOW);
          digitalWrite(powerD, HIGH);
          digitalWrite(powerC, HIGH);
          detachInterrupt(digitalPinToInterrupt(powerSw));
        }
      }
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

void Km9028b::falling()
{
  static int time = millis();
  if (millis() - triggertime > delta)
  {
    triggertime = millis();
    if (!digitalRead(powerHold) || digitalRead(restartFlag) || (dis_run_handler == NULL && millis() - time > 200))
    {
      digitalWrite(powerHold, HIGH);
      digitalWrite(motorSleep, HIGH);
      xTaskCreate(run, "run", 1024, NULL, 2, &dis_run_handler);
      digitalWrite(restartFlag, LOW);
      digitalWrite(powerD, LOW);
      digitalWrite(powerC, LOW);
      clogFlag = 1;
    }
    else if (dis_run_handler != NULL && millis() - time > 200)
    {
      digitalWrite(yellowLed, LOW);
      digitalWrite(greenLed, HIGH);
      digitalWrite(motorSleep, LOW);
      digitalWrite(restartFlag, HIGH);
      ESP.restart();
    }
  }
}

void Km9028b::clog()
{
  while (!clogFlag)
  {
    delay(200);
  }
}
