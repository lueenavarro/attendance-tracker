# attendance-tracker

## Setting up
- Install Node JS and Arduino IDE
- Install all dependencies by running `npm install`.
- Change the COM port in driver.js
  - Open Arduino IDE then go to Tools > Port. You can check which COM port the Arduino is connected to
 `const port = new SerialPort('COM7', {
  baudRate: 9600
}); ` 

- Setup the database in driver.js

## Uploading the code to Arduino
(since the code is already uploaded to the device, you may skip this part)
- Install Arduino IDE.
- Download MFRC522 Library (https://www.arduinolibraries.info/libraries/mfrc522). 
- From the IDE, go to Sketch > Include Library > Add .zip library. Choose MFRC522-x.x.x.zip
- Upload the code from'RFIDTracker/rfidTracker.ino' to the Arduino.

## Running the project
- Run the project. type `node driver.js`
