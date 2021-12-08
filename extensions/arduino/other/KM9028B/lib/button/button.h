#ifndef BUTTON_H
#define BUTTON_H

class BUTTON {
public:
        BUTTON();
        int direction(int Pin,int Dir);
        
};

BUTTON::BUTTON() 
{
	
}

int BUTTON::direction(int Pin,int Dir) 
{
     uint8_t direct;
     switch (Dir)
     {
     case 0:
         if(analogRead(Pin) == 0){
          direct = 1;
          }
          else{
          direct = 0;     
          }
          break;
     case 1:
         if(analogRead(Pin) <= 1900&&analogRead(Pin) >= 1600){
          direct= 1;
          }
          else{
          direct = 0;     
          }
           break;
     case 2:
         if(analogRead(Pin) <= 2500&&analogRead(Pin) >= 2200){
          direct = 1;
          }
          else{
          direct = 0;     
          }
           break;
     case 3:
         if(analogRead(Pin) <= 2900&&analogRead(Pin) >= 2600){
          direct = 1;
          }
          else{
          direct = 0;     
          }
           break;     
     }
     return direct;   

}
#endif 