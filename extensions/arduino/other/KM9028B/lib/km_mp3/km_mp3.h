/*
km_mp3.h

km_mp3.cpp - Implementation of the Arduino software serial for ESP8266.
Copyright (c) 2015-2016 Peter Lerup. All rights reserved.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

#ifndef KM_MP3_h
#define KM_MP3_h

#include <inttypes.h>
#include <Stream.h>

#define DEFAULT_BUAD_RATE 9600

// This class is compatible with the corresponding AVR one,
// the constructor however has an optional rx buffer size.
// Speed up to 115200 can be used.

class km_mp3 : public Stream
{
public:
  unsigned char mp3_SumCheck(unsigned char *buf, unsigned char len);
  void mp3_playDistance(float s);
  void mp3_volume(uint8_t level);
  void mp3_play_chapter(uint16_t chapter);
  void mp3_play();
  void mp3_next_song();
  void mp3_last_song();
  void mp3_vol_up();
  void mp3_vol_dn();
  void mp3_stop();
  void mp3_pause();
  void mp3_loop_play();
  void mp3_loop_single_play();
  void mp3_single_stop();
  void mp3_random_play();
  void mp3_order_play();

  km_mp3(int receivePin, int transmitPin, bool inverse_logic = false, unsigned int buffSize = 64);
  ~km_mp3();

  void begin(uint32_t speed);
  long baudRate();
  void setTransmitEnablePin(int transmitEnablePin);

  bool overflow();
  int peek();

  virtual size_t write(uint8_t byte);
  virtual int read();
  virtual int available();
  virtual void flush();
  operator bool() { return m_rxValid || m_txValid; }

  // Disable or enable interrupts on the rx pin
  void enableRx(bool on);

  void rxRead();

  // AVR compatibility methods
  bool listen()
  {
    enableRx(true);
    return true;
  }
  void end() { stopListening(); }
  bool isListening() { return m_rxEnabled; }
  bool stopListening()
  {
    enableRx(false);
    return true;
  }

  using Print::write;

private:
  bool isValidGPIOpin(uint8_t pin);

  // Member variables
  int m_rxPin, m_txPin, m_txEnablePin;
  bool m_rxValid, m_rxEnabled;
  bool m_txValid, m_txEnabled;
  bool m_invert, m_overflow;
  uint32_t m_bitTime, rx_bit_time;
  volatile uint32_t m_inPos, m_outPos;
  int m_buffSize;
  uint8_t *m_buffer;
  // void WAIT(uint32_t &start, uint32_t &wait);
};

// If only one tx or rx wanted then use this as parameter for the unused pin
#define SW_SERIAL_UNUSED_PIN -1

#endif
