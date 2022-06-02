
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

ser = serial.Serial('COM4',baudrate=115200)  # open serial port
print(ser.name)         

estado =0

def map_acelerometro(x):
    y=""
    if(x=="1.40"):y="90"
    elif(x=="1.41"):y="90"
    elif(x=="1.42"):y="90"
    elif(x=="1.43"):y="90"
    elif(x=="1.44"):y="90"
    elif(x=="1.45"):y="90"
    elif(x=="1.46"):y="90"
    elif(x=="1.47"):y="90"
    elif(x=="1.48"):y="90"
    elif(x=="1.49"):y="90"
    


    elif(x=="1.50"):y="90"
    elif(x=="1.51"):y="89"
    elif(x=="1.52"):y="88"
    elif(x=="1.53"):y="87"
    elif(x=="1.54"):y="86"
    elif(x=="1.55"):y="85"
    elif(x=="1.56"):y="84"
    elif(x=="1.57"):y="83"
    elif(x=="1.58"):y="82"
    elif(x=="1.59"):y="81"
    elif(x=="1.60"):y="81"
    
    
    elif(x=="1.61"):y="80"
    elif(x=="1.62"):y="79"
    elif(x=="1.63"):y="78"
    elif(x=="1.64"):y="77"
    elif(x=="1.65"):y="76"
    elif(x=="1.66"):y="75"
    elif(x=="1.67"):y="74"
    elif(x=="1.68"):y="73"
    elif(x=="1.69"):y="72"
    elif(x=="1.70"):y="72"

    elif(x=="1.71"):y="71"
    elif(x=="1.72"):y="70"
    elif(x=="1.73"):y="69"
    elif(x=="1.74"):y="68"
    elif(x=="1.75"):y="67"
    elif(x=="1.76"):y="66"
    elif(x=="1.77"):y="65"
    elif(x=="1.78"):y="64"
    elif(x=="1.79"):y="63"
    elif(x=="1.80"):y="63"

    elif(x=="1.81"):y="62"
    elif(x=="1.82"):y="61"
    elif(x=="1.83"):y="60"
    elif(x=="1.84"):y="59"
    elif(x=="1.85"):y="58"
    elif(x=="1.86"):y="57"
    elif(x=="1.87"):y="56"
    elif(x=="1.88"):y="55"
    elif(x=="1.89"):y="54"
    elif(x=="1.90"):y="54"

    elif(x=="1.91"):y="53"
    elif(x=="1.92"):y="52"
    elif(x=="1.93"):y="51"
    elif(x=="1.94"):y="50"
    elif(x=="1.95"):y="49"
    elif(x=="1.96"):y="48"
    elif(x=="1.97"):y="47"
    elif(x=="1.98"):y="46"
    elif(x=="1.99"):y="45"
    elif(x=="2.00"):y="45"

    elif(x=="2.01"):y="44"
    elif(x=="2.02"):y="43"
    elif(x=="2.03"):y="42"
    elif(x=="2.04"):y="41"
    elif(x=="2.05"):y="40"
    elif(x=="2.06"):y="39"
    elif(x=="2.07"):y="38"
    elif(x=="2.08"):y="37"
    elif(x=="2.09"):y="36"
    elif(x=="2.10"):y="35"

    elif(x=="2.11"):y="34"
    elif(x=="2.12"):y="33"
    elif(x=="2.13"):y="32"
    elif(x=="2.14"):y="31"
    elif(x=="2.15"):y="30"
    elif(x=="2.16"):y="29"
    elif(x=="2.17"):y="28"
    elif(x=="2.18"):y="27"
    elif(x=="2.19"):y="26"
    elif(x=="2.20"):y="26"

    elif(x=="2.21"):y="25"
    elif(x=="2.22"):y="24"
    elif(x=="2.23"):y="23"
    elif(x=="2.24"):y="22"
    elif(x=="2.25"):y="21"
    elif(x=="2.26"):y="20"
    elif(x=="2.27"):y="19"
    elif(x=="2.28"):y="18"
    elif(x=="2.29"):y="17"
    elif(x=="2.30"):y="17"
    
    elif(x=="2.31"):y="16"
    elif(x=="2.32"):y="15"
    elif(x=="2.33"):y="14"
    elif(x=="2.34"):y="13"
    elif(x=="2.35"):y="12"
    elif(x=="2.36"):y="11"
    elif(x=="2.37"):y="10"
    elif(x=="2.38"):y="9"
    elif(x=="2.39"):y="8"
    elif(x=="2.40"):y="8"

    elif(x=="2.41"):y="7"
    elif(x=="2.42"):y="6"
    elif(x=="2.43"):y="5"
    elif(x=="2.44"):y="4"
    elif(x=="2.45"):y="3"
    elif(x=="2.46"):y="3"
    elif(x=="2.47"):y="2"
    elif(x=="2.48"):y="2"
    elif(x=="2.49"):y="1"
    elif(x=="2.50"):y="0"
    
    elif(x=="2.51"):y="0"
    elif(x=="2.52"):y="0"
    elif(x=="2.53"):y="0"
    elif(x=="2.54"):y="0"
    elif(x=="2.55"):y="0"
    elif(x=="2.56"):y="0"
    elif(x=="2.57"):y="0"
    elif(x=="2.58"):y="0"
    elif(x=="2.59"):y="0"
    elif(x=="2.60"):y="0"

    elif(x=="2.61"):y="0"
    elif(x=="2.62"):y="0"
    elif(x=="2.63"):y="0"
    elif(x=="2.64"):y="0"
    elif(x=="2.65"):y="0"
    elif(x=="2.66"):y="0"
    elif(x=="2.67"):y="0"
    elif(x=="2.68"):y="0"
    elif(x=="2.69"):y="0"
    elif(x=="2.70"):y="0"

    elif(x=="2.71"):y="0"
    elif(x=="2.72"):y="0"
    elif(x=="2.73"):y="0"
    elif(x=="2.74"):y="0"
    elif(x=="2.75"):y="0"
    elif(x=="2.76"):y="0"
    elif(x=="2.77"):y="0"
    elif(x=="2.78"):y="0"
    elif(x=="2.79"):y="0"
    elif(x=="2.80"):y="0"

    return y

def map_humedad(x):
    y=""
    if(x=="2.90"):y="65"
    elif(x=="2.91"):y="66"
    elif(x=="2.92"):y="66"
    elif(x=="2.93"):y="67"
    elif(x=="2.94"):y="67"
    elif(x=="2.95"):y="68"
    elif(x=="2.96"):y="68"
    elif(x=="2.97"):y="69"
    elif(x=="2.98"):y="69"
    elif(x=="2.99"):y="70"
    elif(x=="3.00"):y="70"

    
    elif(x=="3.01"):y="70"
    elif(x=="3.02"):y="71"
    elif(x=="3.03"):y="72"
    elif(x=="3.04"):y="73"
    elif(x=="3.05"):y="74"
    elif(x=="3.06"):y="75"
    elif(x=="3.07"):y="75"
    elif(x=="3.08"):y="75"
    elif(x=="3.09"):y="76"
    elif(x=="3.10"):y="77"
    return y 
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
while estado<30:
    
    trama1=ser.readline().decode("ascii")
   # print(trama1)
    val1=trama1[0:2]
    val2=trama1[2:6]
    tramaA=map_acelerometro(trama1[2:6])
    tramaH=map_humedad(trama1[2:6])
    
    #for i in trama1:
    #    if i=='H':
    #        print(trama1)
    #        print(tramaH)
                
    
    #print(val1)
    

    #print("tamaño del vector",len(trama1))
    
    
    
    if (len(trama1)==7):
         #print("entro al 3")
         #print(len(trama1))
        print(trama1+" entrando al 7")
        
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
            
            
        if Ba==True:
             direccionA=str(hex(CountDirA)).upper()
             Ba=False
             print("Bandera A desactivada")
             DatosThing["field1"]=tramaA
             DatosMongo["_id"]=direccionA
             DatosMongo["val"]=tramaA
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
                DatosThing["field2"]=val2
                DatosMongo["_id"]=direccionV
                DatosMongo["val"]=val2
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
                DatosThing["field3"]=tramaH
                DatosMongo["_id"]=direccionH
                DatosMongo["val"]=tramaH
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
        
    else:
        print("else")
        
        
    """  
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
         """
        
    #time.sleep(1) 
    
    estado=estado+1   
    #print(estado)
        
        


    