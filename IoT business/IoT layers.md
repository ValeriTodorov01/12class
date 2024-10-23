# OSI model
- Изолация между слоевете
- 7ми слой(апплицатион) - http

# IoT
- Application, User layer, GUI
- Event Handling
- Network Layer
- Thing(physical, hardware layer) - сензор(усеща), актуатор(предава), захранване(PSU), CPU, transceiver

## Захранване
- PSU - Power Supply Unit
- Първо намаляме напрежението и после го правим DC 

## CPU
- Избира се спрямо сензори и актуатори и какви интерфейси са им необходими. Интерфейс е SPI, I2C, UART, GPIO

## Network Layer
- Среда за предаване на данни
- Mesh and Star
- Buzz protocol - I2C, SPI и най-важен - Canvas

## Event Handling(Backend)
- Storage - DB
- Data pipeline - Dirty data -> Clean data е бронзов слой
датата се чисти после, за да се види зашо въобше съществува
- Data mining - Silver layer and Gold layer

## User layer
- 