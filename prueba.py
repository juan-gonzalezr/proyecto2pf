
# for i in range(500):
#     direccion=str(hex(i)).upper()
#     print(direccion)

x=["2.50","1.52","1.60","1.70"]


def map_acelerometro(x):
    y=""
    if(x=="1.50"):y="90"
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
    return y
    

def map_humedad(x):
    y=""
    if(x=="2.90"):y="18"
    elif(x=="2.91"):y="18"
    elif(x=="2.92"):y="19"
    elif(x=="2.93"):y="19"
    elif(x=="2.94"):y="20"
    elif(x=="2.95"):y="20"
    elif(x=="2.96"):y="21"
    elif(x=="2.97"):y="21"
    elif(x=="2.98"):y="22"
    elif(x=="2.99"):y="22"
    elif(x=="3.00"):y="23"

    
    elif(x=="3.01"):y="23"
    elif(x=="3.02"):y="23"
    elif(x=="3.03"):y="23"
    elif(x=="3.04"):y="23"
    elif(x=="3.05"):y="24"
    elif(x=="3.06"):y="24"
    elif(x=="3.07"):y="25"
    elif(x=="3.08"):y="25"
    elif(x=="3.09"):y="26"
    elif(x=="3.10"):y="27"
    return y 


in_min=1.50
in_max=2.50
out_min=-1.00
out_max=1.00

for i in range(len(x)-1):
    print(map_acelerometro(x[i]))
    print(x[i])


