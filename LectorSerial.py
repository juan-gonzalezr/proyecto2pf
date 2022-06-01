
import serial 
import json
from DateTime import DateTime
import time
import requests as r
from pymongo import MongoClient

MONGO_URI='mongodb://localhost/proyecto2'
client=MongoClient(MONGO_URI)
db=client['proyecto2']
DBC_datohs=db['datohs']
DBC_datos=db['datos']
DBC_datovs=db['datovs']

CountDirA=0
CountDirV=0
CountDirH=0

t =time.time() 
now_west = DateTime(t, 'US/Pacific')
print(now_west)

ser = serial.Serial('COM3',baudrate=9600)  # open serial port
print(ser.name)         

estado =0


valores=[]
Ba=False
Bv=False
Bh=False
DatosThing={'field1':'','field2':'','field3':''}
DatosThingF1={'field1':''}
DatosThingF2={'field2':''}
DatosThingF3={'field3':''}
DatosMongo={'_id':'','val':''}
cont=0
URL_THING="https://api.thingspeak.com/update?api_key=5AHT0A01ZIBHIU5S"

URL_M_BDA=""
URL_M_BDV=""
URL_M_BDH=""
while estado<31:
    
    trama1=ser.readline().decode("ascii")
    print(trama1)
    
    

    
    if (len(trama1)==3):
        #print("entro al 3")
        #print(len(trama1))
        print(trama1+" entrando al 3")
        
        for i in trama1:
            if i=='A':
                Ba=True
                print("Bandera A activa")
            if i=='V':
                Bv=True
                print("Bandera V activa")
            if i=='H':
                Bh=True
                print("Bandera H activa")
                
        
    else:
        
        trama=trama1[0:4]
        ## hay que hacer las peticiones post para thingsSpeak y mongo
        # hay que almacenar los valores respectivamente tanto pa tp como mongo
        #modelo thingSpeak field1=acelerometro field2=vibracion field3=humedad
        #modelo mongo val=trama en ambos se envian objetos json 
        print("entro al 6")
        print(trama)
        
        
        if Ba==True:
            direccionA=str(hex(CountDirA)).upper()
            Ba=False
            print("Bandera A desactivada")
            DatosThing["field1"]=trama
            DatosMongo["_id"]=direccionA
            DatosMongo["val"]=trama
            DBC_datos.insert_one(DatosMongo)
            #reqThingA=r.post(URL_THING_AH,data=json.dumps(DatosThingF1))
            #print(DatosThing,"datos thing")
            #print(DatosMongo,"datos mongo")
            print(DatosThing)
            CountDirA=CountDirA+1
            
        if Bv==True:
            direccionV=str(hex(CountDirV)).upper()
            Bv=False
            print("Bandera V desactivada")
            DatosThing["field2"]=trama
            DatosMongo["_id"]=direccionV
            DatosMongo["val"]=trama
            DBC_datovs.insert_one(DatosMongo)
            #reqThingHV=r.post(URL_THING_HV,data=json.dumps(DatosThingF2))
            #print(DatosThing,"datos thing")
            #print(DatosMongo,"datos mongo")
            print(DatosThing)
            CountDirV=CountDirV+1
        if Bh==True:
            direccionH=str(hex(CountDirH)).upper()
            Bh=False
            print("Bandera H desactivada")
            DatosThing["field3"]=trama
            DatosMongo["_id"]=direccionH
            DatosMongo["val"]=trama
            DBC_datohs.insert_one(DatosMongo)
            #reqThingHV=r.post(URL_THING_HV,data=json.dumps(DatosThingF3))
            #print(DatosThing,"datos thing")
            #print(DatosMongo,"datos mongo")
            print(DatosThing)
            CountDirH=CountDirH+1
            

        print(DatosThing)
        
        if cont ==3:
             print("ingreso al if de peticiones",cont)
             cont=0
             
             reqThingHV=r.post(URL_THING,data=DatosThing)
             #reqThingA=r.post(URL_THING_AV,data=json.dumps(DatosThing))
             print("peticiones de thing enviadas")
             DatosThing["field1"]=""
             DatosThing["field2"]=""
             DatosThing["field3"]=""
             time.sleep(3)
        cont=cont+1
        
    time.sleep(1)
    
    estado=estado+1   
        
        


    