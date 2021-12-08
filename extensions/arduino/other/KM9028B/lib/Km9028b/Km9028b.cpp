#include "km9028b.h"

static bool clogFlag;
unsigned long triggertime = 0;
unsigned long delta = 200;
TaskHandle_t dis_run_handler = NULL, dis_coulomb_handler = NULL;

Km9028b::Km9028b()
{
  pinMode(2, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(22, OUTPUT);
  pinMode(21, OUTPUT);
  pinMode(23, OUTPUT);
  pinMode(16, OUTPUT);
  pinMode(36, INPUT);
  pinMode(39, INPUT_PULLUP);
  digitalWrite(2, HIGH);
  digitalWrite(16, HIGH);
  xTaskCreate(ctrl, "ctrl", 2048, NULL, 5, NULL);
  attachInterrupt(digitalPinToInterrupt(5), falling, RISING);
}

void Km9028b::coulomb(void *parameter)
{
  while (1)
  {
    digitalWrite(22, HIGH);
    vTaskDelay(250 / portTICK_PERIOD_MS);
    digitalWrite(22, LOW);
    vTaskDelay(250 / portTICK_PERIOD_MS);
  }
}

void Km9028b::run(void *parameter)
{
  while (1)
  {
    digitalWrite(23, HIGH);
    vTaskDelay(450 / portTICK_PERIOD_MS);
    digitalWrite(23, LOW);
    vTaskDelay(450 / portTICK_PERIOD_MS);
  }
}

void Km9028b::ctrl(void *parameter)
{
  static bool powerFlag;
  int closeFlag;
  static bool chargeFlag;
  while (1)
  {
    if (digitalRead(39) && dis_coulomb_handler == NULL && powerFlag && analogRead(36) < 2100)
    {
      digitalWrite(23, LOW);
      digitalWrite(21, LOW);
      digitalWrite(16, HIGH);
      digitalWrite(2, HIGH);
      xTaskCreate(coulomb, "coulomb", 1024, NULL, 3, &dis_coulomb_handler);
    }
    else if (!digitalRead(39))
    {
      if (dis_coulomb_handler != NULL)
      {
        vTaskDelete(dis_coulomb_handler);
      }
      digitalWrite(22, LOW);
      chargeFlag = 1;
    }
    else if (!powerFlag && chargeFlag && digitalRead(39) && analogRead(36) > 3100)
    {
      digitalWrite(22, HIGH);
      chargeFlag = 0;
    }

    if (digitalRead(12) && digitalRead(5))
    {
      powerFlag = 1;
      closeFlag = 0;
    }
    if (!digitalRead(5))
    {
      vTaskDelay(1500 / portTICK_PERIOD_MS);
      if (!digitalRead(5) && !powerFlag)
      {
        digitalWrite(12, HIGH);
        digitalWrite(23, HIGH);
      }
      while (!digitalRead(5) && powerFlag)
      {
        vTaskDelay(200 / portTICK_PERIOD_MS);
        closeFlag++;
        if (closeFlag == 3)
        {
          if (dis_run_handler != NULL)
          {
            vTaskDelete(dis_run_handler);
          }
          if (dis_coulomb_handler != NULL)
          {
            vTaskDelete(dis_coulomb_handler);
          }
          digitalWrite(12, LOW);
          digitalWrite(22, LOW);
          digitalWrite(23, LOW);
          detachInterrupt(digitalPinToInterrupt(5));
        }
      }
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

void Km9028b::falling()
{
  static int time = millis();
  if (dis_coulomb_handler == NULL && (millis() - triggertime > delta))
  {
    triggertime = millis();
    if (!digitalRead(12) || digitalRead(13) || (dis_run_handler == NULL && millis() - time > 200))
    {
      digitalWrite(12, HIGH);
      digitalWrite(21, HIGH);
      digitalWrite(22, LOW);
      xTaskCreate(run, "run", 1024, NULL, 2, &dis_run_handler);
      digitalWrite(13, LOW);
      digitalWrite(2, LOW);
      digitalWrite(16, LOW);
      clogFlag = 1;
    }
    else if (dis_run_handler != NULL)
    {
      // digitalWrite(23, HIGH);
      // digitalWrite(21, LOW);
      // digitalWrite(13, HIGH);
      // ESP.restart();
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
